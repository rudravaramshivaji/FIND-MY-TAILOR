import { useId, useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../Firebase";
import { useNavigate } from "react-router-dom";
import LoginModel from "../models/LoginModel";
export default function Signup({ location }) {
  const UserJwt = useId();
  const navigate = useNavigate();
  const LoginJwt = localStorage.getItem("UserJwt");
  const [togglemodel, settogglemodel] = useState(false);
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
      localStorage.setItem("UserName", admin.Name);
      navigate(`/`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <main>
        <div className="flex flex-col items-center justify-center mx-auto my-3">
          <div className="space-y-5 text-center md:space-y-7">
            <h1 className="text-3xl font-semibold leading-10 text-yellow-500 md:text-4xl">
              Welcome to FindMyTailor.com
            </h1>
            <p className="text-slate-500 sm:text-lg md:text-xl ">
              Get Started for Free and find amazing work
            </p>
          </div>

          <form className="flex flex-col justify-center my-8 space-y-7 ">
            <div className="flex flex-col space-y-3">
              <label htmlFor="name" className="text-slate-500">
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                value={admin.Name}
                onChange={(e) => {
                  setadmin({ ...admin, Name: e.target.value });
                }}
                className="px-8 sm:px-14 py-2 border-[1px] outline-none"
              />
            </div>
            <div className="flex flex-col space-y-3">
              <label htmlFor="Address" className="text-slate-500">
                Address
              </label>
              <input
                id="Address"
                type="text"
                required
                value={admin.Address}
                onChange={(e) => {
                  setadmin({ ...admin, Address: location });
                }}
                className="px-8 sm:px-14px-14 py-2 border-[1px] outline-none"
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
                required
                onChange={(e) => {
                  setadmin({ ...admin, Contact: e.target.value });
                }}
                className="px-8 sm:px-14 py-2 border-[1px] outline-none"
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
                required
                onChange={(e) => {
                  setadmin({ ...admin, About: e.target.value });
                }}
                className="px-8 sm:px-14 py-2 border-[1px] outline-none"
              />
            </div>
            <button
              onClick={Createaccount}
              className="py-2 text-white bg-yellow-500 rounded-full px-7"
            >
              Sign in
            </button>
          </form>
          <p>
            Already have an account?{" "}
            <span
              onClick={() => {
                settogglemodel(!togglemodel);
              }}
              className="text-yellow-500 text-center font-semibold cursor-pointer"
            >
              Login
            </span>
          </p>
        </div>
      </main>
      {togglemodel ? (
        <LoginModel togglemodel={togglemodel} settogglemodel={settogglemodel} />
      ) : null}
    </>
  );
}
