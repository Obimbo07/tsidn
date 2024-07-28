import EmblaCarousel from './EmblaCarousel';
import '../component_css/base.css'
import '../component_css/embla.css'
import '../component_css/sandbox.css'

// const api = `${process.env.REACT_APP_DATABASE_API}/api/selectContent`;
// console.log(api);
// const podcastsApi = `${process.env.REACT_APP_DATABASE_API}/api/selectPodCasts`;
// const meetingsEventsApi = `${process.env.REACT_APP_DATABASE_API}/api/selectMeeting`;

const OPTIONS = { axis: 'x', align: 'start', dragFree: true, Autoplay: true }
const SLIDES = [
    {
        index: 1,
        title: 'Post 1',
        description: 'Sample test data description 1',
        img: '/shirley.jpg'
    },
    {
        index: 2,
        title: 'Post 2',
        description: 'Sample test data description 2',
        img: '/shirley.jpg'
    },
    {
        index: 3,
        title: 'Post 3',
        description: 'Sample test data description 3',
        img: '/shirley.jpg'
    },
    {
        index: 4,
        title: 'Post 4',
        description: 'Sample test data description 4',
        img: '/shirley.jpg'
    },
    {
        index: 5,
        title: 'Post 5',
        description: 'Sample test data description 5',
        img: '/shirley.jpg'
    }
];





// import { getMeetings } from '@/app/(root)/events/meetings-and-events/page';
import Image from 'next/image';
import { Events } from './Data';

// async function getNews() {
//     'use server'
//     const res = await fetch( `${process.env.REACT_APP_DATABASE_API}/api/selectNews`);
//     console.log(res)
  
//     if (!res.ok) {
//       throw new Error('Failed to fetch News');
//     }
  
//     const News = await res.json();
//     return News.data;
// }

export async function MajorEvents() {
    // const Events = await getMeetings();
    console.log(Events);
    return (
        <div className="flex flex-col h-auto md:w-fit">
         <h2 className="underline decoration-blue-700 decoration-width-full decoration-2 underline-offset-4">MAJOR EVENTS</h2>
           <div className='divide-y shadow-lg divide-slate-400'>
            {Events.map((event) => (
                <div className="m-2 flex text-neutral-900 my-4 flex-row hover:underline" key={event.index} >
                <span className="text-2xl text-center">
                    <p className="text-blue-600">{event.post_title}</p>
                    <span>{event.start_date} to {event.end_date} </span>
                </span>
                <Image className="h-auto w-52" src={'/LogoFinal.svg'} width={100} height={100} alt="tsdn logo svg" />
                </div>
            ))}
           </div>
            
        </div>        
    );
}

export default  function BlogCarossel(){
    return (
        <>
            <div id="hero w-2/3" >
              <EmblaCarousel slides={SLIDES} options={OPTIONS} />
            </div>
        </>
    )
}