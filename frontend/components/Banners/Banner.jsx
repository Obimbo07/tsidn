'use client';
import * as React from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { HeroData } from '../Data';
import Link from 'next/link';

const Banner = () => {
  const plugin = React.useRef(Autoplay({ delay: 3000, stopOnInteraction: true }));

  return (
    <div className=" w-full h-screen md:h-screen">
      <Carousel
        plugins={[plugin.current]}
        opts={{ align: 'center', loop: true }}
        className="w-full h-screen"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent className="w-full h-screen">
          {HeroData.map((data, index) => (
            <CarouselItem key={index} className="h-full relative">
              <Card
                className={`h-full bg-cover bg-center ${data.className}`}
                
              >
                <div className="h-full bg-gradient-to-t from-black/60 to-black/50 flex items-center justify-center">
                  <CardContent className="flex flex-col items-center justify-center text-center p-6 md:p-10 space-y-4 animate-fade-in">
                    <h1
                      className="text-[40px] md:text-[80px] font-bold bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent drop-shadow-lg"
                      style={{ animationDelay: `${index * 0.2}s` }}
                    >
                      {data.heading}
                    </h1>
                    <p
                      className="text-[30px] md:text-[40px] text-white italic drop-shadow-md max-w-4xl"
                      style={{ animationDelay: `${index * 0.3}s` }}
                    >
                      {data.text}
                    </p>
                    {/* <Link
                      href={data.ctaLink}
                      className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-8 rounded-full border-2 border-orange-500 transition duration-300 animate-fade-in-up"
                      style={{ animationDelay: `${index * 0.4}s` }}
                    >
                      {data.ctaText}
                    </Link> */}
                  </CardContent>
                </div>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:block" />
        <CarouselNext className="hidden md:block" />
      </Carousel>
    </div>
  );
};

// CSS Animation Keyframes (inline for simplicity)
const styleSheet = `
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .animate-fade-in { animation: fadeIn 0.6s ease-out forwards; }
  .animate-fade-in-up { animation: fadeInUp 0.6s ease-out forwards; }
`;

const styleElement = document.createElement('style');
styleElement.textContent = styleSheet;
document.head.appendChild(styleElement);

export default Banner;