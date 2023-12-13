const AboutUs = () => {
  return (
    <div className="mr-auto w-[380px] my-48 flex flex-col gap-7">
      <div className="flex flex-col gap-4">
        <h1 className="text-[#5C619C] text-5xl font-bold">The Spirit of</h1>
        <h1 className="text-[#5C619C] text-5xl font-bold">Digital Agency.</h1>
      </div>
      <p className="text-sm text-gray-400">
        Vestibulum ac diam sit amet quam vehicula elementum amet es on dui.
        Nulla portttitor accumsan tincidunt.
      </p>
      <div className="flex gap-6">
        <button className="text-slate-100 bg-[#FF3946] rounded-full ml-1 py-2 px-4">
          More About us
        </button>
        <button className="text-[#5C619C] text-sm font-semibold">
          Get in Touch.
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
