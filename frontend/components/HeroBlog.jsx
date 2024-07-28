"use client"

import * as React from "react"
import { meetings } from "./Data"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import Fade from "embla-carousel-fade"
import { Badge } from "./ui/badge"

import Image from "next/image"

export default function HeroBlog() {
  return (
    <Carousel
       plugins={[
        Autoplay({
          delay: 3000,
        }),
        Fade(),
      ]}
      opts={{
        align: "center",
        containScroll: false,
        loop: true,
      }}
      className="w-full"
    >
      <CarouselContent className="h-[600px] ">
        {meetings.map((meeting, index) => (
          <CarouselItem
            key={index}
            className="h-full relative bg-cover bg-center p-8"
            style={{ backgroundImage: `url(${meeting.img})`, borderRadius: '40px', opacity: '10'  }}
          >
            <div className="h-full bg-gradient-to-top from-blue-300 to-blue-100 flex flex-col justify-center items-center" >
              <Card className="absolute bg-gray-900 bg-opacity-30 top-20 left-14" >
                <CardContent className="flex flex-col outline-transparent items-center justify-center">
                  <Badge className='text-xl flex-start drop-shadow-2xl bg-transparent'>{meeting.tags}</Badge>
                  <div className="text-white opacity-90 drop-shadow-2xl hover:underline">
                    <h5 className="font-semibold p-4 drop-shadow-2xl text-5xl">{meeting.title}</h5>
                    <span className="font-neutral-100  drop-shadow-2xl p-4">{meeting.description}</span>
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
