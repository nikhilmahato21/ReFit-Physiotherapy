import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { conditionsData } from "../data/conditions";


/* ================================================= */
/* ================ CONDITION DETAIL =============== */
/* ================================================= */

const ConditionDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const conditionPage = id ? conditionsData[id as keyof typeof conditionsData] : null;

  if (!conditionPage) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <p className="text-gray-500 text-lg">Condition not found</p>
      </div>
    );
  }

  return (
    <section className="bg-[#FAFAFA] py-12 px-4">
      <div className="max-w-5xl mx-auto space-y-16">

        {/* ================= BACK BUTTON ================= */}
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
            {conditionPage.title}
          </h1>

          <p className="mt-3 text-2xl md:text-3xl font-semibold text-gray-400 tracking-tight">
            Specialized care tailored to your condition
          </p>
        </div>

        {/* ================= DESCRIPTION ================= */}
        <div className="max-w-4xl">
          <p className="text-lg text-gray-700 font-semibold leading-relaxed">
            {conditionPage.description}
          </p>
        </div>

        {/* ================= CONDITIONS LIST ================= */}
        <EditorialSection
          title="Conditions"
          highlight="We Treat"
          subtitle="expert diagnosis, structured rehabilitation, long-term relief"
          items={conditionPage.conditions.map(
            (c) => `${c.name}: ${c.details}`
          )}
        />

        {/* ================= CTA ================= */}
        <div className="pt-10">
          <button
            onClick={() => navigate("/")}
            className="
              inline-flex items-center justify-center
              px-8 h-14
              rounded-full
              bg-physio-accent text-white
              text-lg font-semibold
              hover:bg-gray-900
              transition-all duration-300
            "
          >
            Book an Appointment
          </button>
        </div>
      </div>
    </section>
  );
};

export default ConditionDetail;

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

      {/* Content */}
      <div className="space-y-10 max-w-4xl">
        {items.map((item, index) => {
          const hasColon = item.includes(":");
          const [label, description] = hasColon
            ? item.split(/:(.+)/)
            : [];

          return (
            <div key={index} className="flex items-start gap-6">
              <span className="mt-2 h-2 w-2 rounded-full bg-physio-accent shrink-0" />

              <p className="text-lg leading-relaxed">
                {hasColon ? (
                  <>
                    <span className="font-bold text-red-800">
                      {label}:
                    </span>{" "}
                    <span className="font-semibold text-gray-600">
                      {description}
                    </span>
                  </>
                ) : (
                  <span className="font-semibold text-gray-600">
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
