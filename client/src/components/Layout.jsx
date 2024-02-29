import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from './SideBar';
import Navbar from './pages/Component';
import './layout.css';
import Footer from './Footer';
import { useLocation } from 'react-router-dom';
import NavBarComponent from './pages/Component';

const Layout = () => {
  const location = useLocation();
  const path = location.pathname;

  const pathSections = path.toUpperCase().split('/').filter(Boolean);
  const frontPart = pathSections.length > 0 ? pathSections[0] : '';
  const restOfPath = pathSections.slice(1).join('/');

  const [isLeftColumnOpen, setIsLeftColumnOpen] = useState(false);

  const toggleLeftColumn = () => {
    setIsLeftColumnOpen(!isLeftColumnOpen);
  };

  return (
    <>
      <NavBarComponent />
      <div className="bread-crumbs">
        <div className="navigation-guide">
          <span className="outer-link">
            <a href={`/${frontPart}`}>{frontPart}</a>
          </span>
          {'>'}
          <div className="inLink-container">
            {restOfPath && (
              <>
                <span className="inner-link">{restOfPath}</span>
              </>
            )}
          </div>
        </div>
      </div>
      <button className="more-options-btn" onClick={toggleLeftColumn}>
            More Options
      </button>
      <div className="layout_container">
        <div className={`layout__left-column ${isLeftColumnOpen ? 'open' : ''}`}>
          <button className="close-btn" onClick={toggleLeftColumn}>
            X
          </button>
          <SideBar />
        </div>
        <div className="layout__right-column">
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
