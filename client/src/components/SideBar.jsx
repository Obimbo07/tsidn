import React, { useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './sidebar.css';

const SideBar = () => {
  const [sidebarLinks, setSidebarLinks] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  const links = useMemo(() => [
    { id: 1, text: 'About', url: '/about', dropdown: [ 'Executives', 'Mission', 'Our Core Values',] },
    { id: 2, text: 'TSDN Aims', url: '/tsdn-aims', dropdown: ['What We Do']},
    { id: 3, text: 'Themes', url: '/themes', dropdown: ['Transport safety and development',  'Expert knowledge sharing in transport safety development', 'Capacity building and human resource Development in transport', 'Eco-transport development', 'Catalyzing financing for road transport safety improvement programmes', 'Advocacy for good governance in transport safety and development', 'Research and Development in transport'] },
    { id: 4, text: 'Media', url: '/media', dropdown: ['Press Release', 'Podcasts', 'Videos']},
    { id: 5, text: 'Events', url: '/meetings-and-events', dropdown: ['Meetings And Events', 'Ambush Highlights',]},
  ],[] ) ;

  useEffect(() => {
    const getSidebarLinks = () => {
      const currentPath = location.pathname;

      const matchingLink = links.find(link => currentPath.startsWith(link.url));

      if (matchingLink) {
        setSidebarLinks([
          { id: 0, text: matchingLink.text, url: matchingLink.url },
          ...(matchingLink.dropdown
            ? matchingLink.dropdown.map((item, index) => ({
                id: index + 1,
                text: item,
                url: `${matchingLink.url}/${item.toLowerCase().replace(/ /g, '-')}`,
              }))
            : []),
        ]);
      } else {
        setSidebarLinks([
          { id: 1, text: 'Home', url: '/' },
        ]);
      }
    };

    getSidebarLinks();
    // You can also update the sidebar links dynamically on route changes
    return () => {
      // Cleanup (if needed)
    };
    
  }, [location.pathname, links]);

  return (
    <div className="sidebar">
      {sidebarLinks.map((link) => (
        <button
        key={link.id}
        href="#"
        className={`sidebar-links ${location.pathname.startsWith(link.url) ? 'active' : ''}`}
        onClick={() => navigate(link.url)}
        >
          {link.text}
        </button>
      ))}
    </div>
  );
};

export default SideBar;
