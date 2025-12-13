import { CheckCircle } from "lucide-react";

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

const Conditions = () => {
  return (
    <section className="py-28 px-6 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Conditions We <span className="text-primary">Treat</span>
          </h2>

          <div className="w-20 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
            Expert physiotherapy care for sports injuries, joint disorders, spine issues,
            neurological problems and chronic pain conditions.
          </p>
        </div>

        {/* 3 CARD COLUMNS */}
        <div className="grid md:grid-cols-3 gap-10">

          {/* EACH CATEGORY CARD */}
          {[ 
            { title: "Sports Physiotherapy", items: sports, color: "from-blue-50 to-white" },
            { title: "Ortho Physiotherapy", items: ortho, color: "from-purple-50 to-white" },
            { title: "Neuro Physiotherapy", items: neuro, color: "from-teal-50 to-white" },
          ].map((section, index) => (
            <div
              key={index}
              className={`
                rounded-3xl p-10 shadow-xl border border-gray-100
                bg-gradient-to-br ${section.color}
                hover:shadow-2xl transition-all duration-300
              `}
            >
              {/* TITLE */}
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                {section.title}
              </h3>

              {/* LIST */}
              <ul className="space-y-4 text-gray-700">
                {section.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="text-primary" size={20} />
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
