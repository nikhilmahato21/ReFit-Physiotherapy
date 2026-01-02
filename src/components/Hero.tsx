import { motion } from "motion/react"

const Hero = () => {
  

  return (
    <section className="relative bg-physio-bg pt-8 pb-0 overflow-hidden">
      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* LEFT COLUMN */}
        
<motion.div
  className="lg:col-span-5 h-full min-h-[500px] flex items-center justify-center relative"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
>
  {/* OUTER CONTAINER */}
  <div className="relative w-full h-full rounded-4xl overflow-hidden">

    {/* BLURRED BACKGROUND IMAGE */}
    <img
      src="https://res.cloudinary.com/dynbpb9u0/image/upload/v1767005465/bghos_fddg93.jpg"  // 👈 background image
      alt=""
      className="
        absolute inset-0 w-full h-full
        object-cover blur-sm scale-110
      "
    />

    {/* DARK OVERLAY */}
    <div className="absolute inset-0 bg-black/35" />

    {/* INNER BORDER */}
    <div className="absolute inset-3.5 rounded-[26px] border border-white/20 z-10" />

    {/* DOCTOR IMAGE */}
    <img
      src="/doc.png"  // 👈 doctor PNG
      alt="Consultant Physiotherapist"
      className="
        absolute bottom-0 left-1/2 -translate-x-1/2
        h-[90%] object-contain z-20
      "
    />

    {/* DOCTOR DESIGNATION – BOTTOM WIDE */}
<div
  className="
    absolute bottom-6 left-1/2 -translate-x-1/2 z-30
    w-[90%] max-w-xl
    bg-black/35 backdrop-blur-md
    rounded-3xl shadow-xl
    px-6 py-2
    text-center
    border border-white/10
  "
>
  {/* NAME */}
  <p className="text-lg md:text-2xl font-bold leading-tight 
  bg-linear-to-r from-red-400 to-red-500 
  bg-clip-text text-transparent">
  Dr. Rajeev Khinchi(P.T)
</p>

  {/* QUALIFICATIONS */}
  <p className="text-xs md:text-base font-bold text-white/70 mt-1 leading-snug">
    PhD, MPT (Sports), BPT
  </p>

  {/* DETAILS */}
  <p className="text-xs md:text-base font-bold text-white/70 mt-1 leading-snug">
  <span className="block">Dip. in Yoga & Nutrition</span>
  <span className="block">Certified in Sports Medicine (SMS)</span>
  <span className="block">Ex.- Moniek Hospital, Jaipur</span>
</p>

  {/* EXPERIENCE BADGE */}
  <div className="mt-2 flex justify-center">
    <div
      className="
        px-4 py-1.5
        rounded-full
        bg-blue-500/20
        text-blue-200
        text-xs md:text-sm
        font-semibold
        border border-blue-400/30
        backdrop-blur-sm
      "
    >
      18+ Years of Experience
    </div>
  </div>
</div>



    {/* SOCIAL ICONS */}
    {/* BOOK APPOINTMENT PILL */}
<a
 href="#book"
  className="
    absolute left-2 top-7/12 -translate-y-1/2 z-30
    group
  "
>
  <div className="relative">
    {/* Ping Effect */}
    <span className="absolute inset-0 rounded-full bg-blue-600/40 "></span>

    
  </div>
</a>

  </div>
</motion.div>




          {/* RIGHT COLUMN */}
          <motion.div
            className="lg:col-span-7 h-full"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.9, ease: "easeOut" }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full min-h-[500px]">

              {/* Tall Image */}
              <div className="relative rounded-4xl overflow-hidden md:row-span-2 group will-change-transform">
                <img
                  src="https://res.cloudinary.com/dynbpb9u0/image/upload/v1767006598/WhatsApp_Image_2025-12-29_at_16.39.35_cdwlqs.jpg"
                  alt="Physiotherapy Treatment"
                  className="w-full h-full object-cover object-right transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-6 left-4 right-4">
                  <div className="bg-black/30 backdrop-blur-md text-white p-4 rounded-full border border-white/20">
                    <p className="font-medium text-center">
                      Pain Management
                    </p>
                  </div>
                </div>
              </div>

              {/* Text Box */}
              <div className="bg-white p-8 rounded-4xl flex flex-col justify-between relative shadow-sm border border-gray-100">
  <div>
    <h3 className="text-xl font-normal text-gray-900 mb-1">
      Resolve Your{" "}
      <span className="font-bold">
        Physiotherapy Issues
      </span>{" "}
      with Expert Care
    </h3>

    <p className="text-sm text-gray-500">
      Dr. Rajeev Khinchi{" "}
      <span className="text-gray-400">
        | Consultant Physiotherapist
      </span>
    </p>

    {/* Divider */}
    <div className="w-full h-px bg-gray-200 my-5"></div>

    {/* CTA */}<a href="#book">
    <button className="group w-full flex items-center justify-between px-5 py-3 rounded-full border border-blue-600 text-blue-600 font-medium hover:bg-blue-600 hover:text-white transition-all">
      <span>Book an Appointment</span>

      <span className="w-9 h-9 flex items-center justify-center rounded-full bg-blue-600 text-white group-hover:bg-white group-hover:text-blue-600 transition-all">
        <svg
          className="w-4 h-4 -rotate-45"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </span>
    </button></a>
  </div>

  {/* Stats */}
  <div className="flex items-center justify-between mt-8">
    <div>
      <span className="text-2xl font-bold text-gray-900">
        25K+
      </span>
      <span className="block text-sm text-gray-500">
        Happy Patients
      </span>
    </div>
  </div>
</div>


              {/* Small Image */}
              <div className="relative rounded-4xl overflow-hidden group will-change-transform">
                <img
                  src="https://res.cloudinary.com/dynbpb9u0/image/upload/v1767006822/WhatsApp_Image_2025-12-29_at_16.43.14_s005nl.jpg"
                  alt="Rehabilitation"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-black/30 backdrop-blur-md text-white p-3 rounded-full border border-white/20 text-center">
                    <p className="font-medium text-sm">
                      mobility / strength training
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
