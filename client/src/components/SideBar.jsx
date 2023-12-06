import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './sidebar.css';

const SideBar = () => {
  const [sidebarLinks, setSidebarLinks] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Function to get the corresponding sidebar links based on the current route
    const getSidebarLinks = () => {
      const currentPath = location.pathname;

      // Define your sidebar links based on the current route
      if (currentPath.startsWith('/about')) {
        setSidebarLinks([
          { id: 1, text: 'About', url: '/about' },
          { id: 2, text: 'Executive Director', url: '/about/executive-director' },
          { id: 3, text: 'Mission', url: '/about/mission' },
          { id: 4, text: 'Core Values', url: '/about/core-values' },
          { id: 5, text: 'T', url: '/about/' },

        ]); 
      } else if (currentPath.startsWith('/themes')) {
        setSidebarLinks([
          { id: 1, text: 'Themes', url: '/themes' },
          { id: 2, text: 'Transport', url: '/themes/transport' },
          // Add more links as needed
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
          href="#"
          onClick={() => navigate(link.url)}
        >
          {link.text}
        </a>
      ))}
    </div>
  );
};

export default SideBar;
