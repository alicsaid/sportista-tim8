import React, {useEffect, useState} from 'react';
import './Sidebar.css'
import {CDBSidebar, CDBSidebarContent, CDBSidebarFooter, CDBSidebarHeader, CDBSidebarMenu, CDBSidebarMenuItem} from 'cdbreact';
import { NavLink, useLocation } from 'react-router-dom';

const RenterSidebar = () => {
    const location = useLocation();
    const [isActive1, setIsActive] = useState(false);

    useEffect(() => {
        setIsActive(!location.pathname.startsWith('/renter/'));
    }, [location]);

    return (
        <div className='sticky-div' style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
            <CDBSidebar textColor='#333' backgroundColor='#f4f4f4'>
                <CDBSidebarHeader prefix={<i className='fa fa-bars fa-large'></i>}>
                    <img src='/favicon.svg' alt='logo' style={{ width: '30px' , paddingRight: '3px'}}/>
                    <span className='text-decoration-none' style={{ color: 'inherit' }}>
                    Sporty
                    </span>
                </CDBSidebarHeader>

                <CDBSidebarContent>
                    <CDBSidebarMenu>
                        <NavLink exact to="/renter" className={isActive1 ? 'activeClicked' : ''}>
                            <CDBSidebarMenuItem icon='th-large'>
                                Dashboard
                            </CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/renter/my-fields" className={({ isActive }) => (isActive ? "activeClicked" : '')}>
                            <CDBSidebarMenuItem icon='futbol'>
                                My Fields
                            </CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/renter/analytics" className={({ isActive }) => (isActive ? "activeClicked" : '')}>
                            <CDBSidebarMenuItem icon='chart-line'>
                                Analytics
                            </CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/renter/account" className={({ isActive }) => (isActive ? "activeClicked" : '')}>
                            <CDBSidebarMenuItem icon='user'>
                                Account
                            </CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/renter/contact" className={({ isActive }) => (isActive ? "activeClicked" : '')}>
                            <CDBSidebarMenuItem icon='file-signature'>
                                Contact
                            </CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/logout">
                            <CDBSidebarMenuItem>
                                Logout
                            </CDBSidebarMenuItem>
                        </NavLink>
                    </CDBSidebarMenu>
                </CDBSidebarContent>

                <CDBSidebarFooter style={{ textAlign: 'center' }}>
                </CDBSidebarFooter>
            </CDBSidebar>
        </div>
    );
};

export default RenterSidebar;