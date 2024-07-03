import BlogCarossel from "@/components/BlogCarossel";
import Cards from "@/components/Cards";
import Podcasts from "@/components/Podcasts";
import PressRelease from "@/components/PressRelease";

export default function Home() {
  return (
    <main>
      <BlogCarossel />
      <Cards />
      <div className="w-full md:flex md:justify-center">
        <PressRelease/>
        <Podcasts />
        <div className="lower-section">
          <div className="featured-videos">
            <h3>FEATURED VIDEOS</h3>
            <div className="video-container">

              <iframe
                width="460"
                height="315"
                src="https://www.youtube.com/embed/T--aotYDL0g?si=GPC24-McY4EBB1uJ"
                title="YouTube Video 2"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
        
      </div>
      
    </main>
  );
}
