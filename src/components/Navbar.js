import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { RiAccountCircleLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { AddProfile } from "./index";
export default function Navbar() {
  const [istoggle, setistoggle] = useState(false);
  const [sticky, setsticky] = useState(false);
  const [tooglemodel, settooglemodel] = useState(false);
  const Userjwt = localStorage.getItem("UserJwt");
  window.addEventListener("scroll", () => {
    if (window.scrollY >= 100) {
      setsticky(true);
    }
  });

  return (
    <>
      <nav
        className={`md:flex md:justify-between items-center md:px-10 px-4 py-1.5 md:py-4 shadow-sm border-b-[1px]  border-slate-100  ${
          sticky
            ? "fixed bg-white ease-in-out duration-300 top-0 w-screen"
            : null
        } `}
      >
        <div className="flex justify-between md:hidden items-center px-5 py-3">
          <div>
            <Link to={"/"}>
              <h1 className="text-xl text-yellow-500 font-semibold">
                FindMyTailor
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
            <h1 className="md:text-2xl lg:text-3xl text-xl text-yellow-500 font-semibold">
              FindMyTailor
            </h1>
          </Link>
        </div>
        <ul
          className={` bg-yellow-500 text-white font-semibold md:bg-white md:text-black md:flex md:items-center md:space-x-8 md:space-y-0 space-y-6 pb-2 py-5 md:py-0 my-4 md:my-0 md:text-left  text-center ${
            istoggle ? "block" : "hidden"
          }`}
        >
          <li className="cursor-pointer py-1.5 hover:bg-yellow-400 ease-in-out duration-200 md:hover:bg-white md:hover:text-yellow-500 md:duration-300">
            Home
          </li>
          <li className="cursor-pointer py-1.5 hover:bg-yellow-400 ease-in-out duration-200 md:hover:bg-white md:hover:text-yellow-500 md:duration-300">
            About
          </li>
          <li className="cursor-pointer py-1.5 hover:bg-yellow-400 ease-in-out duration-200 md:hover:bg-white md:hover:text-yellow-500 md:duration-300">
            Contact
          </li>
          <li className="cursor-pointer py-1.5 hover:bg-yellow-400 ease-in-out duration-200 md:hover:bg-white md:hover:text-yellow-500 md:duration-300">
            Services
          </li>
          {Userjwt ? (
            <li onClick={()=>{
              settooglemodel(true)
            }} className="cursor-pointer py-1.5 hover:bg-yellow-400 ease-in-out duration-200 md:hover:bg-white md:hover:text-yellow-500 md:duration-300">
              Profile Live
            </li>
          ) : (
            ""
          )}
          <li className="cursor-pointer md:hidden py-1.5 hover:bg-yellow-400 ease-in-out duration-200 ">
            <Link to={`/profile/${Userjwt}`}>Your Profile</Link>
          </li>
          <div>
            {Userjwt ? (
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
