import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import UserRegisterForm from './UserRegisterForm';
import RenterRegisterForm from './RenterRegisterForm';
import Button from 'react-bootstrap/Button';

function RegisterForm() {
    const [registrationType, setRegistrationType] = useState('');
    const [currentStep, setCurrentStep] = useState(1);

    const handleRegistrationTypeChange = (event) => {
        setRegistrationType(event.target.value);
    };

    const handleNextStep = () => {
        if (registrationType === '') {
            alert('Please select a registration type.');
            return;
        }
        setCurrentStep(currentStep + 1);
    };

    const renderCurrentStepForm = () => {
        if (currentStep === 1) {
            return (
                <Form.Group className="mb-3">
                    <Form.Label>
                        <h4>Do you want to register as a renter or as a user?</h4>
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
                    <Button variant="primary" onClick={handleNextStep} style={{float: 'right'}}>
                        Next
                    </Button>
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
        <Form className="registerForm" style={{width: 'auto'}} >
            {renderCurrentStepForm()}
        </Form>
    );
}

export default RegisterForm;
