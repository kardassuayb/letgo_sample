// IMAGES
import briefcase from "../assets/images/briefcase.png";
import editor from "../assets/images/editor.png";

const Portfolio = () => {
  return (
    <div className="flex justify-between mt-12 mr-4">
      <div className="flex gap-8">
        <div className="flex flex-col gap-6 w-1/3">
          <div className="flex flex-col gap-4">
            <h1 className="text-[#5C619C] text-3xl font-bold">Anything you</h1>
            <h1 className="text-[#5C619C] text-3xl font-bold">need,we've</h1>
            <h1 className="text-[#5C619C] text-3xl font-bold">
              got you covered
            </h1>
          </div>
          <button className="text-slate-100 text-sm w-28 bg-[#FF3946] rounded-full ml-1 py-2 px-4">
            Get in Touch
          </button>
        </div>
        <div className="px-8 py-4 flex flex-col gap-8 justify-between bg-transparent bordered shadow-md shadow-gray-300 w-1/3 h-auto">
          <img src={briefcase} alt="briefcase" width={50} />
          <div>
            <h2 className="text-xl text-[#5C619C] font-bold">Web & Grafic</h2>
            <h2 className="text-xl text-[#5C619C] font-bold">Design</h2>
          </div>
          <p className="text-sm text-[#5C619C] mb-4">
            Vestibulum ac diam sit amet quam vehicula elementum amet es on dui.
            Nulla portttitor accumsan tincidunt.
          </p>
        </div>
        <div className="px-8 py-4 flex flex-col gap-8 justify-between bg-transparent bordered shadow-md shadow-gray-300 w-1/3 h-auto">
          <img src={editor} alt="briefcase" className="mt-2" width={50} />
          <div>
            <h2 className="text-xl text-[#5C619C] font-bold">Web & App</h2>
            <h2 className="text-xl text-[#5C619C] font-bold">Development</h2>
          </div>
          <p className="text-sm text-[#5C619C] mb-4">
            Vestibulum ac diam sit amet quam vehicula elementum amet es on dui.
            Nulla portttitor accumsan tincidunt.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
