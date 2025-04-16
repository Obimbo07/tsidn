"use client"

import * as React from "react"
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

export default function HotNews({ Events }) {
  return (
    <div className="w-full ">
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
      className="w-full h-[fit]"
    >
      <CarouselContent className="h-[fit]">
        {Events.map((event, id) => (
          <CarouselItem key={id} className="h-[fit] basis-1/2 md:basis-1/3 lg:basis-1/5">
            <div className="">
              <Card>
                <CardContent className="flex flex-col aspect-square items-center text-center justify-center">
                  <Image src={event.iconUrl} alt={event.title} width={100} height={100} className="" />
                  <h5 className="font-semibold">{event.title}</h5>
                  <span className="font-neutral-100">{event.date}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    </div>
  )
}
