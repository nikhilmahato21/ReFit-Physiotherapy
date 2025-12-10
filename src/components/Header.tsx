import React from 'react';

const Header: React.FC = () => {
  const phoneNumber = "+911234567890"; // Replace with actual number

  return (
    <header className="py-6 px-4 md:px-12 flex justify-between items-center max-w-7xl mx-auto">
      <div className="text-2xl font-bold text-physio-text">
        Physio<span className="text-physio-accent">Care</span>
      </div>
      
      <nav className="hidden md:flex space-x-8 text-physio-text font-medium">
        <a href="#specialties" className="hover:text-physio-accent transition">Specialties</a>
        <a href="#about" className="hover:text-physio-accent transition">About Us</a>
        <a href="#contact" className="hover:text-physio-accent transition">Location</a>
      </nav>

      {/* Call to Action Button for Number */}
      <a 
        href={`tel:${phoneNumber}`}
        className="bg-physio-text text-white px-6 py-3 rounded-full font-medium hover:bg-opacity-90 transition flex items-center gap-2 shadow-lg"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-1.36 1.744a19.45 19.45 0 01-10.15-10.15l1.744-1.36c.362-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
        </svg>
        Call Now
      </a>
    </header>
  );
};

export default Header;