import React, { useState } from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./RegisterForm.css";

function RenterRegisterForm() {
    const [sportsCenterName, setSportsCenterName] = useState("");
    const [sportsCenterAddress, setSportsCenterAddress] = useState("");
    const [sportsCenterEmail, setSportsCenterEmail] = useState("");
    const [sportsCenterPassword, setPassword] = useState("");
    const [sports, setSports] = useState([]);

    const handleSportsCenterNameChange = (event) => {
        const inputText = event.target.value;
        setSportsCenterName(inputText.charAt(0).toUpperCase() + inputText.slice(1));
    };

    const handleSportsCenterAddressChange = (event) => {
        const inputText = event.target.value;
        setSportsCenterAddress(inputText.charAt(0).toUpperCase() + inputText.slice(1));
    };

    const handleSportsCenterEmailChange = (event) => {
        setSportsCenterEmail(event.target.value);
    };

    const handleSportsCenterPasswordChange = (event) => {
        setPassword(event.target.value);
    };

    //Provjerava je li sport koji je označen već uključen u niz sports. Ako jest, uklanja ga iz niza, a ako nije, dodaje ga u niz.
    const handleSportChange = (event) => {
        const sport = event.target.value;

        if (sports.includes(sport)) {
            setSports(sports.filter(item => item !== sport));
        } else {
            setSports([...sports, sport]);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // handle form submission
    };

    return (
        <Form style={{width: '100%'}}>
            <Form.Group className="mb-3" controlId="registerSportsCenterName">
                <Form.Label>Name of sports center</Form.Label>
                <Form.Control
                    className="input"
                    type="text"
                    placeholder="Name"
                    value={sportsCenterName}
                    onChange={handleSportsCenterNameChange}
                    required={true}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="registerSportsCenterAddress">
                <Form.Label>Address</Form.Label>
                <Form.Control
                    className="input"
                    type="text"
                    placeholder="Address"
                    value={sportsCenterAddress}
                    onChange={handleSportsCenterAddressChange}
                    required={true}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="registerSportsCenterEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    className="input"
                    type="email"
                    placeholder="E-mail"
                    value={sportsCenterEmail}
                    onChange={handleSportsCenterEmailChange}
                    required={true}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="registerSportsCenterPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    className="input"
                    type="password"
                    placeholder="Password"
                    value={sportsCenterPassword}
                    onChange={handleSportsCenterPasswordChange}
                    required={true}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="registerSportsCenterSports">
                <Form.Label className="sportsInSportsCenter">Available sports </Form.Label>
                <Form.Check
                    label="Football"
                    type="checkbox"
                    value="Football"
                    checked={sports.includes("Football")}
                    onChange={handleSportChange}
                />
                <Form.Check
                    label="Basketball"
                    type="checkbox"
                    value="Basketball"
                    checked={sports.includes("Basketball")}
                    onChange={handleSportChange}
                />
                <Form.Check
                    label="Volleyball"
                    type="checkbox"
                    value="Volleyball"
                    checked={sports.includes("Volleyball")}
                    onChange={handleSportChange}
                />
                <Form.Check
                    label="Handball"
                    type="checkbox"
                    value="Handball"
                    checked={sports.includes("Handball")}
                    onChange={handleSportChange}
                />
                <Form.Check
                    label="Tennis"
                    type="checkbox"
                    value="Tennis"
                    checked={sports.includes("Tennis")}
                    onChange={handleSportChange}
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

export default RenterRegisterForm;