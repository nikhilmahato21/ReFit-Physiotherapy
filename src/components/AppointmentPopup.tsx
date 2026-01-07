import { useEffect, useState } from "react";

const AppointmentPopup = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 800); // subtle delay

    return () => clearTimeout(timer);
  }, []);

  const handleBookClick = () => {
    setOpen(false);

    const section = document.getElementById("book");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={() => setOpen(false)}
      />

      {/* Popup Card */}
      <div className="relative bg-white max-w-md w-full rounded-3xl p-6 md:p-8 shadow-xl animate-fadeIn">
        
        {/* Close */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          ✕
        </button>

        <h3 className="text-2xl font-semibold text-gray-900 mb-2">
          Book an Appointment
        </h3>

        <p className="text-gray-500 text-sm mb-6">
          Schedule a session with <span className="font-bold text-gray-600">Dr. Rajeev Khinchi </span> today for expert physiotherapy care.
        </p>

        <button
          onClick={handleBookClick}
          className="w-full bg-blue-600 text-white py-3 rounded-full font-medium hover:bg-blue-700 transition-all"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default AppointmentPopup;
