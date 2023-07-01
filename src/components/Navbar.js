import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { RiAccountCircleLine } from "react-icons/ri";
import { Link, useNavigate, useParams } from "react-router-dom";
import { AddProfile } from "./index";
import "animate.css";
export default function Navbar() {
  const { id } = useParams();
  const Userjwt = localStorage.getItem("UserJwt");
  const User = localStorage.getItem("UserName");
  const [istoggle, setistoggle] = useState(false);
  const [sticky, setsticky] = useState(false);
  const [tooglemodel, settooglemodel] = useState(false);
  const navigate = useNavigate();
  window.addEventListener("scroll", () => {
    if (window.scrollY >= 100) {
      setsticky(true);
    }
  });

  const LogOut = () => {
    localStorage.removeItem("UserName");
    navigate("/");
  };

  return (
    <>
      <nav
        className={`md:flex md:justify-between items-center md:px-10 px-4 py-1.5 md:py-4 shadow-sm border-b-[1px]  border-slate-100  ${
          sticky
            ? "fixed bg-white ease-in-out duration-300 top-0 w-screen"
            : null
        } `}
      >
        <div className="flex items-center justify-between px-5 py-3 md:hidden">
          <div>
            <Link to={"/"}>
              <h1 className="text-xl font-semibold text-yellow-500">
                COSTUMIER
              </h1>
            </Link>
          </div>
          <AiOutlineMenu
            cursor={"pointer"}
            onClick={() => {
              setistoggle(!istoggle);
            }}
            size={23}
            color="black"
          />
        </div>
        <div className="hidden md:block">
          <Link to={"/"}>
            <h1 className="text-xl font-semibold text-yellow-500 md:text-2xl lg:text-3xl">
              COSTUMIER
            </h1>
          </Link>
        </div>
        <ul
          className={` animate__animated animate__fadeIn animate__slow   bg-yellow-500 text-white font-semibold md:bg-white md:text-black md:flex md:items-center md:space-x-8 md:space-y-0 space-y-6 pb-2 py-5 md:py-0 my-4 md:my-0 md:text-left  text-center ${
            istoggle ? "block" : "hidden"
          }`}
        >
          <li className="cursor-pointer py-1.5 hover:bg-yellow-400 ease-in-out duration-200 md:hover:bg-white md:hover:text-yellow-500 md:duration-300">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="cursor-pointer py-1.5 hover:bg-yellow-400 ease-in-out duration-200 md:hover:bg-white md:hover:text-yellow-500 md:duration-300">
            About
          </li>
          <li className="cursor-pointer py-1.5 hover:bg-yellow-400 ease-in-out duration-200 md:hover:bg-white md:hover:text-yellow-500 md:duration-300">
            Contact
          </li>
          {Userjwt && id ? (
            <li
              onClick={() => {
                settooglemodel(true);
              }}
              className="cursor-pointer py-1.5 hover:bg-yellow-400 ease-in-out duration-200 md:hover:bg-white md:hover:text-yellow-500 md:duration-300"
            >
              Profile Live
            </li>
          ) : (
            ""
          )}
          {Userjwt && id ? (
            <li
              onClick={LogOut}
              className="cursor-pointer py-1.5 hover:bg-yellow-400 ease-in-out duration-200 md:hover:bg-white md:hover:text-yellow-500 md:duration-300"
            >
              LogOut
            </li>
          ) : (
            ""
          )}
          {User ? (
            <li className="cursor-pointer md:hidden py-1.5 hover:bg-yellow-400 ease-in-out duration-200 ">
              <Link to={`/profile/${Userjwt}`}>Your Profile</Link>
            </li>
          ) : null}
          <div>
            {User ? (
              <Link to={`/profile/${Userjwt}`}>
                <RiAccountCircleLine
                  className="hidden md:block"
                  size={30}
                  color="grey"
                />
              </Link>
            ) : (
              <Link to={"/sign-up"}>
                <button className="bg-yellow-500 text-white px-7 py-1.5 rounded-full">
                  Signup
                </button>
              </Link>
            )}
          </div>
        </ul>
      </nav>
      {tooglemodel ? (
        <AddProfile tooglemodel={tooglemodel} settooglemodel={settooglemodel} />
      ) : null}
    </>
  );
}
