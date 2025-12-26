const awards = [
  "/award1.jpeg",
  "/award2.jpeg",
  "/award3.jpeg",
  "/award4.jpeg",
  "/award5.jpeg",
];

export const AwardsSlider = () => {
  return (
    <div className="relative overflow-hidden w-full mt-24">

      {/* Fade edges */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-linear-to-r from-[#F7F8FA] to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-linear-to-l from-[#F7F8FA] to-transparent z-10" />

      {/* TRACK */}
      <div className="awards-track">
        {[...awards, ...awards,...awards].map((img, i) => (
          <div key={i} className="award-item">
            <img
              src={img}
              alt="Award"
              className=" h-32 w-32 md:h-44 md:w-44 object-cover grayscale hover:grayscale-0 transition duration-300"
            />
          </div>
        ))}
      </div>

    </div>
  );
};
