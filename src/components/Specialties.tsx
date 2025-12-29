import { ArrowRight, Stethoscope, Activity, Bone, Brain } from "lucide-react";

const specialties = [
  {
    title: "Sports Physiotherapy",
    desc: "Treatment for sprains, strain, ligament injuries, muscle strains, and sports related injuries.",
    icon: <Activity size={30} className="text-primary" />,
  },
  {
    title: "Orthopedic Physiotherapy",
    desc: "Lower back pain,Neck pain,Knee pain ,Heel pain, Frozen shoulder,rotatory cuff tear,spine pain and Tennis elbow with advanced orthopedic physiotherapy.",
    icon: <Bone size={30} className="text-primary" />,
  },
  {
    title: "Neuro Physiotherapy",
    desc: "Rehabilitation for paralysis, stroke, facial palsy, vertigo, Parkinson’s,Numbness,Tingling and pain usaully in hands and feet",
    icon: <Brain size={30} className="text-primary" />,
  },
  {
  title: "Physiotherapy After Surgery ",
  desc: "Post-surgical rehabilitation to restore strength, mobility, and function after orthopedic and neurological surgeries.",
  icon: <Stethoscope size={30} className="text-primary" />,
},
  {
    title: "Sciatica & Spondylitis",
    desc: "Pain management and posture correction for radiating leg pain and spine stiffness.",
    icon: <Activity size={30} className="text-primary" />,
  },
  {
    title: "Post-fracture Rehab",
    desc: "Recovery programs for fracture, joint replacement, ligament repair, and mobility restoration.",
    icon: <Bone size={30} className="text-primary" />,
  },
];

const Specialties = () => {
  return (
    <section id="service" className="py-24 px-6 bg-[#F5F1E8]">
      <div className="max-w-7xl mx-auto">

        {/* SECTION HEADER */}
        <div className="mb-14 text-center">
  <h2 className="text-4xl md:text-5xl  font-bold text-gray-900">
    Our <span className="text-physio-accent">Services</span>
  </h2>

  <p className="text-gray-600 mt-3 max-w-xl mx-auto text-center">
    We provide advanced physiotherapy treatments tailored to orthopedic,
    neurological, and sports-related conditions.
  </p>
</div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialties.map((item, i) => (
            <div
  key={i}
  className="
    bg-[#FAF7F2]
    rounded-2xl
    p-8
    border border-black/5
    shadow-sm
    hover:shadow-lg hover:scale-105
    hover:-translate-y-1
    transition-all duration-300
  "
>
  {/* ICON */}
  <div className="mb-5 text-primary text-blue-500">{item.icon}</div>

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
