// COMMON
import Svg from "../assets/common/svg";
// IMAGES
import briefcase from "../assets/images/briefcase.png";
import editor from "../assets/images/editor.png";

const AboutUs = () => {
  return (
    <div id="aboutUs">
      {/* The Spirit... */}
      <div className="w-[380px] mt-48 flex flex-col justify-start md:w-[360px] md:mx-auto md:mt-24 gap-7">
        <div className="flex flex-col gap-4">
          <h1 className="text-[#5C619C] text-5xl font-bold">The Spirit of</h1>
          <h1 className="text-[#5C619C] text-5xl font-bold">Digital Agency.</h1>
        </div>
        <p className="text-sm text-gray-400">
          Vestibulum ac diam sit amet quam vehicula elementum amet es on dui.
          Nulla portttitor accumsan tincidunt.
        </p>
        <div className="flex gap-6">
          <button className="text-slate-100 bg-[#f06d6d] rounded-full ml-1 py-2 px-4">
            More About us
          </button>
          <a
            href="#contactUs"
            className="text-[#5C619C] text-sm font-semibold flex items-center"
          >
            Get in Touch.
          </a>
        </div>
      </div>
      {/* Anything you... */}
      <div className="flex justify-between md:mx-auto mt-60 mr-4 md:mt-24 md:w-[360px]">
        <div className="flex gap-8 md:flex md:flex-col md:w-full md:mx-auto md:gap-8">
          <div className="flex flex-col gap-6 w-1/3 md:mx-auto md:w-[380px] md:flex-row">
            <div className="flex flex-col gap-4">
              <h1 className="text-[#5C619C] text-3xl font-bold">
                Anything you
              </h1>
              <h1 className="text-[#5C619C] text-3xl font-bold">need,we've</h1>
              <h1 className="text-[#5C619C] text-3xl font-bold">
                got you covered
              </h1>
            </div>
            <div className="flex items-center">
              <a
                href="#contactUs"
                className="text-slate-100 text-sm w-28 bg-[#f06d6d] rounded-full ml-1 py-2 px-4 sm:h-10 "
              >
                Get in Touch
              </a>
            </div>
          </div>
          <div className="px-8 py-4 flex flex-col gap-8 justify-between bg-transparent bordered shadow-md shadow-gray-300 w-1/3 h-auto md:mx-auto md:w-[380px]">
            <img src={briefcase} alt="briefcase" width={50} />
            <div>
              <h2 className="text-xl text-[#5C619C] font-bold">Web & Grafic</h2>
              <h2 className="text-xl text-[#5C619C] font-bold">Design</h2>
            </div>
            <p className="text-sm text-[#5C619C] mb-4">
              Vestibulum ac diam sit amet quam vehicula elementum amet es on
              dui. Nulla portttitor accumsan tincidunt.
            </p>
          </div>
          <div className="px-8 py-4 flex flex-col gap-8 justify-between bg-transparent bordered shadow-md shadow-gray-300 w-1/3 h-auto md:mx-auto md:w-[380px]">
            <img src={editor} alt="briefcase" className="mt-2" width={50} />
            <div>
              <h2 className="text-xl text-[#5C619C] font-bold">Web & App</h2>
              <h2 className="text-xl text-[#5C619C] font-bold">Development</h2>
            </div>
            <p className="text-sm text-[#5C619C] mb-4">
              Vestibulum ac diam sit amet quam vehicula elementum amet es on
              dui. Nulla portttitor accumsan tincidunt.
            </p>
          </div>
        </div>
      </div>
      {/* Some Fine... */}
      <div className="ml-auto w-[436px] mt-32 flex flex-col gap-6 md:mx-auto md:w-[360px] md:mt-24 lg:mb-28 md:mb-0">
        <h4 className="text-[#f06d6d] font-bold">OUR COMPANY</h4>
        <div>
          <h1 className="text-[#5C619C] text-3xl font-bold">Some Fine</h1>
          <h1 className="text-[#5C619C] text-3xl font-bold">Words About Us</h1>
        </div>
        <div className="text-[#5C619C] text-base">
          <p>
            Vestibulum ac diam sit amet quam vehicula elementum amet es on dui.
            Nulla portttitor accumsan tincidunt. Vestibulum ac diam sit amet
          </p>
          <p>
            Quam vehicula elementum amet es on dui. Nulla portttitor accumsan
            tincidunt.
          </p>
        </div>
        <Svg />
      </div>
    </div>
  );
};

export default AboutUs;
