import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import {getDownloadURL, getStorage, ref, uploadBytes} from 'firebase/storage'
import { db } from "../Firebase";
import {collection, addDoc} from 'firebase/firestore';
export default function AddProfile({ tooglemodel, settooglemodel }) {
  

  const storage = getStorage();

  // getting user location ....

  // postion 
  // const [location, setLocation] = useState();
  // const Address = async(position) => {
  //   const {latitude, longitude} = position.coords;
  //   try {

  //     const userAddress = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}`;
  //     const response = await fetch(userAddress);
  //     const data = await response.json();
  //     const {suburb} = data.address;
  //     // setLocation(suburb);
  //     console.log(suburb);
      
  //   } catch (error) {
  //     console.log(error);
  //   } 

  // }

  // navigator.geolocation.getCurrentPosition(Address, (error) => {console.log(error)})
  const [image, setImage] = useState(null);
  const [profileCard, setprofileCard] = useState({
    image: null,
    imageURL: "",
    Address: "Hyderabad",
    ShopName: "",
    AboutShop: "",
    Contact: "",
  });

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    setImage(file);
    const imageUrl = URL.createObjectURL(file);
    setprofileCard({
      ...profileCard,
      image: file,
      imageURL: imageUrl,
    });
  };

  



  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "PROFILELIVE"), profileCard);
  
      // Upload the image to Firebase Storage
      if (image) {
        const storageRef = ref(storage, `images/${image.name}`);
        const snapshot = await uploadBytes(storageRef, image);
        const downloadUrl = await getDownloadURL(snapshot.ref);
  
        // Update the profile card with the image URL
        setprofileCard({
          ...profileCard,
          image: downloadUrl,
        });
      }
  
      // Reset the form fields
      setprofileCard({
        image: null,
        imageURL: "",
        Address: "",
        ShopName: "",
        AboutShop: "",
        Contact: "",
      });
      settooglemodel(false);
    } catch (error) {
      console.log(error);
    }
  };

  
  

  return (
    <>
      <div className="fixed bg-black inset-0 bg-opacity-70 backdrop-blur-sm">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="bg-white p-8 rounded-lg">
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
              <h1 className="text-yellow-500 text-lg font-semibold mb-6 text-center sm:text-lg md:text-xl">
                Make Your Profile Live in Mins
              </h1>
            </div>
            <form className="flex flex-col justify-center items-center space-y-8" onSubmit={handleSubmit}>
              <div className="">
                <input
                  type="file"
                  placeholder="Image"
                  required
                  value={profileCard.image}
                  className="bg-slate-100 px-8 outline-none py-2.5"
                  onChange={handleImageUpload}
              //     onChange={async (e) => {
              //       const file = e.target.files[0];
              //      const imageUrl = URL.createObjectURL(file);

              //        const storageRef = ref(storage, `images/${file.name}`);
              //      const snapshot = await uploadBytes(storageRef, file);
              //             const downloadUrl = await getDownloadURL(snapshot.ref);

              //          setImage(file);
              // //  setImageUrl(downloadUrl);
              //        setprofileCard({
              //          ...profileCard,
              //         image: file,
              //       imageUrl: downloadUrl,
              //          });
              //     }}
                />
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
                    })
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
                    })
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
                    })
                  }}
                />
              </div>
              <button className="bg-yellow-500 text-white px-20 py-1.5 rounded-full" type="submit">
                Done
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
