import { motion } from "motion/react"

const Hero = () => {
  const phoneNumber = "+919876543210";

  return (
    <section className="relative bg-physio-bg pt-8 pb-0 overflow-hidden">
      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* LEFT COLUMN */}
          <motion.div
            className="lg:col-span-5 space-y-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Heading */}
            <motion.h1
              className="text-4xl md:text-6xl font-sans font-normal text-gray-900 leading-[1.1]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.7, ease: "easeOut" }}
            >
              <span className="text-gray-400">Personalized </span><br />
              <span className="relative inline-block font-bold">
                Physiotherapy
              </span>{" "}
              for <br />
              Specialized Care
            </motion.h1>

            {/* Paragraph */}
            <motion.p
              className="text-gray-500 text-lg leading-relaxed max-w-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
            >
              Our Clinic provides sports physiotherapy, orthopedic rehabilitation,
              Neuro Rehab., and musculoskeletal conditions care.
            </motion.p>

            {/* Call Bar */}
            <motion.div
              className="bg-white p-2 rounded-full shadow-sm border border-gray-200 flex items-center justify-between max-w-md"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.35, duration: 0.6, ease: "easeOut" }}
            >
              <span className="pl-6 text-gray-400 font-medium">
                Need immediate help?
              </span>
              <a
                href={`tel:${phoneNumber}`}
                className="bg-physio-accent text-white px-8 py-3 rounded-full font-bold hover:bg-orange-600 transition"
              >
                Call Now
              </a>
            </motion.div>

            {/* Badge */}
            <motion.div
              className="flex items-center gap-4 mt-8 bg-white p-3 rounded-2xl w-fit shadow-sm border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
            >
              <div className="bg-blue-600 p-2 rounded-xl text-white">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <div>
                <p className="font-bold text-gray-900 text-sm">
                  In sync with you
                </p>
                <p className="text-xs text-gray-500">
                  We adapt to your recovery pace.
                </p>
              </div>
            </motion.div>
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
                  src="https://images.pexels.com/photos/5793918/pexels-photo-5793918.jpeg"
                  alt="Physiotherapy Treatment"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-6 left-4 right-4">
                  <div className="bg-black/30 backdrop-blur-md text-white p-4 rounded-full border border-white/20">
                    <p className="font-medium text-center">
                      Sciatica & Spondylitis
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
                  <div className="w-full h-px bg-gray-200 my-4"></div>
                  <p className="text-sm text-gray-500">
                    Discover our comprehensive services designed to help you
                    recover, strengthen, and thrive.
                  </p>
                </div>

                <div className="flex items-center justify-between mt-6">
                  <div>
                    <span className="text-2xl font-bold text-gray-900">
                      10K+
                    </span>
                    <span className="block text-sm text-gray-500">
                      Happy Patients
                    </span>
                  </div>

                  <div className="relative w-20 h-20 flex items-center justify-center cursor-pointer hover:scale-105 transition-transform">
                    <div className="absolute inset-0 border border-gray-200 rounded-full animate-spin-slow"></div>
                    <div className="relative">
                      <span className="absolute inset-0 w-full h-full rounded-full bg-blue-600/40 animate-ping"></span>
                      <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg relative">
                        <svg
                          className="w-5 h-5 -rotate-45"
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
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Small Image */}
              <div className="relative rounded-4xl overflow-hidden group will-change-transform">
                <img
                  src="https://images.pexels.com/photos/8219055/pexels-photo-8219055.jpeg"
                  alt="Rehabilitation"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-black/30 backdrop-blur-md text-white p-3 rounded-full border border-white/20 text-center">
                    <p className="font-medium text-sm">
                      Rehabilitation Action
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
