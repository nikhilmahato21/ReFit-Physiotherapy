import { Link } from "react-router-dom";

const services = [
  {
    title: "Cupping Therapy",
    image: "/cups.jpg",
    className: "col-span-12 md:col-span-6 lg:col-span-5",
     href: "/treatment/cupping-therapy",
  },
  {
    title: "Dry Needling",
    image: "/dry-needling.jpg",
    className: "col-span-12 md:col-span-3 lg:col-span-3",
     href: "/treatment/dry-needling",
  },
  {
    title: "Sports Injury Rehab",
    image: "https://cdn.prod.website-files.com/679bf58f5c11fdc132846a32/679bf58f5c11fdc132846a98_pexels-olly-3760275.jpg",
    className: "col-span-12 md:col-span-3 lg:col-span-4 lg:row-span-2",
     href: "/treatment/sports-injury-rehabilitation",
  },
  {
    title: "Kinesiology Taping",
    image: "https://images.pexels.com/photos/8219055/pexels-photo-8219055.jpeg",
    className: "col-span-12 md:col-span-3 lg:col-span-3",
     href: "/treatment/kinesiology-taping",
  },
  {
    title: "Electro Therapy",
    image: "/electro.jpg",
    className: "col-span-12 md:col-span-6 lg:col-span-5",
     href: "/treatment/electrotherapy",
  },
  {
    title: "Manual Therapy",
    image: "https://elliottphysicaltherapy.com/wp-content/uploads/2019/11/manual-therapy-0410-1280x500-1.jpg",
    className: "col-span-12 md:col-span-9 lg:col-span-8",
     href: "/treatment/manual-therapy",
  },
  {
    title: "Osteo & Chiro-manipulation",
    image: "https://s2.aptocdn.com/betterhealthalaska.com/wp-content/uploads/2022/01/rsz_chiropractor-secrets1.webp",
    className: "col-span-12 md:col-span-3 lg:col-span-4",
     href: "/treatment/osteo-chiro-manipulation",
  },
];







const PhysioBentoGrid = () => {
  return (
    <section className="py-20 px-4 bg-[#FAF7F2]">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Our <span className="text-physio-accent">Specialized</span> Treatments
          </h2>
          <p className="text-gray-600 mt-3 max-w-lg mx-auto text-sm md:text-base">
            Advanced physiotherapy services designed for recovery and mobility.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-12 auto-rows-[200px] md:auto-rows-[280px] gap-5">
          {services.map((service, index) => (
            <Link
              to={service.href}
              key={index}
              className={`group relative rounded-2xl overflow-hidden shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-physio-accent ${service.className}`}
            >
              {/* Image */}
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent transition-opacity duration-300" />

              {/* Clickable Label */}
              {/* Clickable Label */}
<div className="absolute bottom-4 left-1/2 -translate-x-1/2">
  <div
    className="
      flex items-center gap-2
      bg-black/40 backdrop-blur-md
      rounded-full px-5 py-2.5
      transition-all duration-300
      group-hover:bg-black/60
      group-hover:scale-105
      max-w-[90vw] md:max-w-none
    "
  >
    <h3
      className="
        text-white text-sm md:text-base font-semibold
        whitespace-nowrap
        overflow-hidden text-ellipsis
        relative
        after:absolute after:left-0 after:-bottom-0.5
        after:h-[2px] after:w-0 after:bg-white
        after:transition-all after:duration-300
        group-hover:after:w-full
      "
    >
      {service.title}
    </h3>

    {/* Arrow */}
    <span
      className="
        text-white text-lg
        shrink-0
        translate-x-0 opacity-0
        transition-all duration-300
        group-hover:translate-x-1
        group-hover:opacity-100
      "
    >
      →
    </span>
  </div>
</div>

            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};


export default PhysioBentoGrid;






