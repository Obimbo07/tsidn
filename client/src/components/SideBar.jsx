import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './sidebar.css';

const SideBar = () => {
  const [sidebarLinks, setSidebarLinks] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  const links = [
    { id: 1, text: 'About', url: '/about', dropdown: ['Executive Director', 'Mission', 'Our Core Values'] },
    { id: 2, text: 'TSDN Aims', url: '/tsdn-aims', dropdown: ['What We Do'] },
    { id: 2, text: 'Themes', url: '/themes', dropdown: ['Transport', 'Road Safety', 'Knowledge Sharing', 'Capacity Building', 'Eco-transport development', 'Human Resource development', 'AGG in transport Sector', 'Research and Development'] },
    { id: 3, text: 'Media', url: '/media', dropdown: ['Press Release', 'Podcasts', 'Videos'] },
    { id: 4, text: 'Events', url: '/meetings-and-events', dropdown: ['Meetings And Events', 'Ambush Highlights'] },
  ];

  useEffect(() => {
    // Function to get the corresponding sidebar links based on the current route
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
        // Default sidebar links
        setSidebarLinks([
          { id: 1, text: 'Home', url: '/' },
          { id: 2, text: 'Dashboard', url: '/dashboard' },
          { id: 3, text: 'Settings', url: '/settings' },
          // Add more links as needed
        ]);
      }
    };

    // Call the function initially and on route changes
    getSidebarLinks();

    // You can also update the sidebar links dynamically on route changes
    return () => {
      // Cleanup (if needed)
    };
  }, [location.pathname]);

  return (
    <div className="sidebar">
      {sidebarLinks.map((link) => (
        <a
          key={link.id}
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
