'use client';

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { id: 1, text: "About", url: "/about", dropdown: ["Executives", "Mission", "Our Core Values"] },
    { id: 2, text: "TSDN Aims", url: "/tsdn-aims", dropdown: ["What We Do"] },
    { id: 3, text: "Themes", url: "/themes", dropdown: ["Transport safety and development", "Expert knowledge sharing in transport safety development", "Capacity building and human resource Development in transport", "Eco-transport development", "Catalyzing financing for road transport safety improvement programmes", "Advocacy for good governance in transport safety and development", "Research and Development in transport"] },
    { id: 4, text: "Media", url: "/media", dropdown: ["Press Release", "Podcasts", "Videos"] },
    { id: 5, text: "Events", url: "/meetings-and-events", dropdown: ["Meetings And Events", "Ambush Highlights"] },
  ];

  const toplinks = [
    { id: 1, text: "Contact us", url: "/contact" },
    { id: 2, text: "Register", url: "/register" },
    { id: 3, text: "Login", url: "/login" },
  ];

  return (
    <>
      <nav className="flex justify-between items-center p-4 bg-white shadow-md">
        <ul className=" md:flex flex gap-4">
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
                  {link.dropdown.map((item, index) => (
                    <li key={index} className="px-4 py-2 hover:bg-gray-200">
                      {item}
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
