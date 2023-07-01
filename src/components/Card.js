import { collection, getDocs } from "firebase/firestore";
import { db } from "../Firebase";
import { CiLocationOn } from "react-icons/ci";
import React, { useEffect, useState } from "react";
export default function Card({ location }) {
  const [profileData, setProfileData] = useState([]);
  useEffect(() => {
    const fetchFitleredData = async () => {
      const profileRef = collection(db, "ProfileLive");
      const profileSnapshot = await getDocs(profileRef);
      const data = profileSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      const FilteredLocation = data.filter((i) => {
        if (location === i.Address) {
          return i;
        }
      });
      setProfileData(FilteredLocation);
      console.log(FilteredLocation);
    };
    fetchFitleredData();
  }, [location]);
  return (
    <main className="flex flex-col items-center justify-center gap-5 px-8 my-20 sm:grid sm:grid-cols-2 md:grid md:grid-cols-3 lg:grid lg:grid-cols-4 sm:gap-6">
      {profileData?.map((_, index) => {
        return (
          <React.Fragment key={index}>
            <div
              key={index}
              className="border-[0.3px] border-slate-200 shadow-sm rounded-xl p-3 max-w-sm md:max-w-xl hover:shadow-md duration-300 ease-in-out cursor-pointer"
            >
              <div>
                <img src={_.Path} alt="pic" className="rounded-lg" />
                <div className="space-y-2.5 my-3.5 pl-1">
                  <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-semibold">{_.ShopName}</h1>
                    <div className="flex items-center space-x-2">
                      <CiLocationOn size={24} color="grey" />
                      <p className="text-sm text-slate-600">{_.Address}</p>
                    </div>
                  </div>
                  <p className="text-sm leading-7">{_.AboutShop}</p>
                </div>
                <div className="flex items-center justify-end space-x-4 py-3.5">
                  <button className="bg-yellow-500 text-white px-6 py-1.5 rounded-full font-semibold text-sm">
                    <a href={`tel:${_.Contact}`}>Contact</a>
                  </button>
                </div>
              </div>
            </div>
          </React.Fragment>
        );
      })}
    </main>
  );
}
