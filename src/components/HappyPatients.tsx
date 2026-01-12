

const HappyPatients = () => {
  return (
    <section id="happy" className="py-26 px-6 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-physio-accent">
            Happy <span className="text-gray-900">Patients</span>
          </h2>

          <div className="w-20 h-1 bg-primary mx-auto mt-4 rounded-full" />

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
            Real stories from patients who recovered with our care.
          </p>
        </div>

        {/* VIDEO GRID */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* VIDEO 1 */}
          <div className="
            bg-white rounded-3xl border border-gray-200
            shadow-sm overflow-hidden
          ">
            <div className="relative aspect-video">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/nh3uDiuOlYI"
                title="Happy Patient Testimonial"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-primary">
                Neck & Back Pain Recovery Journey
              </h3>
              <p className="text-gray-600 mt-2 text-sm">
                How targeted physiotherapy helped relieve chronic neck and back pain, restoring comfort, posture, and daily mobility.
              </p>
            </div>
          </div>

          {/* VIDEO 2 (Placeholder) */}
          <div className="
            bg-white rounded-3xl border border-gray-200
            shadow-sm overflow-hidden
          ">
            <div className="relative aspect-video">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/wp5Hz-bT_xU"
                title="Happy Patient Testimonial 2"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-primary">
                Cervical Pain Relief Success Story
              </h3>
              <p className="text-gray-600 mt-2 text-sm">
                A patient shares their experience of overcoming cervical pain through personalized physiotherapy and guided rehabilitation.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HappyPatients;



