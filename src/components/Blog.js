// COMMON
import Svg from "../assets/common/svg";

const Blog = () => {
  return (
    <div id="blog" className="mt-28 w-full md:flex-col md:mx-auto md:w-[380px]">
      <div className="flex justify-between mb-12 md:flex-col">
        <div>
          <h4 className="text-[#f06d6d] text-sm font-bold mr-auto ml-2">
            BLOG STORIES
          </h4>
          <div className="flex flex-col gap-4 text-[#5C619C] text-3xl font-bold ml-1 mt-4">
            <h1>Check Our News</h1>
          </div>
        </div>
        <Svg />
      </div>
      <div className="flex flex-wrap justify-between lg:justify-around md:mx-auto sm:gap-10">
        <div className="bg-[#FF3946] w-[286px] h-[260px] px-8 py-8 opacity-70 md:w-[244px] sm:w-[286px]">
          <div className="text-[#FFEBF6] text-sm flex flex-col gap-1 mb-6 font-medium">
            <h6>New Adventure</h6>
            <p className="text-[10px]">17 March 2019</p>
          </div>
          <p className="text-[#FFEBF6] text-sm leading-6">
            Vestibulum ac diam sit amet quam vehicula elementum amet es on dui.
            Nulla portttitor accumsan tincidunt.
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-arrow-right ml-auto mt-2"
            width="32"
            height="24"
            viewBox="0 -3 24 24"
            strokeWidth="2"
            stroke="#FFEBF6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M5 12l18 0" />
            <path d="M18 18l8 -6" />
            <path d="M18 6l8 6" />
          </svg>
        </div>
        <div className="bg-transparent w-[286px] h-[260px] px-8 py-8 shadow-md shadow-gray-300 md:w-[244px] sm:w-[286px]">
          <div className="text-[#FFEBF6] text-sm flex flex-col gap-1 mb-6 font-medium">
            <h6 className="text-[#5C619C]">New Adventure</h6>
            <p className="text-[10px] text-gray-400">17 March 2019</p>
          </div>
          <p className="text-[#5C619C] text-sm leading-6">
            Vestibulum ac diam sit amet quam vehicula elementum amet es on dui.
            Nulla portttitor accumsan tincidunt.
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-arrow-right ml-auto mt-2"
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
        </div>
        <div className="bg-transparent w-[286px] h-[260px] px-8 py-8 shadow-md shadow-gray-300 lg:hidden">
          <div className="text-[#FFEBF6] text-sm flex flex-col gap-1 mb-6 font-medium">
            <h6 className="text-[#5C619C]">New Adventure</h6>
            <p className="text-[10px] text-gray-400">17 March 2019</p>
          </div>
          <p className="text-[#5C619C] text-sm leading-6">
            Vestibulum ac diam sit amet quam vehicula elementum amet es on dui.
            Nulla portttitor accumsan tincidunt.
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-arrow-right ml-auto mt-2"
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
        </div>
      </div>
    </div>
  );
};

export default Blog;
