import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import "./RegisterForm.css";
import UserRegisterForm from "./UserRegisterForm";
import RenterRegisterForm from "./RenterRegisterForm";

function RegisterForm() {
    const [registrationType, setRegistrationType] = useState("");

    const handleRegistrationTypeChange = (event) => {
        setRegistrationType(event.target.value);
    };

    return (
        <div className="register-form">
            <div className="radio-group">
                <Form.Check
                    type="radio"
                    label="Renter"
                    name="registrationType"
                    value="renter"
                    checked={registrationType === "renter"}
                    onChange={handleRegistrationTypeChange}
                />
                <Form.Check
                    type="radio"
                    label="User"
                    name="registrationType"
                    value="user"
                    checked={registrationType === "user"}
                    onChange={handleRegistrationTypeChange}
                />
            </div>

            {registrationType === "user" && <UserRegisterForm />}
            {registrationType === "renter" && <RenterRegisterForm />}
        </div>
    );
}

export default RegisterForm;