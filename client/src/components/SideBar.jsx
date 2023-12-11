import React, { useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './sidebar.css';

const SideBar = () => {
  const [sidebarLinks, setSidebarLinks] = useState();
  const location = useLocation();
  const navigate = useNavigate();

  const links = [
    { id: 1, text: 'About', url: '/about', dropdown: ['Executive Director','Chief Innovation Officer', 'Mission', 'Our Core Values'] },
    { id: 2, text: 'TSDN Aims', url: '/tsdn-aims', dropdown: ['What We Do'] },
    { id: 2, text: 'Themes', url: '/themes', dropdown: ['Transport', 'Road Safety', 'Knowledge Sharing', 'Capacity Building', 'Eco-transport development', 'Human Resource development', 'AGG in transport Sector', 'Research and Development'] },
    { id: 3, text: 'Media', url: '/media', dropdown: ['Press Release', 'Podcasts', 'Videos'] },
    { id: 4, text: 'Events', url: '/meetings-and-events', dropdown: ['Meetings And Events', 'Ambush Highlights'] },
  ];

  useEffect(() => {
    const getSidebarLinks = () => {
      const currentPath = location.pathname;

      const matchingLink = links.find(link => currentPath.startsWith(link.url));

      if (matchingLink) {
        setSidebarLinks([
          { id: 1, text: matchingLink.text, url: matchingLink.url },
          ...(matchingLink.dropdown
            ? matchingLink.dropdown.map((item, index) => ({
                id: index + 2,
                text: item,
                url: `${matchingLink.url}/${item.toLowerCase().replace(/ /g, '-')}`,
              }))
            : []),
        ]);
      } else {
        setSidebarLinks([
          { id: 1, text: 'Home', url: '/' },
          { id: 2, text: 'Dashboard', url: '/dashboard' },
          { id: 3, text: 'Settings', url: '/settings' },
        ]);
      }
    };

    getSidebarLinks();
    // You can also update the sidebar links dynamically on route changes
    return () => {
      // Cleanup (if needed)
    };
    
  });

  return (
    <div className="sidebar" key={sidebarLinks.id}>
      {sidebarLinks.map((link) => (
        <a
          key={link.id}
          href="/"
          className="sidebar_links"
          onClick={() => navigate(link.url)}
        >
          {link.text}
        </a>
      ))}
    </div>
  );
};

export default SideBar;
