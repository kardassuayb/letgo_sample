const Header = () => {
  return (
    <header className="bg-transparent w-[100%] ">
      <div className="flex justify-between">
        <div className="flex items-center text-[#5C619C] font-medium text-sm">
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
        <div className="flex items-center">
          <div className="relative mr-4 font-medium text-[#5C619C]">
            <select className="appearance-none border border-none px-3 py-1 rounded-md bg-transparent">
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
          <button className=" flex bg-white text-[#e44545] font-medium px-4 py-2 rounded bordered shadow-sm shadow-gray-300">
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
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
