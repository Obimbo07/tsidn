import { Outlet } from 'react-router-dom';
import SideBar from './SideBar';
import Navbar from './pages/Navbar';
import './layout.css';
import Footer from './Footer';
import { useLocation } from 'react-router-dom';



const Layout = () => {
  const location = useLocation();
  const path = location.pathname;
  console.log(path);
  return (

    <>
    <Navbar /><div className="layout_container">
      <div className="layout__left-column">
        <a  href="{path}">{path}</a>
        <SideBar />
      </div>
      <div className="layout__right-column">
        <Outlet />
      </div>
    </div><Footer /></>
  );
};

export default Layout;
