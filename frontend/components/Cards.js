'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { cardsData } from './Data';

export default function Cards() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const CARDS_TO_SHOW = 2; // Number of cards to show at once

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % cardsData.length);
      }
    }, 1000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [isHovered]);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  const goToSlide = (index) => setCurrentIndex(index);

  return (
    <div className="relative w-full overflow-hidden" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${(currentIndex * 100) / CARDS_TO_SHOW}%)` }}>
        {cardsData.map((card) => (
          <div className="w-full flex-shrink-0" key={card.id} style={{ width: `${100 / CARDS_TO_SHOW}%` }}>
            <div className="mx-2 bg-white hover:bg-gray-800 rounded-lg border-solid shadow-lg p-1">
              <Link href={card.path} className="flex flex-col justify-between">
                <div className="w-15">
                  <img className="icon" src={card.iconUrl} alt={`Icon ${card.id}`} />
                </div>
                <div className="font-bold text-center font-sans">
                  <h6>{card.title}</h6>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className={`absolute bottom-0 w-full flex justify-center space-x-2 pb-4 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
        {Array.from({ length: Math.ceil(cardsData.length / CARDS_TO_SHOW) }, (_, index) => (
          <button key={index} onClick={() => goToSlide(index * CARDS_TO_SHOW)} className={`w-3 h-3 rounded-full ${currentIndex / CARDS_TO_SHOW === index ? 'bg-yellow-500' : 'bg-gray-300'}`} />
        ))}
      </div>
    </div>
  );
}
