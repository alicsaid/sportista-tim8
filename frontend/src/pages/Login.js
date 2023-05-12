import React from 'react';

//components
import Navbar from "../components/navigation/Navbar";
import LoginForm from "../components/login/LoginForm";

function Login() {
    return (
        <div>
            <Navbar />
            <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <h1>Login</h1>
                <LoginForm/>
            </div>
        </div>
    );
}

export default Login;