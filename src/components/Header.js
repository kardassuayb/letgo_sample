import { useState } from "react";
// IMAGES
import logo from "../assets/images/doob_logo.png";
// ICONS
import { IconMenu2, IconLayoutSidebarRightExpand } from "@tabler/icons-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header id="header" className="bg-transparent w-[100%] ">
      <div>
        <button
          onClick={toggleMenu}
          className="text-[#5C619C] focus:outline-none hidden md:block"
        >
          {!isOpen && <IconMenu2 />}
        </button>
        {isOpen && (
          <div className="fixed flex flex-col justify-between top-0 left-0 h-full w-1/3 bg-white/90 z-50 shadow-md">
            <nav className="flex flex-col p-4 gap-4 text-[#5C619C] font-medium text-sm">
              <div className="flex justify-between items-center px-0 mb-4">
                <a href="#home">
                  <img
                    src={logo}
                    alt="logo"
                    className="w-[40px] h-[20px] mt-1"
                  />
                </a>
                <IconLayoutSidebarRightExpand
                  onClick={() => setIsOpen(false)}
                  className="text-[#5C619C] cursor-pointer"
                />
              </div>
              <a href="#home" className="hover:text-gray-300">
                Home.
              </a>
              <a href="#aboutUs" className="hover:text-gray-300">
                About us.
              </a>
              <a href="#portfolio" className="hover:text-gray-300">
                Portfolio.
              </a>
              <a href="#blog" className="hover:text-gray-300">
                Blog.
              </a>
              <a href="#contactUs" className="hover:text-gray-300">
                Contact us.
              </a>
            </nav>
            <div className="flex justify-between">
              <div className="relative font-medium text-[#5C619C]">
                <select className="appearance-none border border-none px-3 py-1 rounded-md bg-transparent text-sm">
                  <option value="tr">EN</option>
                  <option value="en">TR</option>
                </select>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute right-0 -top-2 h-full w-3 pointer-events-none text-[#5C619C]"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M6 9l6 6l6 -6" />
                </svg>
              </div>
              <a
                href="#contactUs"
                className=" flex flex-col mr-2 bg-white text-[#e44545]/80 font-medium rounded bordered shadow-sm shadow-gray-300"
              >
                Contact Us
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-arrow-right ml-auto"
                  width="32"
                  height="24"
                  viewBox="0 -3 24 24"
                  strokeWidth="2"
                  stroke="#ff8080"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 12l18 0" />
                  <path d="M18 18l8 -6" />
                  <path d="M18 6l8 6" />
                </svg>
              </a>
            </div>
          </div>
        )}
      </div>
      <div className="flex justify-between">
        <div className="flex items-center text-[#5C619C] font-medium text-sm md:ml-4 md:hidden">
          <nav className="flex items-center gap-6">
            <a href="#home" className="hover:text-gray-300">
              Home.
            </a>
            <a href="#aboutUs" className="hover:text-gray-300">
              About us.
            </a>
            <a href="#portfolio" className="hover:text-gray-300">
              Portfolio.
            </a>
            <a href="#blog" className="hover:text-gray-300">
              Blog.
            </a>
            <a href="#contactUs" className="hover:text-gray-300">
              Contact us.
            </a>
          </nav>
        </div>
        <div className="flex items-center md:hidden">
          <div className="relative mr-4 font-medium text-[#5C619C]">
            <select className="appearance-none border border-none px-3 py-1 rounded-md bg-transparent text-sm">
              <option value="tr">EN</option>
              <option value="en">TR</option>
            </select>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute right-0 top-1 h-full w-3 pointer-events-none text-[#5C619C]"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M6 9l6 6l6 -6" />
            </svg>
          </div>
          <a
            href="#contactUs"
            className=" flex bg-white opacity-70 text-[#e44545] font-medium px-4 py-2 rounded bordered shadow-sm shadow-gray-300"
          >
            Contact Us
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-arrow-right"
              width="32"
              height="24"
              viewBox="0 -3 24 24"
              strokeWidth="2"
              stroke="#ff8080"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 12l18 0" />
              <path d="M18 18l8 -6" />
              <path d="M18 6l8 6" />
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
