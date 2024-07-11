'use client';

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

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
      url: "/meetings-and-events",
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
      <nav className="flex justify-between items-center p-4 bg-white shadow-md">
        <ul className="md:flex flex gap-4">
          {toplinks.map((link) => (
            <li key={link.id}>
              <Link href={link.url}>{link.text}</Link>
            </li>
          ))}
        </ul>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>
      </nav>

      <nav className={`md:flex ${isOpen ? "block" : "hidden"} justify-around bg-gray-100 p-4`}>
        <Image src="/LogoFinal.svg" alt="Logo" width={180} height={37} priority />
        <ul className="flex flex-col md:flex-row md:gap-4">
          {links.map((link) => (
            <li key={link.id} className="relative group">
              <Link href={link.url} className="block px-4 py-2">
                {link.text}
              </Link>
              <div className="absolute w-max hidden right-8 group-hover:block bg-white shadow-lg mt-2 rounded">
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
