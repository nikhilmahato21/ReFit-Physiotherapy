const services = [
  {
    title: "Cupping Therapy",
    image: "/cups.jpg",
    className: "col-span-12 md:col-span-6 lg:col-span-5",
  },
  {
    title: "Dry Needling",
    image: "/dry-needling.jpg",
    className: "col-span-12 md:col-span-3 lg:col-span-3",
  },
  {
    title: "Sports Injury Rehab",
    image: "https://cdn.prod.website-files.com/679bf58f5c11fdc132846a32/679bf58f5c11fdc132846a98_pexels-olly-3760275.jpg",
    className: "col-span-12 md:col-span-3 lg:col-span-4 lg:row-span-2",
  },
  {
    title: "Kinesiology Taping",
    image: "https://images.pexels.com/photos/8219055/pexels-photo-8219055.jpeg",
    className: "col-span-12 md:col-span-3 lg:col-span-3",
  },
  {
    title: "Electro Therapy",
    image: "electro.jpg",
    className: "col-span-12 md:col-span-6 lg:col-span-5",
  },
  {
    title: "Manual Therapy",
    image: "https://elliottphysicaltherapy.com/wp-content/uploads/2019/11/manual-therapy-0410-1280x500-1.jpg",
    className: "col-span-12 md:col-span-9 lg:col-span-8",
  },
  {
    title: "Osteo & Chiro-manipulation",
    image: "https://s2.aptocdn.com/betterhealthalaska.com/wp-content/uploads/2022/01/rsz_chiropractor-secrets1.webp",
    className: "col-span-12 md:col-span-3 lg:col-span-4",
  },
];





const PhysioBentoGrid = () => {
  return (
    <section className="py-20 px-4 bg-[#FAF7F2]">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl  font-bold text-gray-900">
            Our <span className="text-physio-accent">Specialized </span>Treatments
          </h2>
          <p className="text-gray-600 mt-3 max-w-lg mx-auto text-sm md:text-base">
            Advanced physiotherapy services designed for recovery and mobility.
          </p>
        </div>

        {/* Grid */}
        <div className="
          grid
          grid-cols-12
          auto-rows-[200px]
          md:auto-rows-[280px]
          gap-5
        ">
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative rounded-2xl overflow-hidden group shadow-sm ${service.className}`}
            >
              {/* Image */}
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/45" />

              {/* Label */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2">
  <div className="bg-black/40 backdrop-blur-sm rounded-full px-4 py-2 inline-flex">
    <h3 className="text-white text-sm md:text-md font-semibold whitespace-nowrap">
      {service.title}
    </h3>
  </div>
</div>
            </div>
          ))}
        </div>

      </div>
      
    </section>
  );
};

export default PhysioBentoGrid;






