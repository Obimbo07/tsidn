'use client';

import Link from "next/link";
import Image from "next/image";
import TopBadge from "./TopBadge";
import SheetSide from "./SearchSheet";
import MobileNav from "./MobileNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter, faFacebook, faWhatsapp, f } from "@fortawesome/free-brands-svg-icons";
import { SLIDES } from "./BlogCarossel";


function Navbar() {

  const links = [
    {
      id: 1,
      text: "About",
      url: "/about",
      dropdown: [
        { id: 1, text: "Executives", url: "/executives" },
        { id: 2, text: "Mission", url: "/mission" },
        { id: 3, text: "Our Core Values", url: "/core-values" }
      ]
    },
    {
      id: 2,
      text: "TSDN Aims",
      url: "/tsdn-aims",
      dropdown: [
        { id: 1, text: "What We Do", url: "/what-we-do" }
      ]
    },
    {
      id: 3,
      text: "Themes",
      url: "/themes",
      dropdown: [
        { id: 1, text: "Transport safety and development", url: "/transport-safety" },
        { id: 2, text: "Expert knowledge sharing in transport safety development", url: "/knowledge-sharing" },
        { id: 3, text: "Capacity building and human resource Development in transport", url: "/capacity-building" },
        { id: 4, text: "Eco-transport development", url: "/eco-transport" },
        { id: 5, text: "Catalyzing financing for road transport safety improvement programmes", url: "/financing" },
        { id: 6, text: "Advocacy for good governance in transport safety and development", url: "/advocacy" },
        { id: 7, text: "Research and Development in transport", url: "/research-development" }
      ]
    },
    {
      id: 4,
      text: "Media",
      url: "/media",
      dropdown: [
        { id: 1, text: "Press Release", url: "/press-release" },
        { id: 2, text: "Podcasts", url: "/podcasts" },
        { id: 3, text: "Videos", url: "/videos" }
      ]
    },
    {
      id: 5,
      text: "Events",
      url: "/events",
      dropdown: [
        { id: 1, text: "Meetings And Events", url: "/meetings-and-events" },
        { id: 2, text: "Ambush Highlights", url: "/ambush-highlights" }
      ]
    },
  ];

  const toplinks = [
    { id: 1, text: "Contact us", url: "/contact" },
    { id: 2, text: "Register", url: "/register" },
    { id: 3, text: "Login", url: "/login" },
  ];

  return (
    <>
      <div className='w-full flex-col'>
          <ul className="md:flex flex w-full justify-center  bg-blue-500 flex-center center gap-4">
              {toplinks.map((link) => (
                <li key={link.id}>
                  <Link className="text-white hover:text-gold-700 p-2" href={link.url}>{link.text}</Link>
                  
                </li>
              ))}
            </ul>
            <TopBadge />
      </div>
      <nav className="flex-col  items-center p-4 bg-white shadow-md">
        <div className='flex items-center justify-between'>
            <Link className='' href={"/"}>
              <Image src="/LogoFinal.svg" alt="Logo" width={150} height={10} priority />
            </Link>


            <SheetSide />


            
            <MobileNav  links={links} slides={SLIDES} />
        </div>

        

        <div className="w-full">
            
        </div>

      </nav>
      <nav className={`md:flex hidden sm:block justify-around bg-gray-100 p-4`}>
        <ul className="flex flex-col md:flex-row md:gap-4">
          {links.map((link) => (
            <li key={link.id} className="relative group">
              <div className="flex items-center">
                <Link href={link.url} className="block font-bold px-4 py-2">
                  {link.text}
                </Link>
                <span className="ml-2 font-bold md:hidden text-white bg-blue-500 rounded-full w-6 h-6 flex items-center justify-center ">+</span>
              </div>
              <div className="w-max hidden md:absolute z-50 group-hover:block bg-white shadow-lg rounded">
                <ul>
                  {link.dropdown.map((item) => (
                    <li key={item.id} className="px-4 py-2 hover:bg-gray-200">
                      <Link href={`${link.url}${item.url}`}>
                        {item.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </nav>

      
    </>
  );
}

export default Navbar;
