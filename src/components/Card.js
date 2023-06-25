import { collection } from "firebase/firestore";
import { db } from "../Firebase";
import { CiLocationOn } from "react-icons/ci";
import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { BiLoaderAlt } from "react-icons/bi";
export default function Card() {
  const docref = collection(db, "Live Tailors");
  const [docs, loading, error] = useCollectionData(docref);
  const [data, setdata] = useState();

  // Fetching the data
  const FetchTailors = useCallback(() => {
    if (error) {
      console.log(error);
    }
    setdata(docs);
  }, [docs, error]);

  useEffect(() => {
    FetchTailors();
  }, [FetchTailors]);
  //  Filter with User's Location
  // console.log(
  //   docs?.map((item, index) => {
  //     if (item.Address === "Hyderbad , Medchal") {
  //       return item;
  //     }
  //   })
  // );
  return (
    <main className="px-8 my-14  flex justify-center flex-col gap-5 items-center sm:grid sm:grid-cols-2 md:grid md:grid-cols-3 lg:grid lg:grid-cols-4 sm:gap-6">
      {loading ? (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <BiLoaderAlt
            size={40}
            className="animate-spin duration-300 ease-in-out"
            color="yellow"
          />
        </div>
      ) : (
        data?.map((_, index) => {
          return (
            <>
              <div
                key={index}
                className="border-[0.3px] border-slate-200 shadow-sm rounded-xl p-3 max-w-sm md:max-w-xl hover:shadow-md duration-300 ease-in-out cursor-pointer"
              >
                <div>
                  <img src={_.image} alt="pic" className="rounded-lg" />
                  <div className="space-y-2.5 my-3.5 pl-1">
                    <div className="flex justify-between items-center">
                      <h1 className="text-2xl font-semibold">{_.Name}</h1>
                      <div className="flex items-center space-x-2">
                        <CiLocationOn size={24} color="grey" />
                        <p className="text-sm text-slate-600">{_.Address}</p>
                      </div>
                    </div>
                    <p className="leading-7 text-sm">{_.About}</p>
                  </div>
                  <div className="flex items-center justify-end space-x-4 py-3.5">
                    <Link to={_.UserJwt}>
                      <button className="bg-yellow-500 text-white px-6 py-1.5 rounded-full font-semibold text-sm">
                        View Profile
                      </button>
                    </Link>
                    <button className="bg-yellow-500 text-white px-6 py-1.5 rounded-full font-semibold text-sm">
                      <a href={`tel:${_.Contact}`}>Contact</a>
                    </button>
                  </div>
                </div>
              </div>
            </>
          );
        })
      )}
    </main>
  );
}
