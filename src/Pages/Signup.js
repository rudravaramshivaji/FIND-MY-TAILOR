import { useId, useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../Firebase";
import { useNavigate } from "react-router-dom";
export default function Signup() {
  const UserJwt = useId();
  const navigate = useNavigate();
  const [admin, setadmin] = useState({
    UserJwt: UserJwt,
    Name: "",
    Contact: "",
    Address: "",
    About: "",
  });

  const Createaccount = async (e) => {
    e.preventDefault();
    try {
      await setDoc(doc(db, "TAILORS", UserJwt), admin);
      localStorage.setItem("UserJwt", UserJwt);
      navigate(`/profile/${UserJwt}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <main>
        <div className="flex justify-center flex-col items-center my-8  mx-auto">
          <div className="text-center space-y-5 md:space-y-7">
            <h1 className="text-yellow-500 text-2xl sm:text-3xl md:text-4xl font-semibold">
              Welcome to FindMyTailor.com
            </h1>
            <p className="text-slate-500 sm:text-lg md:text-xl ">
              Get Started for Free and find amazing work
            </p>
          </div>

          <form className="my-8 flex justify-center flex-col space-y-8 ">
            <div className="flex flex-col space-y-3">
              <label htmlFor="name" className="text-slate-500">
                Name
              </label>
              <input
                id="name"
                type="text"
                value={admin.Name}
                onChange={(e) => {
                  setadmin({ ...admin, Name: e.target.value });
                }}
                className="px-14 py-2 border-[1px] outline-none"
              />
            </div>
            <div className="flex flex-col space-y-3">
              <label htmlFor="Address" className="text-slate-500">
                Address
              </label>
              <input
                id="Address"
                type="text"
                value={admin.Address}
                placeholder="Hyderabad , Kompally"
                onChange={(e) => {
                  setadmin({ ...admin, Address: e.target.value });
                }}
                className="px-14 py-2 border-[1px] outline-none"
              />
            </div>
            <div className="flex flex-col space-y-3">
              <label htmlFor="Contact" className="text-slate-500">
                Contact
              </label>
              <input
                id="Contact"
                type="text"
                value={admin.Contact}
                onChange={(e) => {
                  setadmin({ ...admin, Contact: e.target.value });
                }}
                className="px-14 py-2 border-[1px] outline-none"
              />
            </div>
            <div className="flex flex-col space-y-3">
              <label htmlFor="name" className="text-slate-500">
                About
              </label>
              <input
                id="About"
                type="text"
                value={admin.About}
                onChange={(e) => {
                  setadmin({ ...admin, About: e.target.value });
                }}
                className="px-14 py-2 border-[1px] outline-none"
              />
            </div>
            <button
              onClick={Createaccount}
              className="bg-yellow-500 text-white px-7 py-2 rounded-full"
            >
              Create account
            </button>
          </form>
        </div>
      </main>
    </>
  );
}
