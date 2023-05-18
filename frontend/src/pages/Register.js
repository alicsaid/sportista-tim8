import React from 'react';

//components
import Navbar from "../components/navigation/Navbar";
import RegisterForm from "../components/register/RegisterForm";
import axios from "axios";

function Users() {
    axios.post("http://127.0.0.1:8000/auth/users/", {
        "email":"emin.mulaimovic2305@gmail.com",
        "password":"matematika12"
    })
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