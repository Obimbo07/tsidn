// 'use client';

// import { useEffect, useState } from 'react';
// import Link from 'next/link';
// import { cardsData } from './Data';

// export default function Cards() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isHovered, setIsHovered] = useState(false);

//   const CARDS_TO_SHOW = 2;

//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (!isHovered) {
//         setCurrentIndex((prevIndex) => (prevIndex + 1) % cardsData.length);
//       }
//     }, 1000);

//     return () => clearInterval(interval);
//   }, [isHovered]);

//   const handleMouseEnter = () => setIsHovered(true);
//   const handleMouseLeave = () => setIsHovered(false);
//   const goToSlide = (index) => setCurrentIndex(index);

//   return (
//     <div className="block w-full overflow-hidden" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
//       <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${(currentIndex * 100) / CARDS_TO_SHOW}%)` }}>
//         {cardsData.map((card) => (
//           <div className="w-full flex-shrink-0" key={card.id} style={{ width: `${100 / CARDS_TO_SHOW}%` }}>
//             <div className="mx-2 bg-white hover:bg-gray-800 rounded-lg border-solid shadow-lg p-1">
//               <Link href={card.path} className="flex flex-col justify-between">
//                 <div className="w-15">
//                   <img className="icon" src={card.iconUrl} alt={`Icon ${card.id}`} />
//                 </div>
//                 <div className="font-bold text-center font-sans">
//                   <h6>{card.title}</h6>
//                 </div>
//               </Link>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className={`absolute w-full flex justify-center space-x-2  transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
//         {Array.from({ length: Math.ceil(cardsData.length / CARDS_TO_SHOW) }, (_, index) => (
//           <button key={index} onClick={() => goToSlide(index * CARDS_TO_SHOW)} className={`w-3 h-3 rounded-full ${currentIndex / CARDS_TO_SHOW === index ? 'bg-yellow-500' : 'bg-gray-300'}`} />
//         ))}
//       </div>
//     </div>
//   );
// }
'use client';

import React, { useCallback } from 'react'
import '../component_css/embla_cards.css'
import { DotButton, useDotButton } from './EmblaCarouselDotButton'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButton'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import { cardsData } from './Data';


export  const CardsCarossel = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()])

  const onNavButtonClick = useCallback((emblaApi) => {
    const autoplay = emblaApi?.plugins()?.autoplay
    if (!autoplay) return

    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? autoplay.reset
        : autoplay.stop

    resetOrStop()
  }, [])

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
    emblaApi,
    onNavButtonClick
  )

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi, onNavButtonClick)

  return (
    <section className="embla_cards">
      <div className="embla__viewport_cards" ref={emblaRef}>
        <div className="embla__container_cards">
          {slides.map((slide) => (
              <div className="embla__slide_cards bg-gradient-to-b from-blue-400 to-blue-800 text-white" key={slide.index}>
                  <img src={slide.iconUrl} width={80} height={30} alt={slide.title} />
                  <h2 className='font-bold text-2xl'>{slide.title}</h2>
              </div>
            ))}
        </div>
      </div>

      <div className="embla__controls_cards">
        <div className="embla__buttons_cards">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="embla__dots_cards">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot_cards'.concat(
                index === selectedIndex ? ' embla__dot_cards--selected' : ''
              )}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

const OPTIONS = { axis: 'x', align: 'start', dragFree: true, Autoplay: true }

export default function Cards(){
  return (
      <CardsCarossel slides={cardsData} options={OPTIONS} />
  )
}