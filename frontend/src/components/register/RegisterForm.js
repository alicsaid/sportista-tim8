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
                <Form.Group className="mb-3">
                    <Form.Label>
                        <h4 style={{marginTop: '20px', marginBottom: '80px', textAlign: 'center'}}>Do you want to register as a renter or as a user?</h4>
                    </Form.Label>
                    <div className="radio-group">
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
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Form className="registerForm" style={{ width: '600px' }}>
                {renderCurrentStepForm()}
            </Form>
        </div>
    );
}

export default RegisterForm;
