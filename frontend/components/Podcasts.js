import { podcasts } from "./Data";
import Link from "next/link";

const Podcasts = () => {
  return (
    <div className="h-2/5 overflow">
    <h2 className="font-mono underline text-3xl">Podcasts</h2>
    {podcasts.map((podcast) => (
        <div className="podcast-section bg-gray-300 m-2 " key={podcast.id}>
        <Link href={'m'} className='hover:bg-white podcasts-link'>
            <div className='podcast-content text-start p-2'>
            <h5 className="text-black font-bold">{podcast.title}</h5>
            <p className="text-black">Release Date: {podcast.date} </p>
            </div>
        </Link>
        </div>
     ))}
    </div>
  )
}

export default Podcasts;