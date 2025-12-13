import { CheckCircle, Dumbbell, Bone, Brain } from "lucide-react";
import type { JSX } from "react";

const sports = [
  "Heel Pain",
  "Knee Injuries",
  "Tennis / Golfer’s Elbow",
  "Ankle Sprain",
  "Ligament / Tendon Injury",
  "Groin Pain",
  "Muscular Pain / Strain",
  "Shin Pain",
  "Shoulder Injury",
];

const ortho = [
  "Rheumatoid Arthritis",
  "Frozen Shoulder",
  "Slip Disc",
  "Osteoarthritis",
  "Joint Pain",
  "Varicose Veins Pain",
  "Stiffness After Fracture",
  "Joint Replacement Rehab",
];

const neuro = [
  "Paralysis / Stroke",
  "Sciatica",
  "Spondylitis",
  "Neuropathy (G.B.S)",
  "Parkinson’s Disease",
  "Facial Palsy",
  "Vertigo",
  "Cerebral Palsy",
];

// ICON MAP
const iconMap: Record<string, JSX.Element> = {
  "Sports Physiotherapy": <Dumbbell size={26} className="text-primary" />,
  "Ortho Physiotherapy": <Bone size={26} className="text-primary" />,
  "Neuro Physiotherapy": <Brain size={26} className="text-primary" />,
};

const Conditions = () => {
  return (
    <section className="py-28 px-6 relative bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto relative z-10">

        {/* HEADER */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-physio-accent ">
            Conditions <span className="text-primary text-gray-900">We Treat</span>
          </h2>

          <div className="w-20 h-1 bg-primary mx-auto mt-4 rounded-full"></div>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
            We offer advanced physiotherapy solutions for orthopedic, neurological,
            spine and sports-related conditions.
          </p>
        </div>

        {/* 3 COLUMNS */}
        <div className="grid md:grid-cols-3 gap-10">
          {[
            { title: "Sports Physiotherapy", items: sports },
            { title: "Ortho Physiotherapy", items: ortho },
            { title: "Neuro Physiotherapy", items: neuro },
          ].map((section, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-10 border border-gray-200 shadow-sm hover:shadow-xl hover:scale-105 transition-all"
            >
              {/* Heading with circular icon */}
              <div className=" items-center  mb-8">
                <div className="w-12 h-12 mb-3 rounded-full bg-blue-50 flex items-center justify-center">
                  {iconMap[section.title]}
                </div>
                <h3 className="text-2xl font-bold text-primary">
                  {section.title}
                </h3>
              </div>

              <ul className="space-y-4 text-gray-700">
                {section.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-primary" />
                    <span className="text-[16px] leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Conditions;
