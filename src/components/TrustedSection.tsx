import React from 'react';
import { galleryImages } from '../data/data';
import ImageGallery from './ImageGallery';



const TrustedSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- TOP: Image Masonry Grid --- */}
        {/* We use tailwind columns utilities for a pure CSS masonry effect. 
            Note: Items order top-to-bottom, then left-to-right. */}
        


        {/* --- MIDDLE: Heading Section --- */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block px-4 py-2 mb-6 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-full shadow-sm">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Trusted by creatives and leaders
          </h2>
          <p className="text-3xl md:text-4xl font-bold text-gray-400 tracking-tight">
            from various industries
          </p>
        </div>
<ImageGallery/>

        {/* --- BOTTOM: Testimonials Grid --- */}
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {testimonials.map((item) => (
            <TestimonialCard key={item.id} item={item} />
          ))}
        </div> */}

      </div>
    </section>
  );
};

export default TrustedSection;