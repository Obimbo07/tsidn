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



export default function BlogCarossel(){
    return (
        <>
            <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        </>
    )
}