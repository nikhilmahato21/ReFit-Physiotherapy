import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { User } from "lucide-react"
import ImageGallery from "./ImageGallery";

const testimonials = [
  {
    name: "monika gehani",
    role: "Patient",
    image: "https://placehold.co/400",
    text: "REFIT Advanced Physiotherapy & Sports Injury Care is truly exceptional! Their customer service is top-notch, ensuring every client feels valued and understood. "
  },
  {
    name: "Sandeep",
    role: "Patient",
    image: "https://placehold.co/400",
    text: "Best physiotherapy treatment for back pain relief also have advanced equipment...Peaceful atmosphere and supportive staff also..good feeling after pain relief...thanks to Dr rajeev and whole team.."
  },
  {
    name: "Sarvesh",
    role: "Patient",
    image: "https://placehold.co/400",
    text: "All facilities are good and Dr Rajeev behavior very nice its important to a patient, Dr behavior should be friendly/ care taker ... I'm satisfied with his facilities n knowledge of work."
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
      <ImageGallery/>
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div className="space-y-5">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
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
              bg-blue-100
              rounded-2xl
              
              
              p-8
              h-[260px]
              flex flex-col
              justify-between
              items-center
              transition-all
              duration-500
              
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
            <div className="flex items-center gap-4 pt-6 border-t border-blue-200 w-full justify-center">
  <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 ring-2 ring-blue-100 bg-blue-50">
    <User size={22} className="text-blue-600" />
  </div>

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
