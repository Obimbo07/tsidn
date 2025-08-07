'use client';
import React from 'react';

const IntoVideo = () => {
  return (
    <section className="w-full py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8 underline decoration-blue-700 decoration-2 underline-offset-4">
          Featured Videos
        </h3>
        <div className="relative w-full mx-auto">
          <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-lg">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/T--aotYDL0g?si=GPC24-McY4EBB1uJ"
              title="Featured Video: Transportation and Safety"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              aria-label="Featured video on transportation and safety"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntoVideo;