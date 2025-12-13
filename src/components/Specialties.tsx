import { ArrowRight, Stethoscope, Activity, Bone, Brain } from "lucide-react";

const specialties = [
  {
    title: "Sports Physiotherapy",
    desc: "Treatment for sprains, tears, ligament injuries, muscle strains, and performance rehab.",
    icon: <Activity size={30} className="text-primary" />,
  },
  {
    title: "Joint Pain & Ortho Care",
    desc: "Relief for shoulder, knee, hip, and spine pain with advanced orthopedic physiotherapy.",
    icon: <Bone size={30} className="text-primary" />,
  },
  {
    title: "Neuro Physiotherapy",
    desc: "Rehabilitation for paralysis, stroke, facial palsy, vertigo, Parkinson’s and nerve damage.",
    icon: <Brain size={30} className="text-primary" />,
  },
  {
    title: "Slip Disc & Back Pain",
    desc: "Targeted spinal therapy for disc bulge, nerve compression and chronic low back pain.",
    icon: <Stethoscope size={30} className="text-primary" />,
  },
  {
    title: "Sciatica & Spondylitis",
    desc: "Pain management and posture correction for radiating leg pain and spine stiffness.",
    icon: <Activity size={30} className="text-primary" />,
  },
  {
    title: "Post-Surgery Rehab",
    desc: "Recovery programs for fracture, joint replacement, ligament repair, and mobility restoration.",
    icon: <Bone size={30} className="text-primary" />,
  },
];

const Specialties = () => {
  return (
    <section className="py-24 px-6 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto">

        {/* SECTION HEADER */}
        <div className="mb-14">
          <h2 className="text-4xl font-bold text-gray-900">
            Our <span className="text-primary">Specialties</span>
          </h2>
          <p className="text-gray-600 mt-3 max-w-xl">
            We provide advanced physiotherapy treatments tailored to orthopedic,
            neurological, and sports-related conditions.
          </p>
        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialties.map((item, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm hover:shadow-md transition-all"
            >
              {/* ICON */}
              <div className="mb-5">{item.icon}</div>

              {/* TITLE */}
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-gray-600 text-[15px] leading-relaxed mb-5">
                {item.desc}
              </p>

              {/* BUTTON */}
              <button className="flex items-center gap-2 text-primary font-medium hover:underline">
                Learn More <ArrowRight size={18} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialties;
