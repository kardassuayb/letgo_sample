const Svg = () => {
  return (
    <div className="flex items-end md:ml-auto">
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
  );
};

export default Svg;
