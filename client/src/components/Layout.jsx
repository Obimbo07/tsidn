import React from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from './SideBar';
import Navbar from './pages/Navbar';
import './layout.css';
import Footer from './Footer';
import { useLocation } from 'react-router-dom';

const Layout = () => {
  const location = useLocation();
  const path = location.pathname;

  const pathSections = path.toUpperCase().split('/').filter(Boolean);

  const frontPart = pathSections.length > 0 ? pathSections[0] : '';

  const restOfPath = pathSections.slice(1).join('/');

  return (
    <>
      <Navbar />
      <div className="bread-crumbs">
        <div className="navigation-guide">
          <span className="outer-link">
            <a  href={`/${frontPart}`}>{frontPart}</a>
          </span>
          <div className="inLink-container">
            {restOfPath && (
              <>
                <span className="inner-link">{restOfPath}</span>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="layout_container">
        <div className="layout__left-column">
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
