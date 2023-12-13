const Header = () => {
  return (
    <header className="bg-transparent w-[100%] text-[#5C619C]">
      <div className="flex justify-between">
        <div className="flex items-center">
          <nav className="flex items-center gap-4">
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
          <div className="relative mr-4">
            <select className="appearance-none border border-white px-3 py-1 rounded-md bg-transparent">
              <option value="tr">TR</option>
              <option value="en">EN</option>
            </select>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute right-1 top-1 h-full w-3 pointer-events-none text-[#5C619C]"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M6 9l6 6l6 -6" />
            </svg>
          </div>
          <button className="bg-white text-gray-900 px-4 py-2 rounded-md">
            Contact Us
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
