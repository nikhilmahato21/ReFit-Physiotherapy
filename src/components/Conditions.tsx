import { CheckCircle, Dumbbell, Bone, Brain } from "lucide-react";
import type { JSX } from "react";
import { Link } from "react-router-dom";

const sports = [
  "Heel Pain / Ankle Sprain",
  "Knee Injuries",
  "Tennis / Golfer’s Elbow",
  "Ligament / Tendon Injury",
  "Groin Pain",
  "Muscular Pain / Strain / Stifness",
  "Shoulder Injury",
  "ACL",
  "Calf Pain / Shin Pain",
  "Wrist pain"
];

const ortho = [
  "Rheumatoid Arthritis",
  "Frozen Shoulder",
  "Slip Disc",
  "Osteoarthritis",
  "Joint Pain",
  "Varicose Veins ",
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
  "Sports Physiotherapy": <Dumbbell size={26} className="text-primary text-blue-500" />,
  "Ortho Physiotherapy": <Bone size={26} className="text-primary text-blue-500" />,
  "Neuro Physiotherapy": <Brain size={26} className="text-primary text-blue-500" />,
};

const sections = [
  { id: "sports", title: "Sports Physiotherapy", items: sports },
  { id: "ortho", title: "Ortho Physiotherapy", items: ortho },
  { id: "neuro", title: "Neuro Physiotherapy", items: neuro },
];
const Conditions = () => {
  return (
    <section id="condition" className="py-28 px-6 relative bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto relative z-10">

        {/* HEADER */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-physio-accent">
            Conditions <span className="text-primary text-gray-900">We Treat</span>
          </h2>

          <div className="w-20 h-1 bg-primary mx-auto mt-4 rounded-full" />

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
            We offer advanced physiotherapy solutions for orthopedic, neurological,
            spine and sports-related conditions.
          </p>
        </div>

        {/* 3 COLUMNS */}
        <div className="grid md:grid-cols-3 gap-10">
          {sections.map((section) => (
            <Link to={`/condition/${section.id}`}className="group h-full">
  <div
    className="
      h-full flex flex-col
      bg-white rounded-3xl p-10
      border border-gray-200
      shadow-sm transition-all
      hover:shadow-xl hover:scale-105
      cursor-pointer
    "
  >
    {/* Header */}
    <div className="mb-8">
      <div className="w-12 h-12 mb-3 rounded-full bg-blue-50 flex items-center justify-center">
        {iconMap[section.title]}
      </div>
      <h3 className="text-2xl font-bold text-primary ">
        <span className="text-physio-accent">{section.title.split(" ")[0]}</span>  Physiotherapy
      </h3>
    </div>

    {/* List grows to fill space */}
    <ul className="space-y-4 text-gray-700 flex-1">
      {section.items.map((item, i) => (
        <li key={i} className="flex items-start gap-3">
          <CheckCircle size={20} className="text-primary shrink-0" />
          <span className="text-[16px] leading-snug">{item}</span>
        </li>
      ))}
    </ul>
  </div>
</Link>

          ))}
        </div>
      </div>
    </section>
  );
};


export default Conditions;
