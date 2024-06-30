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
      </div>
      
    </main>
  );
}
