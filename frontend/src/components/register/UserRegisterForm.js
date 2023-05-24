import React, { useState, useEffect } from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./RegisterForm.css";
import {register} from "../../auth/Auth";
import {connect} from "react-redux";
import axios from "axios";
import {SERVER_URL} from "../../auth/Consts";

function UserRegisterForm({register}) {
    const [currentStep, setCurrentStep] = useState(1);
    const [userFirstName, setUserFirstName] = useState('');
    const [userLastName, setUserLastName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [userGender, setUserGender] = useState('Male');
    const [userDateOfBirth, setUserDateOfBirth] = useState('');
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [termsAccepted, setTermsAccepted] = useState(false);
    const [emailError, setEmailError] = useState('');
    const [userAvailability, setUserAvailability] = useState({});
    const [playsSports, setplaysSports] = useState([]);
    const [gotData, setGotData] = useState(false);
    const [chosenSports, setChosenSprots] = useState([]);
    if(!gotData)
        axios.get( `${SERVER_URL}/daj_sportove`).then((res) => {
            setplaysSports(res.data)
            setGotData(true)
        })

    const handleUserFirstNameChange = (event) => {
        const inputText = event.target.value;
        setUserFirstName(inputText.charAt(0).toUpperCase() + inputText.slice(1));
    };

    const handleUserLastNameChange = (event) => {
        const inputText = event.target.value;
        setUserLastName(inputText.charAt(0).toUpperCase() + inputText.slice(1));
    };

    const handleUserEmailChange = (event) => {
        setUserEmail(event.target.value);
    };

    const handleUserPasswordChange = (event) => {
        setUserPassword(event.target.value);
    };

    const handleUserGenderChange = (event) => {
        setUserGender(event.target.value);
    }

    const handleUserDateOfBirthChange = (event) => {
        setUserDateOfBirth(event.target.value);
    }

    const handleNextStep = () => {
        if (currentStep === 1 && !userFirstName) {
            alert('Please enter your first name.');
        } else if (currentStep === 1 && !userLastName) {
            alert('Please enter your last name.');
        } else if (currentStep === 1 && !userEmail) {
            alert('Please enter your email address.')
        } else if (currentStep === 1 && !userPassword) {
            alert('Please enter your password.');
        } else if (currentStep === 1 && (!/\d/.test(userPassword) || userPassword.length < 8)) {
            alert('Please enter a password with at least 8 characters and containing numbers.')
        } else if (currentStep === 2 && !userGender) {
            alert('Please enter your gender.');
        } else if (currentStep === 2 && !userDateOfBirth) {
            alert('Please enter your date of birth.')
        } else if (currentStep === 3 && chosenSports.length === 0) {
            alert('Please select at least one sport');
        } else if (currentStep === 4 && Object.keys(userAvailability).length === 0) {
            alert('Please select at least one range of hours.');
        } else {
            setCurrentStep(currentStep+1);
        }
    };

    const handlePrevStep = () => {
        setCurrentStep(currentStep - 1);
    };


    const handleTermsAcceptance = (event) => {
        setTermsAccepted(event.target.checked);
    };

    useEffect(() => {
        if (userEmail && !isValidEmail(userEmail)) {
            setEmailError('Please enter a valid email address.');
        } else {
            setEmailError('');
        }
    }, [userEmail]);

    const isValidEmail = (email) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        return emailPattern.test(email);
    };

    const handleUserAvailabilityChange = (day, startHour, endHour) => {
        const updatedAvailability = { ...userAvailability };

        if (!updatedAvailability[day]) {
            updatedAvailability[day] = {};
        }

        updatedAvailability[day] = {
            startHour,
            endHour
        };

        setUserAvailability(updatedAvailability);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Perform form submission logic here
        if (!termsAccepted) {
            alert('Please agree to the terms and conditions and privacy policy if you want to proceed.');
            return;
        }
        const DATA = {
            first_name: userFirstName,
            last_name: userLastName,
            gender: userGender,
            date_of_birth: userDateOfBirth,
            sports: chosenSports,
            user_availability: userAvailability
        }
        register(userEmail, userPassword, true, false, DATA).then(() => {

        })
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

    const handleLoginButtonClick = () => {
        window.location.href = '/login';
    };

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
                            <div className="step"></div>
                        </div>
                        <Form.Group className="mb-3">
                            <Form.Label>First name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="First name"
                                value={userFirstName}
                                onChange={handleUserFirstNameChange}
                                required={true}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Last name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Last name"
                                value={userLastName}
                                onChange={handleUserLastNameChange}
                                required={true}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="E-mail"
                                value={userEmail}
                                onChange={handleUserEmailChange}
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
                                value={userPassword}
                                onChange={handleUserPasswordChange}
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
                            <div className="step"></div>
                        </div>
                        <Form.Group className="mb-3">
                            <Form.Label className="gender">Gender</Form.Label>
                            <Form.Select value={userGender} onChange={handleUserGenderChange} required>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label className="date">Date of birth</Form.Label>
                            <Form.Control
                                className="input"
                                type="date"
                                value={userDateOfBirth}
                                onChange={handleUserDateOfBirthChange}
                                required={true}
                            />
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
                            <div className="step"></div>
                        </div>
                        <Form.Group className="mb-3">
                            <Form.Label>Which sports are you interested in?</Form.Label>
                            {gotData &&
                                playsSports.map((sport) => (
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
                const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
                return (
                    <>
                        <div className="steps">
                            <div className="step"></div>
                            <div className="step"></div>
                            <div className="step"></div>
                            <div className="step active"></div>
                            <div className="step"></div>
                        </div>
                        <Form.Label>When are you available?</Form.Label>
                        <div style={{marginTop: '25px', marginBottom: '10px'}}>
                            <Form.Label style={{marginLeft: '100px'}}>Start Hour</Form.Label>
                            <Form.Label style={{marginLeft: '70px'}}>End Hour</Form.Label>
                        </div>

                        {daysOfWeek.map((day) => (
                            <div key={day} className="d-flex align-items-center">
                                <div className="col-2">
                                    <Form.Label>{day}</Form.Label>
                                </div>
                                <div className="col">
                                    <Form.Group className="mb-3">

                                        <Form.Control
                                            type="time"
                                            style={{width: '100px', height: '30px', marginLeft: '35px', marginTop: '4px'}}
                                            onChange={(e) =>
                                                handleUserAvailabilityChange(
                                                    day,
                                                    e.target.value,
                                                    userAvailability[day]?.endHour
                                                )
                                            }
                                        />
                                    </Form.Group>
                                </div>
                                <div className="col">
                                    <Form.Group className="mb-3">

                                        <Form.Control
                                            type="time"
                                            style={{width: '100px', height: '30px', marginTop: '4px'}}
                                            onChange={(e) =>
                                                handleUserAvailabilityChange(
                                                    day,
                                                    userAvailability[day]?.startHour,
                                                    e.target.value
                                                )
                                            }
                                        />
                                    </Form.Group>
                                </div>
                            </div>
                        ))}

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
            case 5:
                if (formSubmitted) {
                    return (
                        <>
                            <Form.Group className="mb-3">
                                <h3 style={{marginBottom: '55px'}}>Welcome to Sportista Field Rental!</h3>
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

export default connect(null, {register})(UserRegisterForm);