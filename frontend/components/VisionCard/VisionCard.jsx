import Image from 'next/image';
import React from 'react';

const VisionCard = () => {
  return (
    <div className="flex flex-col justify-center w-50 p-4 text-center m-4 bg-gray-900 text-xl text-white rounded-xl shadow-lg">
      <div className="relative w-full h-56">
        <Image 
          src="/trafficLights.jpg" 
          alt="vision" 
          layout="fill" 
          objectFit="fill" 
          className="object-fill h-75" 
        />
      </div>
      <div className="p-6 text-center">
        <h2 className="p-4 font-bold text-5xl">Our Vision</h2>
        <p className="p-2 bg-inherit text-center text-3xl italic">
          A leading world class transport systems organization that ensures safe mobility for communities, goods, and services, contributing to economic growth, environmental sustainability, and social equity.
        </p>
      </div>
    </div>
  );
};

export default VisionCard;