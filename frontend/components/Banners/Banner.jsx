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
  const plugin = React.useRef(Autoplay({ delay: 1000, stopOnInteraction: true }));

  return (
    <div className="relative w-full h-screen md:h-screen">
      <Carousel
        plugins={[plugin.current]}
        opts={{ align: 'center', loop: true }}
        className="w-full h-screen"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent className="w-full h-screen">
          {HeroData.map((data, index) => (
            <CarouselItem key={index} className="h-full">
              <Card
                className={`h-full bg-cover bg-center ${data.className}`}
               
              >
                <div className="h-full bg-black bg-opacity-50 flex items-center justify-center">
                  <CardContent className="flex flex-col items-center justify-center text-center p-6 md:p-10">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
                      {data.heading}
                    </h2>
                    <p className="text-lg md:text-xl text-white mb-6 max-w-2xl">
                      {data.text}
                    </p>
                    <Link
                      href={data.ctaLink}
                      className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 px-6 rounded-full transition duration-300"
                    >
                      {data.ctaText}
                    </Link>
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

export default Banner;