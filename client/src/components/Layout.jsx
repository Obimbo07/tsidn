import { Outlet } from 'react-router-dom';
import SideBar from './SideBar';
import './layout.css';

const Layout = () => {
  return (
    <div className="layout_container">
      <div className="layout__left-column">
        <h2>Left Column (4 columns)</h2>
        <SideBar />
      </div>
      <div className="layout__right-column">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
