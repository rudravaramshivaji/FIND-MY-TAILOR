import { useEffect, useId, useRef, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { db, storage } from "../Firebase";
import { setDoc, doc, updateDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { FiUploadCloud } from "react-icons/fi";
import "animate.css";
export default function AddProfile({ settooglemodel }) {
  const id = useId();
  const inputref = useRef();
  const navigate = useNavigate();
  const Userjwt = localStorage.getItem("UserJwt");
  const [blobimg, setblogimg] = useState({ image: null });
  const [Path, setPath] = useState();
  const [uploadimage, setuploadimage] = useState({ img: "" });
  const [profileCard, setprofileCard] = useState({
    Address: "",
    ShopName: "",
    AboutShop: "",
    Contact: "",
  });

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    setblogimg(URL.createObjectURL(file));
    setuploadimage(file);
  };

  const SaveImageToCloud = async () => {
    if (uploadimage) {
      const Storeref = ref(storage, `${Userjwt}/${uploadimage.name}`);
      const Upload = uploadBytesResumable(Storeref, uploadimage);
      Upload.on(
        "state_change",
        (snap) => {
          if (snap) return;
        },
        (err) => {
          console.log(err);
        },
        () => {
          getDownloadURL(Upload.snapshot.ref).then((path) => {
            setPath(path);
          });
        }
      );
    }
  };

  const Getlocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      try {
        const userAddress = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`;
        fetch(userAddress)
          .then((res) => res.json())
          .then((response) => {
            setprofileCard({
              ...profileCard,
              Address: response.address.county,
            });
          });
      } catch (error) {
        console.log(error);
      }
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      Getlocation();
      if (Object.values(profileCard).every((i) => i !== "")) {
        await SaveImageToCloud();
        await setDoc(doc(db, "ProfileLive", id), profileCard);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (Path) {
      updateDoc(doc(db, `ProfileLive/${id}`), { Path: Path });
      navigate("/");
    }
  }, [Path, id, navigate]);

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm animate__animated animate__fadeIn ">
        <div className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
          <div className="bg-white  p-9 w-[90vw] sm:w-[50vw] md:w-[40vw] lg:w-[40vw] xl:w-[30vw] rounded-lg">
            <div className="flex justify-end mb-3.5 -mr-3">
              <RxCross2
                onClick={() => {
                  settooglemodel(false);
                }}
                size={25}
                color="grey"
                cursor={"pointer"}
              />
            </div>
            <div>
              <h1 className="mb-6 text-lg font-semibold text-center text-yellow-500 sm:text-lg md:text-xl">
                Make Your Profile Live in Mins
              </h1>
            </div>
            <form
              className="flex flex-col items-center justify-center space-y-8"
              onSubmit={handleSubmit}
            >
              <div>
                <>
                  <FiUploadCloud
                    onClick={() => {
                      inputref.current.click();
                    }}
                    size={45}
                    color="grey"
                    className={` ${blobimg.image !== null ? "hidden" : null} `}
                  />
                  <input
                    type="file"
                    placeholder="Image"
                    required
                    value={profileCard.Path}
                    onChange={handleImageUpload}
                    hidden
                    ref={inputref}
                  />
                </>
                {blobimg.image !== null ? (
                  <img
                    src={blobimg}
                    className={` ${
                      blobimg ? "block" : "hidden"
                    }  max-w-[45vw] sm:max-w-[20vw] mx-auto`}
                    alt=""
                  />
                ) : null}
              </div>
              <div>
                <input
                  type="text"
                  placeholder="ShopName"
                  required
                  value={profileCard.ShopName}
                  className="bg-slate-100 px-8 outline-none py-2.5"
                  onChange={(e) => {
                    setprofileCard({
                      ...profileCard,
                      ShopName: e.target.value,
                    });
                  }}
                />
              </div>
              <div>
                <input
                  type="number"
                  placeholder="Contact Number"
                  required
                  value={profileCard.Contact}
                  className="bg-slate-100 px-8 outline-none py-2.5"
                  onChange={(e) => {
                    setprofileCard({
                      ...profileCard,
                      Contact: e.target.value,
                    });
                  }}
                />
              </div>
              <div>
                <input
                  type="text"
                  value={profileCard.AboutShop}
                  placeholder="About Shop"
                  required
                  className="bg-slate-100 px-8 outline-none py-2.5"
                  onChange={(e) => {
                    setprofileCard({
                      ...profileCard,
                      AboutShop: e.target.value,
                    });
                  }}
                />
              </div>
              <div>
                <input
                  type="text"
                  value={profileCard.Address}
                  placeholder="State , Area"
                  required
                  className="bg-slate-100 px-8 outline-none py-2.5"
                  onChange={(e) => {
                    setprofileCard({
                      ...profileCard,
                      Address: e.target.value,
                    });
                  }}
                />
              </div>
              <button
                className="bg-yellow-500 text-white px-20 py-1.5 rounded-full"
                onClick={handleSubmit}
              >
                Done
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
