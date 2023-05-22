import React from 'react';

//components
import Navbar from "../components/navigation/Navbar";
import RegisterForm from "../components/register/RegisterForm";
import axios from "axios";

function Users() {
    return (
        <div>
            <Navbar />
            <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <h1>Register</h1>
                <RegisterForm/>
            </div>
        </div>
    );
}

export default Users;