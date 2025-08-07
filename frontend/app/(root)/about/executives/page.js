"use client"

import { directors } from "@/components/Data";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {  faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import Image from 'next/image';
import { usePathname } from "next/navigation";
//  href={{pathname: `${pathname}/${director.id}`}}
export default function Executives() {
  const pathname = usePathname();
  return (
    <>
      <h2 className="text-2xl font-bold text-center my-4">Executives</h2>
      <div className="flex flex-wrap justify-center gap-4 px-4">
        {directors.map((director) => (
          <div key={director.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 shadow-md rounded-b-lg  overflow-hidden">
            <Link href="#" >
              <div className="">
                <div>
                  <Image src={director.imgPath} alt={director.name} width={500} height={100} className="object-contain" />
                </div>
                <div className="p-4 max-h-max bg-white">
                  <h3 className="text-xl font-semibold">{director.title}</h3>
                  <p className="text-gray-600 ">{director.name}</p>
                  <div className="flex gap-2">
                    {director.linkedin && (
                      <Link href={director.linkedin} className="text-blue-500" passHref>
                          <FontAwesomeIcon icon={faLinkedin} />
                      </Link>
                    )}
                    {director.twitter && (
                      <Link href={director.twitter} className="text-blue-400" passHref>
                          <FontAwesomeIcon icon={faXTwitter} />
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
