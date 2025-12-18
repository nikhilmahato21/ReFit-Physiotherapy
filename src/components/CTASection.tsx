import { Phone } from "lucide-react";

export default function CTASection() {
  return (
    <section id="contact" className="py-20 px-6 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6">

        {/* LEFT CARD */}
        <div className="relative overflow-hidden rounded-3xl bg-[#EAF6D3] p-10 min-h-[220px] flex flex-col justify-between">
          
          {/* TEXT */}
          <div className="max-w-sm">
            <h3 className="text-2xl font-semibold text-gray-900">
              Unlock Your Wellness Journey
            </h3>
            <p className="text-gray-600 mt-3 text-sm leading-relaxed">
              Your Health, Your Way. Start a Tailored Consultation Experience
            </p>
          </div>

          {/* CTA */}
          <button className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-gray-900">
            Book an Appointment
            <span className="text-lg">→</span>
          </button>

          {/* ILLUSTRATION (SUBTLE) */}
          <div className="absolute right-6 bottom-6 opacity-20">
            {/* <img
              src="/doctor-outline.svg"
              alt=""
              className="w-28 h-28"
            /> */}
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="relative overflow-hidden rounded-3xl bg-[#C9D6F7] p-10 min-h-[220px] flex flex-col justify-between">

          {/* TEXT */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900">
              Need Immediate Care?
            </h3>
            <p className="text-gray-700 mt-3 text-sm leading-relaxed">
              We are available 24/7. Call Now for Immediate Assistance!
            </p>
          </div>

          {/* PHONE */}
          <div className="flex items-center gap-4 mt-6">
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm">
              <Phone size={20} className="text-gray-900" />
            </div>
            <span className="text-xl font-semibold text-gray-900 tracking-wide">
             +91 94612 03939
            </span>
          </div>

          {/* ILLUSTRATION */}
          <div className="absolute right-6 bottom-6 opacity-20">
            {/* <img
              src="/doctor-outline.svg"
              alt=""
              className="w-28 h-28"
            /> */}
          </div>
        </div>

      </div>
    </section>
  );
}
