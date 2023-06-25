import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
export default function AddProfile({ tooglemodel, settooglemodel }) {
  const [profileCard, setprofileCard] = useState({
    image: "",
    ShopName: "",
    AboutShop: "",
    Contact: "",
  });

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
            <form className="flex flex-col justify-center items-center space-y-8">
              <div className="">
                <input
                  type="text"
                  placeholder="Image"
                  required
                  value={profileCard.image}
                  className="bg-slate-100 px-8 outline-none py-2.5"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="ShopName"
                  required
                  value={profileCard.ShopName}
                  className="bg-slate-100 px-8 outline-none py-2.5"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Contact Number"
                  required
                  value={profileCard.Contact}
                  className="bg-slate-100 px-8 outline-none py-2.5"
                />
              </div>
              <div>
                <input
                  type="text"
                  value={profileCard.AboutShop}
                  placeholder="About Shop"
                  required
                  className="bg-slate-100 px-8 outline-none py-2.5"
                />
              </div>
              <button className="bg-yellow-500 text-white px-20 py-1.5 rounded-full">
                Done
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
