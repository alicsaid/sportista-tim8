import React from 'react';

//components
import Navbar from "../components/navigation/Navbar";

function Users() {
    return (
        <div>
            <Navbar />
            <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <h1>Register</h1>
            </div>
        </div>
    );
}

export default Users;