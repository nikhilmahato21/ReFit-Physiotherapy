const images = {
  leftTop: "https://res.cloudinary.com/dynbpb9u0/image/upload/v1766777664/WhatsApp_Image_2025-12-27_at_01.03.21_oqwd2p.jpg",
  leftBottom: "https://res.cloudinary.com/dynbpb9u0/image/upload/v1767107457/WhatsApp_Image_2025-12-30_at_18.50.20_quisbk.jpg",
  center: "https://res.cloudinary.com/dynbpb9u0/image/upload/v1766776969/WhatsApp_Image_2025-12-23_at_12.40.38_fcxvtg.jpg",
  rightTop: "https://res.cloudinary.com/dynbpb9u0/image/upload/v1766776969/WhatsApp_Image_2025-12-23_at_12.52.52_givq6a.jpg",
  rightMiddle: "https://res.cloudinary.com/dynbpb9u0/image/upload/v1767107456/WhatsApp_Image_2025-12-30_at_18.55.52_uten0d.jpg",
  rightBottom: "https://res.cloudinary.com/dynbpb9u0/image/upload/v1767107457/WhatsApp_Image_2025-12-30_at_18.50.19_dkoifu.jpg",
};

const ImageGallery = () => {
  return (
    <section className="py-20 px-4">
      {/* HEADER */}
      <div className="text-center max-w-3xl mx-auto mb-20">
        <span className="inline-block px-4 py-2 mb-6 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-full shadow-sm">
          Testimonials
        </span>
       <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
  Real <span className="text-physio-accent">Stories </span> from Our Patients
</h2>
       <p className="text-3xl md:text-4xl font-bold text-gray-400 tracking-tight">
  real moments, real recovery
</p>
      </div>

      {/* GALLERY */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-4">

        {/* LEFT COLUMN */}
        <div className="md:col-span-3 grid grid-rows-2 gap-4 h-[520px]">
          <div className="h-[250px] overflow-hidden rounded-2xl">
            <img
              src={images.leftTop}
              alt=""
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>

          <div className="h-[250px] overflow-hidden rounded-2xl">
            <img
              src={images.leftBottom}
              alt=""
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>

        {/* CENTER IMAGE */}
        <div className="md:col-span-5 h-[520px] overflow-hidden rounded-3xl">
          <img
            src={images.center}
            alt=""
            className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
          />
        </div>

        {/* RIGHT COLUMN */}
        <div className="md:col-span-4 grid grid-rows-3 gap-4 h-[520px]">
          <div className="h-[165px] overflow-hidden rounded-2xl">
            <img
              src={images.rightTop}
              alt=""
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>

          <div className="h-[165px] overflow-hidden rounded-2xl">
            <img
              src={images.rightMiddle}
              alt=""
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>

          <div className="h-[165px] overflow-hidden rounded-2xl">
            <img
              src={images.rightBottom}
              alt=""
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>

      </div>
    </section>
  );
};


export default ImageGallery;
