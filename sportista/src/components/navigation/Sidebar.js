import React from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {Link} from "react-router-dom";

function Sidebar() {
        const admin = false;
        const renter = false;
        const user = false;
    return (
        <>
            <Offcanvas show={true} backdrop="static">
                <Offcanvas.Header>
                    <Offcanvas.Title><img className="sidebarLogo" src="/sportista_logo.png" alt=""/></Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {admin &&
                        <div>
                        <Link to={"/test"}>TEST</Link>
                        <Link to={"/test"}>TEST2</Link>
                        <Link to={"/test"}>TEST3</Link>
                        </div>
                    }
                    {renter &&
                        <div>
                            <Link to={"/test"}>TEST</Link>
                            <Link to={"/test"}>TEST2</Link>
                            <Link to={"/test"}>TEST3</Link>
                        </div>
                    }
                    {user &&
                        <div>
                            <Link to={"/test"}>TEST</Link>
                            <Link to={"/test"}>TEST2</Link>
                            <Link to={"/test"}>TEST3</Link>
                        </div>
                    }
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default Sidebar;