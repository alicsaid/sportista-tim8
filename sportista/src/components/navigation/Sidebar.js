import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {Link} from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
        const [admin, setAdmin] = useState(false);
        const [renter, setRenter] = useState(false);
        const [user, setUser] = useState(true);
    return (
        <>
            <Offcanvas show={true} backdrop={false}>
                <Offcanvas.Header style={{display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center"}}>
                    <Offcanvas.Title>
                        <img className='sidebarLogo' src='/sportista_logo.png' alt='' />
                        {admin && (
                            <h1>ADMIN ACCOUNT</h1>
                        )}
                        {renter && (
                            <h1>RENTER ACCOUNT</h1>
                        )}
                        {user && (
                            <h1>USER ACCOUNT</h1>
                        )}
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {admin && (
                        <div>
                            <Link to={'/admin'} className='sidebar-link'>
                                Dashboard
                            </Link>
                            <Link to={'/renters'} className='sidebar-link'>
                                Renters
                            </Link>
                            <Link to={'/users'} className='sidebar-link'>
                                Users
                            </Link>
                        </div>
                    )}
                    {renter && (
                        <div>
                            <Link to={'/renter'} className='sidebar-link'>
                                Dashboard
                            </Link>
                            <Link to={'/my-fields'} className='sidebar-link'>
                                My Fields
                            </Link>
                            <Link to={'/analytics'} className='sidebar-link'>
                                Analytics
                            </Link>
                            <Link to={'/contact'} className='sidebar-link'>
                                Contact
                            </Link>
                        </div>
                    )}
                    {user && (
                        <div>
                            <Link to={'/user'} className='sidebar-link'>
                                Dashboard
                            </Link>
                            <Link to={'/my-reservations'} className='sidebar-link'>
                                My Reservations
                            </Link>
                            <Link to={'/invites'} className='sidebar-link'>
                                Invites
                            </Link>
                            <Link to={'/contact'} className='sidebar-link'>
                                Contact
                            </Link>
                        </div>
                    )}
                    <Link to={'/'} className='sidebar-link'>
                        Log out
                    </Link>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default Sidebar;