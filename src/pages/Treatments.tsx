import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { treatments } from "../data/treatments";


const Treatments = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const treatment = treatments.find((t) => t.id === id);

  if (!treatment) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <p className="text-gray-500 text-lg">Treatment not found</p>
      </div>
    );
  }

  return (
    <section className="bg-[#FAFAFA] py-12 px-4">
      <div className="max-w-5xl mx-auto space-y-12">

        {/* BACK BUTTON */}
        <div>
          <button
            onClick={() => navigate(-1)}
            className="
              inline-flex items-center justify-center
              h-12 w-12 rounded-full
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
            {treatment.title}
          </h1>

          {/* <p className="mt-3 text-2xl md:text-3xl font-semibold text-gray-400 tracking-tight">
            {treatment.tagline}
          </p> */}
        </div>

        {/* ========== DESCRIPTION + IMAGE ========== */}
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1">
            <p className="text-lg text-gray-700 font-semibold leading-relaxed">
              {treatment.description}
            </p>
          </div>

          <div className="flex-1 w-full h-[380px] rounded-3xl overflow-hidden">
            <img
              src={treatment?.image}
              alt={treatment.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* ================= USES ================= */}
        {treatment.uses && (
          <EditorialSection
            title="Treatment"
            highlight="Uses"
            subtitle="targeted care designed for recovery and performance"
            items={treatment.uses}
          />
        )}

        {/* ================= COMPONENTS / TYPES ================= */}
        {treatment.components && (
          <EditorialSection
            title="Core"
            highlight="Components"
            subtitle="structured techniques for effective healing"
            items={treatment.components}
          />
        )}

        {/* ================= BENEFITS ================= */}
        {treatment.benefits && (
          <EditorialSection
            title="Key"
            highlight="Benefits"
            subtitle="measurable results and long-term relief"
            items={treatment.benefits}
          />
        )}

        {/* ================= APPLICATIONS ================= */}
        {treatment.applications && (
          <EditorialSection
            title="Common"
            highlight="Applications"
            subtitle="where this treatment is most effective"
            items={treatment.applications}
          />
        )}
      </div>
    </section>
  );
};

export default Treatments;



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
                    <span className="font-bold text-gray-700">
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
