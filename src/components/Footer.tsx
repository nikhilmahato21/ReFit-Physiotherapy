import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#F5F7FA] pt-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* TOP GRID */}
        <div className="grid gap-12 md:grid-cols-4">

          {/* BRAND */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900">
              Re<span className="text-primary">Fit</span>
            </h3>
            <p className="text-gray-600 mt-4 text-sm leading-relaxed max-w-xs">
              Providing expert physiotherapy care to help you move better,
              recover faster, and live pain-free.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm text-gray-600">
              {["Home", "About", "Services", "Testimonials", "Contact"].map(
                (item) => (
                  <li
                    key={item}
                    className="hover:text-gray-900 cursor-pointer transition"
                  >
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">
              Services
            </h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>Sports Physiotherapy</li>
              <li>Orthopedic Physiotherapy</li>
              <li>Neurological Physiotherapy</li>
              <li>Post-Surgery Rehab</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">
              Contact
            </h4>

            <ul className="space-y-4 text-sm text-gray-600">
              <li className="flex items-center gap-3">
                <Phone size={16} />
                <span>+91 94612 03939</span>
              </li>

              <li className="flex items-center gap-3">
                <Mail size={16} />
                <span>care@physiocare.com</span>
              </li>

              <li className="flex  gap-3">
                <MapPin size={16} className="shrink-0" />
                <span>No. 7, Durga vatika, Brij Mohan Marg, opposite BSNL colony, Vinoba Vihar, Model Town, Jagatpura, Jaipur, Rajasthan 302017</span>
              </li>
            </ul>
          </div>

        </div>

        {/* DIVIDER */}
        <div className="border-t border-gray-200 mt-16 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} ReFit All rights reserved.
          </p>

          <div className="flex gap-6 text-sm text-gray-500">
            <span className="hover:text-gray-900 cursor-pointer transition">
              Privacy Policy
            </span>
            <span className="hover:text-gray-900 cursor-pointer transition">
              Terms of Service
            </span>
          </div>

        </div>
      </div>
    </footer>
  );
}
