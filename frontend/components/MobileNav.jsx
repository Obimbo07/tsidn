'use client';
import { useState } from 'react';
import Link from 'next/link';

const MobileNav = ({ links }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = (id) => setActiveDropdown(activeDropdown === id ? null : id);

  return (
    <>
      <button className="md:hidden p-2 text-white bg-blue-500 rounded" onClick={toggleMenu}>
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        )}
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-white z-20 p-6 transform transition-transform duration-300 ease-in-out">
          <button className="absolute top-4 right-4 text-blue-500" onClick={toggleMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <nav className="flex flex-col items-start gap-4 mt-12">
            {links.map((link) => (
              <div key={link.id} className="w-full">
                <div className="flex items-center justify-between" onClick={() => toggleDropdown(link.id)}>
                  <Link href={link.url} className="text-xl font-bold text-blue-700 hover:text-blue-900">
                    {link.text}
                  </Link>
                  {link.dropdown.length > 0 && (
                    <span className="text-blue-500">{activeDropdown === link.id ? '−' : '+'}</span>
                  )}
                </div>
                {link.dropdown.length > 0 && activeDropdown === link.id && (
                  <ul className="ml-4 mt-2 space-y-2 transition-all duration-300 ease-in-out">
                    {link.dropdown.map((item) => (
                      <li key={item.id}>
                        <Link href={`${link.url}${item.url}`} className="text-gray-600 hover:text-blue-700">
                          {item.text}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </>
  );
};

export default MobileNav;