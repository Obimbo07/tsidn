import Banner from "@/components/Banners/Banner";
import BlogCarossel, { MajorEvents } from "@/components/BlogCarossel";
import Cards from "@/components/Cards";
import EventsCarousel from "@/components/EventsCarousel";
import HeroBlog from "@/components/HeroBlog";
import HotNews from "@/components/HotNews";
import Modal from "@/components/Modal";
import Podcasts from "@/components/Podcasts";
import PressRelease from "@/components/PressRelease";
import IntroText from "@/components/IntroText/IntroText";
import TextSlider from "@/components/TextSlider/TextSlider";
import MissionVisionCards from "@/components/VisionCard/VisionCard";
import { Events } from "@/components/Data";
import { cardsData } from "@/components/Data";
import Impact from "@/components/Impact/Impact";
import ProgramsActivities from "@/components/programs/programsActivities";
import IntoVideo from "@/components/Banners/IntoVideo";
import Partners from "@/components/Partners/Partners";

export default function Home() {
  return (
    <>
     <div>
      <div className="h-screen">
        <Banner />
      </div>
      <IntroText />
      <div className="">
        <TextSlider />
      </div>
      <div className="md:flex gap-4 md:flex-row md:justify-around  p-2 w-fit mx-10 my-10">
        <MissionVisionCards />
      </div>
      <div className="w-full">
        <h2 className="text-3xl font-bold text-center">Pillars of TSDNs</h2>
        <HotNews Events={cardsData}/>
      </div>
      <div className="">
        <Impact />        
        <ProgramsActivities />
        <Partners />
      </div>
     </div>
    </>
  );
}


      {/* <Modal />
      <div className="md:flex gap-4 md:flex-row md:justify-around rounded-3xl w-fit  mx-10 my-10 shadow-lg">
         <HotNews />
          <HeroBlog className="rounded-3xl" />
      </div>
        <div className="w-full flec-col ">
          <h2 className="underline decoration-blue-700 decoration-width-full decoration-2 text-center text-4xl underline-offset-4">MAJOR EVENTS</h2>
          <EventsCarousel />
       </div>
      <Cards />
       {/* <div className="lower-section">
          <div className="featured-videos">
            <h3>FEATURED VIDEOS</h3>
            <div className="video-container">

              <iframe
                
                height="315"
                src="https://www.youtube.com/embed/T--aotYDL0g?si=GPC24-McY4EBB1uJ"
                title="YouTube Video 2"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>  */}
      {/* <div className="w-full md:flex md:justify-center">
        <PressRelease/>
          <h2 className="underline decoration-blue-700 decoration-width-full decoration-2 underline-offset-4">PODCASTS</h2>
        <Podcasts />
        
      </div> */}
