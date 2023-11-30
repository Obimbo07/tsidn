// Sidebar.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import SideNav, { NavItem, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <SideNav onSelect={(selected) => navigate('/' + selected)}>
      <SideNav.Toggle />
      <SideNav.Nav defaultSelected="history">
        <NavItem eventKey="history">
          <NavText>History</NavText>
        </NavItem>
        <NavItem eventKey="aims">
          <NavText>Aims</NavText>
        </NavItem>
      </SideNav.Nav>
    </SideNav>
  );
};

export default Sidebar;
