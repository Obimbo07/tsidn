// import { podcasts } from "./Data";
// import { podcasts } from "@/app/(root)/media/podcasts/page";
// import { getPodcasts } from "@/app/(root)/media/podcasts/page";
import Link from "next/link";
import Image from "next/image";
import { split } from "postcss/lib/list";
import { podcasts } from "./Data";

async function Podcasts(){
  // const podcasts = await getPodcasts();
  // const podcatsTag = podcastspost.split()
  return (
    <div className="h-2/5 overflow-scroll h-svh p-4">
    <h2 className="underline decoration-blue-700 decoration-width-full decoration-2 underline-offset-4">PODCASTS</h2>
      {podcasts.map((podcast) => (
            <div className="bg-white shadow-lg rounded-lg p-4 mb-6" key={podcast.id}>
              <h2 className="text-3xl font-bold mb-2">{podcast.post_title}</h2>
              <div className="flex">
                <div className="w-1/3">
                  <Image
                    src={'/traffic-cone.png'}
                    width={60}
                    height={10}
                    alt={podcast.image_name}
                    className="w-auto h-auto rounded"
                  />
                </div>
                <div className="w-2/3 pl-4">
                  {/* <p className="text-gray-700">{podcast.post_tag}</p> */}
                  <p className="text-gray-500">Releases: {podcast.date}</p>
                </div>
              </div>
            </div>
          ))}
    </div>
  )
}

export default Podcasts;