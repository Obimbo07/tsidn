'use client';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons"; // Added faMinus for open state

const MobileNav = ({ links }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // Track open dropdown

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = (id) => {
    setOpenDropdown(openDropdown === id ? null : id); // Toggle dropdown
  };

  return (
    <Sheet open={isOpen} onOpenChange={toggleMenu}>
      <SheetTrigger asChild>
        <button
          className="md:hidden p-2 rounded-lg hover:bg-gray-200 transition-colors duration-200"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-gray-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-gray-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </SheetTrigger>

      <SheetContent
        className="w-[300px] sm:w-[400px] bg-white p-0"
        side="right"
      >
        <SheetHeader className="p-4 border-b border-gray-200">
          <SheetTitle className="text-lg font-bold text-gray-800">
            Menu
          </SheetTitle>
          <SheetDescription className="sr-only">
            Mobile navigation menu
          </SheetDescription>
        </SheetHeader>
        <nav className="p-4">
          <ul className="flex flex-col gap-2">
            {links.map((link) => (
              <li key={link.id} className="relative">
                <div className="flex items-center justify-between p-3 rounded-lg hover:bg-blue-50 transition-colors duration-200">
                  <Link
                    href={link.url}
                    className="block text-gray-800 font-medium text-base"
                    onClick={toggleMenu} // Close menu on link click
                  >
                    {link.text}
                  </Link>
                  {link.dropdown && (
                    <button
                      onClick={() => toggleDropdown(link.id)}
                      className="p-2 rounded-full hover:bg-blue-100 transition-colors duration-200"
                      aria-expanded={openDropdown === link.id}
                      aria-controls={`mobile-dropdown-${link.id}`}
                      aria-label={`Toggle ${link.text} dropdown`}
                    >
                      <FontAwesomeIcon
                        icon={openDropdown === link.id ? faMinus : faPlus}
                        className="w-5 h-5 text-white bg-blue-500 rounded-full p-1.5"
                      />
                    </button>
                  )}
                </div>
                {link.dropdown && openDropdown === link.id && (
                  <div
                    id={`mobile-dropdown-${link.id}`}
                    className="ml-4 mt-1 transition-all duration-300 ease-in-out"
                    style={{
                      maxHeight: openDropdown === link.id ? "1000px" : "0",
                      overflow: "hidden",
                    }}
                  >
                    <ul className="flex flex-col gap-1">
                      {link.dropdown.map((item) => (
                        <li
                          key={item.id}
                          className="p-3 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                        >
                          <Link
                            href={`${link.url}${item.url}`}
                            className="block text-gray-700 text-sm"
                            onClick={toggleMenu} // Close menu on link click
                          >
                            {item.text}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>
    </SheetContent>
  </Sheet>
);
}

export default MobileNav;