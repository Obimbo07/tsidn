"use client"

import { directors } from "@/components/Data";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faTwitter, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Image from 'next/image';
import { usePathname } from "next/navigation";

export default function Executives() {
  const pathname = usePathname();
  return (
    <>
      <h2 className="text-2xl font-bold text-center my-4">Executives</h2>
      <div className="flex flex-wrap justify-center gap-4 px-4">
        {directors.map((director) => (
          <div key={director.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 bg-white shadow-md rounded-lg overflow-hidden">
            <Link href={{pathname: `${pathname}/${director.id}`}} passHref className="block">
              <div className="block">
                <Image src={director.imgPath} alt={director.name} width={500} height={200} className="w-full h-48 object-contain rounded-t-lg" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold">{director.title}</h3>
                  <p className="text-gray-600 mb-2">{director.name}</p>
                  <div className="flex gap-2">
                    {director.linkedin && (
                      <Link href={director.linkedin} className="text-blue-500" passHref>
                          <FontAwesomeIcon icon={faLinkedin} />
                      </Link>
                    )}
                    {director.twitter && (
                      <Link href={director.twitter} className="text-blue-400" passHref>
                        
                          <FontAwesomeIcon icon={faTwitter} />
                      </Link>
                    )}
                    {director.email && (
                      <Link href={`mailto:${director.email}`} className="text-gray-500" passHref>
                          <FontAwesomeIcon icon={faEnvelope} />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
