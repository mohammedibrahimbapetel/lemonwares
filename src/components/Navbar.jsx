import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { BsXLg } from "react-icons/bs";
import { logo } from "../assets/images";
const Links = ["Our Services", "About Us", "Blog/News", "Contact", "Account"];
const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      {" "}
      <nav className="px-[7%] py-3 flex justify-between items-center w-full  shadow-md bg-[#fdfdfd]">
        <div>
          <img
            src={logo}
            alt="lemon wares logo"
            className="w-[80px]   h-[45px]"
          />
        </div>
        <ul className="sm:flex hidden ">
          {Links.map((link) => (
            <li>
              {" "}
              <a
                className="ml-6 font-semibold text-lg pb-1   hover:border-red-600 hover:border-b-[1px]"
                href="#"
                key={link}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex text-xl cursor-pointer">
          {toggle ? (
            <BsXLg onClick={() => setToggle(false)} />
          ) : (
            <FaBars onClick={() => setToggle(true)} />
          )}
        </div>
      </nav>
      {!toggle ? (
        <div />
      ) : (
        <ul
          className={` 
             sm:hidden flex text-center flex-col justify-center items-center w-fit p-5 rounded-[.5rem] z-10   fixed right-5 top-20 shadow-md bg-[#fdfdfd] `}
        >
          {Links.map((link) => (
            <li className="mt-3">
              <a
                className="  py-[1px] font-normal text-md hover:border-red-600 hover:border-b-[1px]"
                href="#"
                key={link}
                onClick={() => setToggle(true)}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Navbar;
