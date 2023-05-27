import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import UserRegisterForm from './UserRegisterForm';
import RenterRegisterForm from './RenterRegisterForm';
import "./RegisterForm.css";

function RegisterForm() {
    const [registrationType, setRegistrationType] = useState('');
    const [currentStep, setCurrentStep] = useState(1);

    const handleRegistrationTypeChange = (event) => {
        setRegistrationType(event.target.value);
        setCurrentStep(2);
    };

    const renderCurrentStepForm = () => {
        if (currentStep === 1) {
            return (
                <Form.Group>
                    <Form.Label className="d-flex justify-content-center mb-5">
                        <h4>Choose account type to register!</h4>
                    </Form.Label>
                    <div className="radio-group d-flex justify-content-evenly">
                        <Form.Check
                            className="registerType"
                            type="radio"
                            label="Renter"
                            name="registrationType"
                            value="renter"
                            checked={registrationType === 'renter'}
                            onChange={handleRegistrationTypeChange}
                        />
                        <Form.Check
                            className="registerType"
                            type="radio"
                            label="User"
                            name="registrationType"
                            value="user"
                            checked={registrationType === 'user'}
                            onChange={handleRegistrationTypeChange}
                        />
                    </div>
                </Form.Group>
            );
        } else if (currentStep === 2) {
            if (registrationType === 'user') {
                return <UserRegisterForm />;
            } else if (registrationType === 'renter') {
                return <RenterRegisterForm />;
            }
        }
        return null;
    };

    return (
        <div className="register-page">
            <Form className="registerForm" style={{ minWidth: "30rem" }}>
                {renderCurrentStepForm()}
            </Form>
        </div>
    );
}

export default RegisterForm;
