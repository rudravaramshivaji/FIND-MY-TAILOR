import "animate.css";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
export default function LoginModel({ togglemodel, settogglemodel }) {
  const UserJwt = localStorage.getItem("UserJwt");
  const navigate = useNavigate();
  const [admin, setadmin] = useState({
    UserJwt: UserJwt,
    Name: "",
    Contact: "",
  });
  const Login = async () => {
    try {
      localStorage.setItem("UserName", admin.Name);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm animate__animated animate__fadeIn ">
      <div className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
        <div className="bg-white p-8 rounded-lg">
          <div className="flex justify-end">
            <RxCross2
              size={26}
              color="grey"
              onClick={() => {
                settogglemodel(!togglemodel);
              }}
              cursor={"pointer"}
            />
          </div>
          <form className="space-y-4">
            <div className="flex flex-col space-y-3">
              <label htmlFor="name" className="text-slate-500">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="px-8 sm:px-14px-14 py-2 border-[1px] outline-none"
                onChange={(e) => {
                  setadmin({ ...admin, Name: e.target.value });
                }}
              />
            </div>
            <div className="flex flex-col space-y-3">
              <label htmlFor="Contact" className="text-slate-500">
                Contact
              </label>
              <input
                type="text"
                id="Contact"
                className="px-8 sm:px-14px-14 py-2 border-[1px] outline-none"
                onChange={(e) => {
                  setadmin({ ...admin, Contact: e.target.value });
                }}
              />
            </div>
            <div className="my-5 flex justify-center">
              <button
                className="py-2 text-white bg-yellow-500 rounded-full px-20"
                onClick={Login}
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
