// IMAGES
import logoWhite from "../assets/images/doob_logo_white.png";
// ICONS
import { IconBrandFacebookFilled } from "@tabler/icons-react";
import { IconBrandTwitterFilled } from "@tabler/icons-react";
import { IconBrandDribbble } from "@tabler/icons-react";

const Footer = () => {
  return (
    <div className="w-full bg-[#314584] py-6 flex flex-col items-center">
      <div className="flex flex-col items-center gap-5">
        <div className="flex flex-col items-center ">
          <a href="#home">
            <img src={logoWhite} alt="logo" className="w-[90px] h-[40px]" />
          </a>
          <h2 className="text-4xl font-semibold text-[#FF3946]">
            CREATIVITY ABOVE
          </h2>
        </div>
        <ul className="flex gap-6 text-sm text-[#FFEBF6] items-center">
          <li>
            <a href="#home">Home.</a>
          </li>
          <li>
            <a href="#aboutUs">About us.</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio.</a>
          </li>
          <li>
            <a href="#blog">Blog.</a>
          </li>
          <li>
            <a href="#contactUs">Contact us.</a>
          </li>
        </ul>
        <div className="flex text-[10px] text-[#FFEBF6]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-circle-letter-c mr-2"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            strokwidth="2"
            stroke="currentColor"
            fill="none"
            stroklinecap="round"
            stroklinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
            <path d="M14 10a2 2 0 1 0 -4 0v4a2 2 0 1 0 4 0" />
          </svg>
          <p className="flex items-center">2019 - Doob,All Right Reserved</p>
        </div>
        <div className="flex gap-8 ">
          <IconBrandFacebookFilled className="text-[#FFEBF6] cursor-pointer" />
          <IconBrandTwitterFilled className="text-[#FFEBF6] cursor-pointer" />
          <IconBrandDribbble className="text-[#FFEBF6] cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
