import React from 'react';
import './sidebar.css';

const SideBar = () => {
  return (
    <div className="sidebar">
      <a
        className="sidebar_links"
        href="#home"
      >
        Home
      </a>
      <a
        className="sidebar_links"
        href="#dashboard"
      >
        Dashboard
      </a>
      <a
        className="sidebar_links"
        href="#settings"
      >
        Settings
      </a>
      {/* Add more links as needed */}
    </div>
  );
};

export default SideBar;
