'use client'
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
 
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { HeroData } from "../Data"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMedal } from '@fortawesome/free-solid-svg-icons'

const Banner = () => {
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
      )
      return (
        <div className=" bg-gray-500">
        <Carousel
          plugins={[plugin.current]}
          opts={{ align: "center", loop: true, }}
          className="w-full p-10  bg-gray-900 "
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent className="w-full">
            {HeroData.map((data, index) => (
              <CarouselItem key={index} className="" >
                <div className="">
                  <Card className={`h-[40rem] md:h-[30rem] ${data.className}`}>
                    <CardContent className="flex flex-col pt-8 items-center justify-center">
                    <h2 className="text-5xl md:text-5xl font-bold mb-4 text-white">
                      {data.heading}
                     </h2>
                  <ul className="list-none p-0">
                    {data.texts.map((text, i) => (
                      <li key={i} className="flex items-center bg-blue-900 mb-2 p-4">
                        <FontAwesomeIcon
                          icon={faMedal}
                          className="text-yellow-500 mr-3"
                        />
                        <span className="text-white text-lg md:text-base lg:text-lg">
                          {text}
                        </span>
                      </li>
                    ))}
                  </ul>
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

export default Banner