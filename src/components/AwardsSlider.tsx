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
      <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-[#F7F8FA] to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-[#F7F8FA] to-transparent z-10" />

      {/* TRACK */}
      <div className="awards-track flex w-max items-center gap-6 md:gap-16">
        {[...awards, ...awards].map((img, i) => (
          <div
            key={i}
            className="flex items-center justify-center shrink-0"
          >
            <img
              src={img}
              alt="Award"
              className="
                h-32 w-32 md:h-60 md:w-60
                object-cover rounded-xl
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


