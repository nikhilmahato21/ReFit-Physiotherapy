import { HeartPulse, Stethoscope, Activity } from "lucide-react";

const features = [
  {
    title: "Personalized, Holistic Care",
    desc: "Tailored treatment plans designed around your condition, goals, and lifestyle.",
    icon: <HeartPulse size={50} className="text-green-600 " />,
  },
  {
    title: "Advanced Treatment Methods",
    desc: "Modern physiotherapy techniques backed by evidence-based clinical practices.",
    icon: <Stethoscope size={50} className="text-purple-600" />,
  },
  {
    title: "Dedicated to Your Recovery",
    desc: "Focused care and continuous support to help you recover faster and stronger.",
    icon: <Activity size={50} className="text-blue-600" />,
  },
];


const WhyChooseUs = () => {
  return (
    <section className="py-24 px-6 bg-[#F5F1E8]">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
       <div className="text-center mb-16">
  <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
  Why Patients <span className="text-physio-accent">Trust Us</span>
</h2>

  <p className="mt-4 text-gray-600 max-w-xl mx-auto leading-relaxed">
    Personalized physiotherapy solutions designed to restore mobility,
    relieve pain, and improve overall quality of life.
  </p>
</div>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((item, i) => (
            <div
              key={i}
              className="bg-[#FAF7F2]  rounded-2xl p-8 shadow-sm hover:shadow-md transition"
            >
              <div className="w-16 h-16 rounded-xl bg-gray-100 flex items-center justify-center mb-5">
                {item.icon}
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {item.desc}
              </p>

              {/* <span className="text-sm font-medium text-primary cursor-pointer hover:underline">
                Learn more →
              </span> */}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
