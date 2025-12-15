import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Mehwish",
    role: "Patient",
    image: "https://placehold.co/400",
    text: "Compliment interested discretion estimating on stimulated apartments oh."
  },
  {
    name: "Elizabeth Jeff",
    role: "Patient",
    image: "https://placehold.co/400",
    text: "Dear so sing when in find read of call. As distrusts behaviour abilities defective is."
  },
  {
    name: "Emily Thomas",
    role: "Patient",
    image: "https://placehold.co/400",
    text: "Never at water me might. On formed merits hunted unable morally by mr whence."
  }
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const prev = () => {
    setIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const next = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const t = testimonials[index];

  return (
    <section className="py-24 px-6 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div className="space-y-5">
          <h2 className="text-4xl font-bold text-gray-900 leading-tight">
            What Our{" "}
            <span className="text-primary text-physio-accent">
              Patients
            </span>{" "}
            Say
          </h2>

          <p className="text-gray-600 max-w-md leading-relaxed">
            Real feedback from people who trusted us with their recovery and well-being.
          </p>
        </div>

        {/* RIGHT CARD */}
        <div className="relative">

          {/* Glow */}
          <div className="absolute -inset-4 bg-linear-to-r from-blue-100 via-purple-100 to-pink-100 blur-3xl opacity-60 -z-10 rounded-3xl" />

          <div
            key={index}
            className="
              relative
              bg-white/90
              backdrop-blur
              rounded-2xl
              border border-white/60
              shadow-[0_20px_40px_rgba(0,0,0,0.08)]
              p-8
              h-[260px]
              flex flex-col
              justify-between
              items-center
              transition-all
              duration-500
              hover:shadow-[0_30px_60px_rgba(0,0,0,0.12)]
              hover:-translate-y-1
              animate-fade-in
            "
          >
            {/* TEXT */}
            <p className="relative text-gray-700 leading-relaxed text-base font-medium line-clamp-4 max-w-md text-center mt-5">
              <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-6xl text-blue-100 font-serif">
                “
              </span>
              {t.text}
            </p>

            {/* USER */}
            <div className="flex items-center gap-4 pt-6 border-t border-gray-100 w-full justify-center">
              <img
                src={t.image}
                alt={t.name}
                className="w-12 h-12 rounded-full object-cover shrink-0 ring-2 ring-blue-100"
              />
              <div className="text-left">
                <h4 className="font-semibold text-blue-600 leading-tight">
                  {t.name}
                </h4>
                <p className="text-sm text-gray-500">
                  {t.role}
                </p>
              </div>
            </div>
          </div>

          {/* ARROWS */}
          <div className="absolute -bottom-14 left-0 flex gap-3">
            <button
              onClick={prev}
              className="
                w-10 h-10
                rounded-full
                bg-white
                shadow-md
                hover:shadow-lg
                hover:scale-110
                text-blue-600
                flex items-center justify-center
                transition-all
              "
            >
              <ChevronLeft size={18} />
            </button>

            <button
              onClick={next}
              className="
                w-10 h-10
                rounded-full
                bg-white
                shadow-md
                hover:shadow-lg
                hover:scale-110
                text-blue-600
                flex items-center justify-center
                transition-all
              "
            >
              <ChevronRight size={18} />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
