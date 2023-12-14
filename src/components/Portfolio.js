// COMMON
import Square from "../assets/common/square";
import Svg from "../assets/common/svg";

const Portfolio = () => {
  return (
    <div
      id="portfolio"
      className="w-full flex flex-col mt-20 lg:mt-44 md:mt-24"
    >
      <div className="flex justify-between mb-14 md:flex-col md:mx-auto md:w-[380px]">
        <div className="flex flex-col gap-4 text-[#5C619C] text-3xl font-bold">
          <h1>See some of our</h1>
          <h1>Creative work.</h1>
        </div>
        <Svg />
      </div>
      <div className="flex flex-wrap gap-[19px] lg:justify-around md:justify-center">
        <Square />
        <Square />
        <Square />
        <Square />
        <div className="sm:hidden">
          <Square />
        </div>
        <div className="sm:hidden">
          <Square />
        </div>
      </div>
      <a
        href="#portfolio"
        className="text-[#f06d6d] text-sm font-bold mt-8 mx-auto"
      >
        See More of These.
      </a>
    </div>
  );
};

export default Portfolio;
