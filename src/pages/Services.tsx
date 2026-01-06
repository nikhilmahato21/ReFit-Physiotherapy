import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { services } from "../data/specialties";

export default function Services() {
  const { id } = useParams();
  const navigate = useNavigate();
  const service = services.find((s) => s.id === id);

  if (!service) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <p className="text-gray-500 text-lg">Service not found</p>
      </div>
    );
  }

  return (
    <section className="bg-[#FAFAFA] py-12 px-4">
      <div className="max-w-5xl mx-auto space-y-10">

        {/* BACK BUTTON */}
        <div>
          <button
            onClick={() => navigate("/")}
            className="
              inline-flex items-center justify-center
              h-12 w-12
              rounded-full
              border border-gray-300
              text-gray-700
              hover:bg-gray-900 hover:text-white
              transition-all duration-300
            "
            aria-label="Go back"
          >
            <ArrowLeft size={20} />
          </button>
        </div>

        {/* ================= HEADER ================= */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
            {service.title}
          </h1>

          <p className="mt-3 text-2xl md:text-3xl font-semibold text-gray-400 tracking-tight">
            {service.tagline}
          </p>
        </div>

        {/* ========== DESCRIPTION + IMAGE ========== */}
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1">
            <p className="text-lg text-gray-700 font-semibold leading-relaxed">
              {service.description}
            </p>
          </div>

          <div className="flex-1 w-full h-[380px] rounded-3xl overflow-hidden">
            <img
              src={service.img}
              alt={service.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* ================= WHAT WE OFFER ================= */}
        <EditorialSection
          title="Healing"
          highlight="Approach"
          subtitle="focused treatment, advanced techniques, patient-first care"
          items={service.includes}
        />

        {/* ================= CONDITIONS ================= */}
        <EditorialSection
          title="Conditions"
          highlight="We Treat"
          subtitle="from everyday discomfort to sports-related injuries"
          items={service.conditions}
        />

        {/* ================= BENEFITS ================= */}
        <EditorialSection
          title="Recovery"
          highlight="Benefits"
          subtitle="real progress, long-term results, improved quality of life"
          items={service.benefits}
        />
      </div>
    </section>
  );
}

/* ================================================= */
/* ============== EDITORIAL SECTION ================= */
/* ================================================= */

function EditorialSection({
  title,
  highlight,
  subtitle,
  items,
}: {
  title: string;
  highlight: string;
  subtitle: string;
  items: string[];
}) {
  return (
    <div className="space-y-14">

      {/* Heading */}
      <div>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
          {title} <span className="text-physio-accent">{highlight}</span>
        </h2>

        <p className="mt-2 text-2xl md:text-3xl font-semibold text-gray-400 tracking-tight">
          {subtitle}
        </p>
      </div>

      {/* Horizontal Flow Points */}
      <div className="space-y-10 max-w-4xl">
        {items.map((item, index) => {
          const hasColon = item.includes(":");
          const [label, description] = hasColon
            ? item.split(/:(.+)/) // keeps text after first colon
            : [];

          return (
            <div key={index} className="flex items-start gap-6">
              <span className="mt-2 h-2 w-2 rounded-full bg-physio-accent shrink-0" />

              <p className="text-lg leading-relaxed">
                {hasColon ? (
                  <>
                    <span className="font-bold text-gray-700">
                      {label}:
                    </span>{" "}
                    <span className=" font-semibold text-gray-600 ">
                      {description}
                    </span>
                  </>
                ) : (
                  <span className="font-semibold text-gray-600 ">
                    {item}
                  </span>
                )}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
