const awards = [
  "/award1.jpeg",
  "/award2.jpeg",
  "/award3.jpeg",
  "/award4.jpeg",
  "/award5.jpeg",
  "/award6.jpeg",
  "/award7.jpeg",
  "/award8.jpeg",
  "/award9.jpeg",
];

export const AwardsSlider = () => {
  return (
    <div className="relative overflow-hidden w-full mt-24">

      {/* Fade edges */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-linear-to-r from-[#F7F8FA] to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-linear-to-l from-[#F7F8FA] to-transparent z-10" />

      {/* TRACK */}
      <div className="awards-track flex items-center gap-10 md:gap-16">
        {[...awards, ...awards, ...awards].map((img, i) => (
          <div
            key={i}
            className="
              award-item 
              flex items-center justify-center
              rounded-xl
              
              
              hover:shadow-xl
              transition-all duration-300
            "
          >
            <img
              src={img}
              alt="Award"
              className="
                h-44 w-44 md:h-60 md:w-60
                object-cover
                rounded-xl
                transition-transform duration-300
                hover:scale-105
              "
            />
          </div>
        ))}
      </div>

    </div>
  );
};

