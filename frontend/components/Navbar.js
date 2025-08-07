'use client';
import Link from 'next/link';
import Image from 'next/image';
import TopBadge from './TopBadge';
import SheetSide from './SearchSheet';
import MobileNav from './MobileNav';
import { useSession } from 'next-auth/react';

function Navbar() {
  const { data: session, status } = useSession();
  const links = [
    { id: 1, text: 'About', url: '/about', dropdown: [{ id: 1, text: 'Executives', url: '/executives' }, { id: 2, text: 'Mission', url: '/mission' }, { id: 3, text: 'Our Core Values', url: '/core-values' }] },
    { id: 2, text: 'TSDN Aims', url: '/tsdn-aims', dropdown: [{ id: 1, text: 'What We Do', url: '/what-we-do' }] },
    { id: 3, text: 'Themes', url: '/themes', dropdown: [
      { id: 1, text: 'Transport safety and development', url: '/transport-safety' },
      { id: 2, text: 'Expert knowledge sharing', url: '/knowledge-sharing' },
      { id: 3, text: 'Capacity building', url: '/capacity-building' },
      { id: 4, text: 'Eco-transport development', url: '/eco-transport' },
      { id: 5, text: 'Catalyzing financing', url: '/financing' },
      { id: 6, text: 'Advocacy for governance', url: '/advocacy' },
      { id: 7, text: 'Research and Development', url: '/research-development' }
    ] },
    { id: 4, text: 'Media', url: '/media', dropdown: [{ id: 1, text: 'Press Release', url: '/press-release' }, { id: 2, text: 'Podcasts', url: '/podcasts' }, { id: 3, text: 'Videos', url: '/videos' }] },
    { id: 5, text: 'Events', url: '/events', dropdown: [{ id: 1, text: 'Meetings And Events', url: '/meetings-and-events' }, { id: 2, text: 'Ambush Highlights', url: '/ambush-highlights' }] },
  ];

  const toplinks = [
    { id: 1, text: 'Contact us', url: '/contact' },
    { id: 2, text: 'Register', url: '/register' },
    { id: 3, text: 'Login', url: '/signin' },
    { id: 4, text: 'Account', url: '/dashboard' },
  ];

  return (
    <>
      {/* Top Layer: Logo and Top Links */}
      <div className="bg-blue-600  text-white p-2 flex items-center justify-between shadow-md">
        <Link href="/">
            <Image src="/LogoFinal.svg" alt="TSDN Logo" width={120} height={60} className="object-contain" />
          </Link>
        <div className="flex items-center gap-4">
          {/* <ul className="flex gap-4">
            {toplinks.map((link) => (
              <li key={link.id}>
                <Link className="hover:text-gold-500 transition-colors" href={link.url}>{link.text}</Link>
              </li>
            ))}
          </ul> */}
        </div>
        <div className="flex items-center gap-4">
          <TopBadge />
          <SheetSide />
        </div>
      </div>

      {/* Second Layer: Main Navigation */}
      <nav className="bg-gradient-to-b from-gray-50 to-white p-4 shadow-md">
        <div className="w-full flex items-center justify-center  mx-auto">
          <ul className="flex gap-6">
            {links.map((link) => (
              <li key={link.id} className="relative group">
                <Link href={link.url} className="font-bold text-gray-800 hover:text-blue-700 transition-colors">
                  {link.text}
                </Link>
                {link.dropdown.length > 0 && (
                  <div className="absolute left-0 mt-2 w-72 bg-white shadow-lg rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out transform group-hover:translate-y-2">
                    <ul className="py-2">
                      {link.dropdown.map((item) => (
                        <li key={item.id} className="px-4 py-2 hover:bg-gray-100">
                          <Link href={`${link.url}${item.url}`} className="text-gray-600 hover:text-blue-700">
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
          <div className="flex justify-between items-center gap-4">
            
            <MobileNav links={links} />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;