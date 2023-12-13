// COMMON
import Square from "../assets/common/square";

const Portfolio = () => {
  return (
    <div className="w-full flex flex-col">
      <div className="flex justify-between mt-20 mb-14">
        <div className="flex flex-col gap-4 text-[#5C619C] text-3xl font-bold">
          <h1>See some of our</h1>
          <h1>Creative work.</h1>
        </div>
        <div className="flex items-end">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-arrow-left"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="#C2B8C3"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M5 12l10 0" />
            <path d="M5 12l6 6" />
            <path d="M5 12l6 -6" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-arrow-right"
            width="32"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="#5C619C"
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
      <div className="flex flex-wrap gap-[19px]">
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
      </div>
      <button className="text-[#f06d6d] text-sm font-bold mt-8 mx-auto">
        See More of These.
      </button>
    </div>
  );
};

export default Portfolio;
