import React from 'react';

//components
import Navbar from "../components/navigation/Navbar";
import LoginForm from "../components/login/LoginForm";

function Login() {
    return (
        <div className={"fixed-top all body"}>
            <Navbar />
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '2rem'
        }}>
            <LoginForm/>
        </div>
        </div>
    );
}

export default Login;