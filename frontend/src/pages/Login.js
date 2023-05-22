import React from 'react';

//components
import Navbar from "../components/navigation/Navbar";
import LoginForm from "../components/login/LoginForm";
import {connect} from "react-redux";
import {Navigate} from "react-router-dom";

function Login({isAuthenticated}) {
    if(isAuthenticated)
        return (
            <Navigate to="/user"/>
        )

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

const mapStateToProps = state => ({isAuthenticated: state.auth.isAuthenticated});


export default connect(mapStateToProps,null)(Login);