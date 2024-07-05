'use client';

import Image from "next/image";
import EmblaCarousel from './EmblaCarousel';
import '../component_css/base.css'
import '../component_css/embla.css'
import '../component_css/sandbox.css'

// const api = `${process.env.REACT_APP_DATABASE_API}/api/selectContent`;
// console.log(api);
// const podcastsApi = `${process.env.REACT_APP_DATABASE_API}/api/selectPodCasts`;
// const meetingsEventsApi = `${process.env.REACT_APP_DATABASE_API}/api/selectMeeting`;

const OPTIONS = { axis: 'x', align: 'start', dragFree: true, Autoplay: true }
const SLIDE_COUNT = 5
const SLIDES = [
    {
        title: 'Post 1',
        img: 'shirley.jpg'
    },
    {
        title: 'Post 2',
        img: 'shirley.jpg'
    },
    {
        title: 'Post 3',
        img: 'shirley.jpg'
    },
    {
        title: 'Post 4',
        img: 'shirley.jpg'
    },
    {
        title: 'Post 5',
        img: 'shirley.jpg'
    }
];

const Events = [
  {  img: 'LogoFinal.svg', title: '2 DAY EVENT AT CITAM', date: '14th - 20th January, Nairobi', content: 'Company writeup that is displayed on each card and listed from the api data.'},
  {  img: 'LogoFinal.svg', title: 'ROAD SAFETY TRAINING TO SCHOOL DRIVERS', date: '20th - 22th January 2023, ', content: 'Company writeup that is displayed on each card and listed from the api data.' },
  {  img: 'LogoFinal.svg', title: 'APPLICATION OF DRIVERS LISENCE AND RENEWALS', date: '25th - 20th January', content: 'Company writeup that is displayed on each card and listed from the api data.' },
  {  img: 'LogoFinal.svg', title: 'MOMBASA ECO-TRANSPORT LAUNCH', date: '14th - 20th February', content: 'Company writeup that is displayed on each card and listed from the api data.' },
]


export function MajorEvents() {
    return (
        <div className="flex flex-col h-auto mx-4 shadow-full my-2">
         <h2 className="underline decoration-blue-700 decoration-width-full decoration-2 underline-offset-4">MAJOR EVENTS</h2>
            {Events.map((event) => (
                <div className="flex text-neutral-900 my-4 flex-row" key={event.index} >
                  <span className="text-2xl">
                    <p className="text-blue-600">{event.title}</p>
                    <p>{event.date}</p>
                  </span>
                  <img className="h-auto w-52" src={event.img} alt="tsdn logo svg" />
                </div>
            ))}
        </div>        
    );
}

export default function BlogCarossel(){
    return (
        <>
            <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        </>
    )
}