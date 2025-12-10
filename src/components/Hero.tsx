import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="px-4 md:px-8 pb-12 max-w-7xl mx-auto">
      <div className="bg-physio-bg rounded-3xl p-8 md:p-16 flex flex-col-reverse md:flex-row items-center justify-between relative overflow-hidden shadow-sm">
        
        <div className="md:w-1/2 z-10 mt-8 md:mt-0">
          <h1 className="text-4xl md:text-6xl font-bold text-physio-text leading-tight mb-6">
            Restore Movement, <br /> Reclaim Your Life.
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-md">
            Expert physiotherapy care specializing in sports injuries, orthopedic conditions, and neurological rehabilitation.
          </p>
           <div className="inline-block bg-white px-6 py-3 rounded-xl shadow-sm text-physio-text font-semibold">
              <span className="text-physio-accent mr-2">✓</span> Home Visit Facility Available
           </div>
        </div>

        <div className="md:w-1/2 relative z-10">
            {/* Inspired by the image style in the design */}
            <img 
                src="https://images.unsplash.com/photo-1609540591241-29a3d279744a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3" 
                alt="Physiotherapy Session" 
                className="rounded-2xl shadow-xl object-cover h-[400px] w-full"
            />
             {/* Decorative Element inspired by design background lines */}
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-white opacity-40 rounded-full blur-3xl -z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;