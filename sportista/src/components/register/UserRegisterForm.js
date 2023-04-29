import React, { useState } from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./RegisterForm.css";

function UserRegisterForm() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [gender, setGender] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userSports, setSports] = useState([])

    const handleFirstNameChange = (event) => {
        const inputText = event.target.value;
        setFirstName(inputText.charAt(0).toUpperCase() + inputText.slice(1));
    };

    const handleLastNameChange = (event) => {
        const inputText = event.target.value;
        setLastName(inputText.charAt(0).toUpperCase() + inputText.slice(1));
    };

    const handleGenderChange = (event) => {
        setGender(event.target.value);
    }

    const handleDateOfBirthChange = (event) => {
        setDateOfBirth(event.target.value);
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleUserSportChange = (event) => {
        const sport = event.target.value;

        if (userSports.includes(sport)) {
            setSports(userSports.filter(item => item !== sport));
        } else {
            setSports([...userSports, sport]);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // handle form submission
    };

    return (
        <Form>
            <Form.Group className="mb-3" controlId="registerFirstName">
                <Form.Label>First name</Form.Label>
                <Form.Control
                    className="input"
                    type="text"
                    placeholder="First name"
                    value={firstName}
                    onChange={handleFirstNameChange}
                    required={true}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="registerLastName">
                <Form.Label>Last name</Form.Label>
                <Form.Control
                    className="input"
                    type="text"
                    placeholder="Last name"
                    value={lastName}
                    onChange={handleLastNameChange}
                    required={true}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="registerGender">
                <Form.Label className="gender">Gender</Form.Label>
                <Form.Select value={gender} onChange={handleGenderChange}>
                    <option>Male</option>
                    <option>Female</option>
                </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="registerDateOfBirth">
                <Form.Label className="date">Date of birth</Form.Label>
                <Form.Control
                    className="input"
                    type="date"
                    value={dateOfBirth}
                    onChange={handleDateOfBirthChange}
                    required={true}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="registerEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    className="input"
                    type="email"
                    placeholder="E-mail"
                    value={email}
                    onChange={handleEmailChange}
                    required={true}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="registerPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    className="input"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={handlePasswordChange}
                    required={true}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="registerSport">
                <Form.Label className="sport">Sports</Form.Label>
                <Form.Check
                    type="checkbox"
                    label="Football"
                    id="football"
                    value="Football"
                    checked={userSports.includes("Football")}
                    onChange={handleUserSportChange}
                />
                <Form.Check
                    type="checkbox"
                    label="Basketball"
                    id="basketball"
                    value="Basketball"
                    checked={userSports.includes("Basketball")}
                    onChange={handleUserSportChange}
                />
                <Form.Check
                    type="checkbox"
                    label="Volleyball"
                    id="volleyball"
                    value="Volleyball"
                    checked={userSports.includes("Volleyball")}
                    onChange={handleUserSportChange}
                />
                <Form.Check
                    type="checkbox"
                    label="Handball"
                    id="handball"
                    value="Handball"
                    checked={userSports.includes("Handball")}
                    onChange={handleUserSportChange}
                />
                <Form.Check
                    type="checkbox"
                    label="Tennis"
                    id="tennis"
                    value="Tennis"
                    checked={userSports.includes("Tennis")}
                    onChange={handleUserSportChange}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="registerTerms">
                <Form.Label>
                    <Form.Check inline required={true}></Form.Check>
                    I agree to the terms and conditions and privacy policy
                </Form.Label>
            </Form.Group>

            <Form.Group as={Form.Row}>
                <Button variant="primary" type="submit">
                    Register
                </Button>
            </Form.Group>

        </Form>
    );
}

export default UserRegisterForm;