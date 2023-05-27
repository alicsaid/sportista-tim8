import React from 'react';

//components
import Navbar from "../components/navigation/Navbar";
import RegisterForm from "../components/register/RegisterForm";
import Footer from "../components/navigation/Footer";

function Register() {
    return (
        <div>
            <Navbar />
            <div className="d-flex justify-content-center">
                <RegisterForm/>
            </div>
            <Footer />
        </div>
    );
}

export default Register;