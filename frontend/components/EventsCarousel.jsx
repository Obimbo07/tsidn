"use client"

import * as React from "react"
import { Events } from "./Data"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

import Image from "next/image"

export default function EventsCarousel() {
  return (
    <Carousel
       plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
      opts={{
        align: "center",
        loop: true,
      }}
      className="w-full"
    >
      <CarouselContent className="h-[max] p-2">
        {Events.map((event, id) => (
          <CarouselItem key={id} className="h-[fit] basis-1/2 md:basis-1/3 lg:basis-1/3">
            <div className="p-1">
              <Card className="h-fit">
                <CardContent className="flex flex-row  items-center justify-center">
                  <div className="flex items-top content-start">
                      <Image src={event.img} className="h-auto w-52" width={10} height={10} alt="Company Logo" />
                  </div>
                  <div className="flex-col">
                    <h5 className="font-semibold text-xl">{event.title}</h5>
                    <span className="font-neutral-100 text-xl">{event.date}</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
