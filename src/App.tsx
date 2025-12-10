import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SpecialtyCard from './components/SpecialtyCard';
import { specialtiesData } from './data/specialties';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Header />
      
      <main>
        <Hero />

        {/* Specialties Section */}
        <section id="specialties" className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-physio-text">Our Areas of Expertise</h2>
                <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Using advanced techniques to treat a wide range of physical conditions.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {specialtiesData.map((specialty, index) => (
                    <SpecialtyCard key={index} data={specialty} />
                ))}
            </div>
        </section>

        {/* Simple Footer CTA */}
        <section className="bg-physio-secondary py-16 px-4 text-center rounded-t-3xl mx-4 md:mx-8 mb-4 overflow-hidden relative">
             {/* Background image for texture */}
            <img src="https://images.unsplash.com/photo-1544367567-0f9116f41aa5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3" alt="" className="absolute inset-0 w-full h-full object-cover opacity-10 mix-blend-overlay z-0"/>
            
            <div className="relative z-10 max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-white mb-6">Ready to start your recovery journey?</h2>
                <p className="text-white text-lg mb-8 opacity-90">Book an appointment or request a home visit today.</p>
                <a 
                    href="tel:+911234567890"
                    className="inline-block bg-white text-physio-text px-8 py-4 rounded-full font-bold hover:bg-physio-bg transition shadow-lg"
                >
                    Call +91 123 456 7890
                </a>
            </div>
        </section>

      </main>
      
      <footer className="py-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} PhysioCare Clinic. All rights reserved.
      </footer>
    </div>
  );
}

export default App;