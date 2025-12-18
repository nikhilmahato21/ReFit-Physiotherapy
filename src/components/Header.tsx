import { useState } from 'react';


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = "+919461203939"; // Replace with actual number

  return (
    <header className="bg-physio-bg backdrop-blur-md sticky top-0 z-50 py-4 ">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
        
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <div className="text-2xl font-bold text-gray-900 flex flex-col leading-none">
            <span className='text-physio-accent'>Re<span className="text-blue-600">Fit</span></span>
            {/* <span className="text-[0.6rem] text-gray-500 tracking-widest uppercase font-medium">Advance</span> */}
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-gray-600">
          <a href="#service" className="hover:text-black transition flex items-center gap-1">
            Services 
          </a>
          <a href="#condition" className="hover:text-black transition flex items-center gap-1">
            Conditions Treated 
          </a>
         
          <a href="#about" className="hover:text-black transition flex items-center gap-1">
            About Us 
          </a>
           <a href="#contact" className="hover:text-black transition">Contact Us</a>
        </nav>

        {/* CTA Button */}
        

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2 text-gray-600" onClick={() => setIsOpen(!isOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-physio-bg  p-4 flex flex-col gap-4">
          <a href="#" className="font-medium text-gray-700">Services</a>
          <a href="#" className="font-medium text-gray-700">Conditions Treated</a>
          <a href="#" className="font-medium text-gray-700">Service Fees</a>
          <a 
            href={`tel:${phoneNumber}`}
            className="bg-physio-accent text-white text-center py-3 rounded-full font-bold"
          >
            Call Now
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;