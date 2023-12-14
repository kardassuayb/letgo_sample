const ContactUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div id="contactUs" className="mt-28 mb-10 w-full">
      <div className="md:mx-auto md:w-[380px]">
        <h4 className="text-[#f06d6d] text-sm font-bold mr-auto ml-2">
          CONTACT US
        </h4>
        <h1 className="text-[#5C619C] text-3xl font-bold mt-4 ml-1">
          Get in Touch
        </h1>
      </div>
      <form
        onSubmit={handleSubmit}
        className="mt-8 flex flex-col justify-between md:mx-4"
      >
        <div className="flex mb-4">
          <input
            type="text"
            className="w-1/2 px-4 py-2 mr-2 border placeholder-[#5C619C] bg-[#5C619C]/10 text-sm font-bold"
            placeholder="Your email"
          />
          <input
            type="text"
            className="w-1/2 px-4 py-2 ml-2 border placeholder-[#5C619C] bg-[#5C619C]/10 text-sm font-bold"
            placeholder="Subject"
          />
        </div>
        <textarea
          className="w-full px-4 py-2 border placeholder-[#5C619C] bg-[#5C619C]/10 text-sm font-bold"
          rows="4"
          placeholder="Message here..."
        ></textarea>
        <button
          type="submit"
          className="text-slate-100 bg-[#f06d6d] rounded-full mx-auto py-2 px-6 mt-10"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
