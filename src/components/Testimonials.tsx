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
    What Our <span className="text-primary text-physio-accent">Patients </span>Say
  </h2>

  <p className="text-gray-600 max-w-md leading-relaxed">
    Real feedback from people who trusted us with their recovery and well-being.
  </p>

  {/* <button className="inline-flex px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium shadow-md hover:scale-105 transition">
    View More
  </button> */}
</div>


        {/* RIGHT CARD */}
        {/* RIGHT CARD */}
<div className="relative">

  <div
    className="
      bg-white
      rounded-2xl
      border border-gray-200 shadow-sm
      p-8
      h-[260px]
      flex flex-col
      justify-between
       items-center
      transition-all
      duration-500
    "
  >
    {/* TEXT */}
    <p className="text-gray-700 leading-relaxed text-sm line-clamp-4 max-w-md text-center mt-5 ">
      “{t.text}”
    </p>

    {/* USER */}
    <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
      <img
        src={t.image}
        alt={t.name}
        className="w-12 h-12 rounded-full object-cover shrink-0"
      />
      <div>
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
      className="w-10 h-10 rounded-full bg-blue-100 hover:bg-gray-200 flex items-center justify-center transition"
    >
      <ChevronLeft size={18} />
    </button>

    <button
      onClick={next}
      className="w-10 h-10 rounded-full bg-blue-100 hover:bg-gray-200 flex items-center justify-center transition"
    >
      <ChevronRight size={18} />
    </button>
  </div>

</div>

      </div>
    </section>
  );
}
