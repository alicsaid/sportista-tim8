import React, { useState, useEffect  } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "./RegisterForm.css";
import {verify, register} from "../../auth/Auth";
import {connect} from "react-redux";
import axios from "axios";
import {SERVER_URL} from "../../auth/Consts";

function HasSportFrom(setSport, sport_id, sport_name){
    return (
        <Form.Check
            label={sport_name}
            type="checkbox"
            onChange={(e) => setSport(sport_id, e)}
        />
    )
}

function RenterRegisterForm({register, verify}) {
    const [currentStep, setCurrentStep] = useState(1);
    const [renterName, setRenterName] = useState('');
    const [renterEmail, setRenterEmail] = useState('');
    const [renterPassword, setRenterPassword] = useState('');
    const [renterCity, setRenterCity] = useState('');
    const [renterPhone, setRenterPhone] = useState('');
    const [hasSports, setHasSports] = useState([]);
    const [gotData, setGotData] = useState(false);
    const [chosenSports, setChosenSprots] = useState([]);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [termsAccepted, setTermsAccepted] = useState(false);
    const [phoneError, setPhoneError] = useState('');
    const [emailError, setEmailError] = useState('');

    if(!gotData)
        axios.get( `${SERVER_URL}/daj_sportove`).then((res) => {
            setHasSports(res.data)
            setGotData(true)
        })


    //sport.pk, sport.fields.name


    const handleNextStep = () => {
        if (currentStep === 1 && !renterName) {
            alert('Please enter your name.');
        } else if (currentStep === 1 && !renterEmail) {
            alert('Please enter your email address.');
        } else if (currentStep === 1 && !renterPassword) {
            alert('Please enter your password.');
        } else if (currentStep === 2 && !renterCity) {
            alert('Please enter your city.');
        } else if (currentStep === 2 && !renterPhone) {
            alert('Please enter your phone number.')
        } else if (currentStep === 3 && chosenSports.length === 0) {
            alert('Please select at least one sport');
        } else {
            setCurrentStep(currentStep+1);
        }
    };

    const handlePrevStep = () => {
        setCurrentStep(currentStep - 1);
    };

    const handleRenterNameChange = (event) => {
        const inputText = event.target.value;
        setRenterName(inputText.charAt(0).toUpperCase() + inputText.slice(1));
    };

    const handleRenterEmailChange = (event) => {
        setRenterEmail(event.target.value);
    };

    const handleRenterPasswordChange = (event) => {
        setRenterPassword(event.target.value);
    };

    const handleRenterCityChange = (event) => {
        const inputText = event.target.value;
        setRenterCity(inputText.charAt(0).toUpperCase() + inputText.slice(1));
    }

    const handleRenterPhoneChange = (event) => {
        setRenterPhone(event.target.value);
    }

    const handleTermsAcceptance = (event) => {
        setTermsAccepted(event.target.checked);
    };

    useEffect(() => {
        if (renterPhone && !isValidPhoneNumber(renterPhone)) {
            setPhoneError('Please enter a valid phone number.');
        } else {
            setPhoneError('');
        }
    }, [renterPhone]);

    const isValidPhoneNumber = (phoneNumber) => {
        const phonePattern = /^[0-9]{9}$/;

        return phonePattern.test(phoneNumber);
    };

    useEffect(() => {
        if (renterEmail && !isValidEmail(renterEmail)) {
            setEmailError('Please enter a valid email address.');
        } else {
            setEmailError('');
        }
    }, [renterEmail]);

    const isValidEmail = (email) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        return emailPattern.test(email);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Perform form submission logic here
        if (!termsAccepted) {
            alert('Please agree to the terms and conditions and privacy policy if you want to proceed.');
            return;
        }
        const DATA = {
            name: renterName,
            city: renterCity,
            phone: renterPhone,
            sports: chosenSports,
        }
        register(renterEmail, renterPassword, false, true, DATA)
        setFormSubmitted(true);
    };

    const handleLoginButtonClick = () => {
        window.location.href = '/login';
    };

    const handleSportChange = (event) => {
        if (event.target.checked)
            chosenSports.push(event.target.value)
        else{
            const index = chosenSports.indexOf(event.target.value);
            if (index > -1)
                chosenSports.splice(index, 1);

        }
    }

    const renderCurrentStepForm = () => {
        switch (currentStep) {
            case 1:
                return (
                    <>
                        <div className="steps">
                            <div className="step active"></div>
                            <div className="step"></div>
                            <div className="step"></div>
                            <div className="step"></div>
                        </div>

                        <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Name"
                                value={renterName}
                                onChange={handleRenterNameChange}
                                required={true}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="E-mail"
                                value={renterEmail}
                                onChange={handleRenterEmailChange}
                                required={true}
                            />
                            {emailError && <div className="error">{emailError}</div>}
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                className="input"
                                type="password"
                                placeholder="Password"
                                value={renterPassword}
                                onChange={handleRenterPasswordChange}
                                required={true}
                            />
                        </Form.Group>

                        <Button variant="primary" onClick={handleNextStep} className="nextButton">
                            Next
                        </Button>
                    </>
                );
            case 2:
                return (
                    <>
                        <div className="steps">
                            <div className="step"></div>
                            <div className="step active"></div>
                            <div className="step"></div>
                            <div className="step"></div>
                        </div>
                        <Form.Group className="mb-3">
                            <Form.Label>City</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="City"
                                value={renterCity}
                                onChange={handleRenterCityChange}
                                required={true}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Phone number</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Phone number"
                                value={renterPhone}
                                onChange={handleRenterPhoneChange}
                                required={true}
                            />
                            {phoneError && <div className="error">{phoneError}</div>}
                        </Form.Group>

                        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '30px'}}>
                            <Button variant="primary" onClick={handlePrevStep} className="previousButton">
                                Previous
                            </Button>
                            <Button variant="primary" onClick={handleNextStep} className="nextButton">
                                Next
                            </Button>
                        </div>
                    </>
                );
            case 3:
                return (
                    <>
                        <div className="steps">
                            <div className="step"></div>
                            <div className="step"></div>
                            <div className="step active"></div>
                            <div className="step"></div>
                        </div>
                        <Form.Group className="mb-3">
                            <Form.Label>Which sports do you offer fields for?</Form.Label>
                            {gotData &&
                            hasSports.map((sport) => (
                                <Form.Check
                                    key={sport.pk}
                                label={sport.fields.name}
                                type="checkbox"
                                    value = {sport.pk}
                                onChange={handleSportChange}
                                />)
                                )
                            }
                        </Form.Group>

                        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '30px' }}>
                            <Button variant="primary" onClick={handlePrevStep} className="previousButton">
                                Previous
                            </Button>
                            <Button variant="primary" onClick={handleNextStep} className="nextButton">
                                Next
                            </Button>
                        </div>
                    </>
                );
            case 4:
                if (formSubmitted) {
                    return (
                        <>
                            <Form.Group className="mb-3">
                                <h3 style={{marginBottom: '35px'}}>Welcome to Sportista Field Rental!</h3>
                                <h4 style={{marginBottom: '35px'}}>Thank you for registering.</h4>
                                <h4>You can now login to your account.</h4>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Button variant="primary" onClick={handleLoginButtonClick} className="login-button">
                                    Login
                                </Button>
                            </Form.Group>
                        </>
                    );
                } else {
                    return (
                        <>
                            <div className="steps">
                                <div className="step"></div>
                                <div className="step"></div>
                                <div className="step"></div>
                                <div className="step active"></div>
                            </div>
                            <Form.Group className="mb-3">
                                <Form.Label>
                                    <div className="terms-and-conditions">
    <pre>
      {`
Terms and Conditions

Welcome to Sportista Field Rental! 
By using our platform, you agree to comply with the following terms and 
conditions:

1. Use of the Platform
   - You are responsible for maintaining the confidentiality of your 
   account.
   - You agree not to use the platform for any illegal or unauthorized 
   purposes.

2. Field Rental
   - The platform facilitates the rental of sports fields.
   - The availability and booking process may vary and are subject to 
   specific terms outlined on the platform.
   - Any disputes or issues regarding field rental are the responsibility 
   of the field renter and user.

3. Liability
   - We are not responsible for any accidents, injuries, or damages that 
   may occur during field rental.
   - Users and renters are advised to establish their own agreements 
   regarding liability and responsibilities.

4. Privacy
   - We collect and store user data in accordance with our privacy policy.
   - We implement security measures to protect user information, but we 
   cannot guarantee complete security.

5. Disclaimer
   - The platform is provided "as is" and we do not make any warranties or 
   representations.
   - We are not responsible for the accuracy or availability of the 
   platform's content.

By using our platform, you agree to these terms and conditions. 
If you do not agree, please refrain from using the platform.
      `}
    </pre>
                                    </div>
                                </Form.Label>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>
                                    <Form.Check inline required={true} className="terms" onChange={handleTermsAcceptance}></Form.Check>
                                    I agree to the terms and conditions and privacy policy
                                </Form.Label>
                            </Form.Group>

                            <Form.Group as={Form.Row}>
                                <Button variant="primary" type="button" onClick={handleSubmit} style={{float: 'right'}}>
                                    Register
                                </Button>
                            </Form.Group>
                        </>
                    );
                }
            default:
                return null;
        }
    };

    return (
        <div className="container" style={{ alignItems: 'center', justifyContent: 'center' }} onSubmit={handleSubmit} >
            {renderCurrentStepForm()}
        </div>
    );
}

export default connect(null, {register, verify})(RenterRegisterForm);
