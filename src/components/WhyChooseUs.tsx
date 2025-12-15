import { HeartPulse, Stethoscope, Activity } from "lucide-react";

const features = [
  {
    title: "Lab Tests & Diagnosis",
    desc: "Accurate assessment and movement analysis for correct treatment planning.",
    icon: <Stethoscope className="text-purple-600" />,
  },
  {
    title: "Teleconsultation",
    desc: "Remote physiotherapy guidance and follow-ups from the comfort of your home.",
    icon: <Activity className="text-blue-600" />,
  },
  {
    title: "Physical Rehabilitation",
    desc: "Complete recovery programs for injury, surgery, and neurological conditions.",
    icon: <HeartPulse className="text-green-600" />,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 px-6 bg-[#F5F1E8]">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">
            Explore Diverse <span className="text-physio-accent">Health & Wellness</span> <br /> Offerings At Our Clinic
          </h2>
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((item, i) => (
            <div
              key={i}
              className="bg-[#FAF7F2]  rounded-2xl p-8 shadow-sm hover:shadow-md transition"
            >
              <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center mb-5">
                {item.icon}
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {item.desc}
              </p>

              <span className="text-sm font-medium text-primary cursor-pointer hover:underline">
                Learn more →
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
