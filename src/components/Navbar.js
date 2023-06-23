import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
export default function Navbar() {
  const [istoggle, setistoggle] = useState(false);

  const handleToggle = () => {
    setistoggle(!istoggle);
  };

  return (
    <>
      <nav className="md:flex md:justify-between md:px-10 md:py-3">
        <div className="flex justify-between md:hidden items-center px-5 py-3">
          <div>
            <h1 className="text-xl">Logo</h1>
          </div>
          <AiOutlineMenu
            cursor={"pointer"}
            onClick={handleToggle}
            size={23}
            color="black"
          />
        </div>
        <div className="hidden md:block">
          <h1 className="md:text-2xl text-xl">Logo</h1>
        </div>
        <ul
          className={`md:flex md:items-center md:space-x-8 md:space-y-0 space-y-6 pb-2 my-4 md:my-0 md:text-left  text-center ${
            istoggle ? "block" : "hidden"
          }`}
        >
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Contact</li>
          <li className="cursor-pointer">Services</li>
          <div>
            <button className="bg-yellow-500 text-white px-7 py-1.5 rounded-full">
              Signup
            </button>
          </div>
        </ul>
      </nav>
    </>
  );
}
