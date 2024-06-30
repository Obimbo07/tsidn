'use client';

import  Link  from 'next/link';
import { cardsData } from './Data';

export default function Cards () {
  return (
    <div className="w-full flex flex-wrap justify-center">
      {cardsData.map((card) => (
        <div 
        className="w-1/3  bg-white hover:bg-gray-800 b rounded-lg border-solid shadow-lg p-1" 
        key={card.id}>
        <Link 
          href={card.path}
          className="flex flex-col justify-between"
        >
          <div 
            className="w-15">
            <img 
              className="icon" 
              src={card.iconUrl} 
              alt={`Icon ${card.id}`}
            />
          </div>
          <div className="font-bold text-center font-sans">
            <h6>{card.title}</h6>
          </div>
        </Link>
        </div>
        
      ))}
    </div>
  );
};
