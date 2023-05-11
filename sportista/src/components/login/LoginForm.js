import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./LoginForm.css";

function LoginForm() {
    const [userType, setUserType] = useState("renter");

    const handleUserTypeChange = (event) => {
        setUserType(event.target.value);
    };

    return (
        <Form className="login-form">
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <div className="radio-group">
                <Form.Check
                    type="radio"
                    label="Renter"
                    name="userType"
                    value="renter"
                    checked={userType === "renter"}
                    onChange={handleUserTypeChange}
                />
                <Form.Check
                    type="radio"
                    label="User"
                    name="userType"
                    value="user"
                    checked={userType === "user"}
                    onChange={handleUserTypeChange}
                />
            </div>

            <Form.Group as={Form.Row}>
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form.Group>

            <Form.Group as={Form.Row} className="register-link">
                <Form.Text>
                    Don't have an account? <a href="/register">Register here</a>
                </Form.Text>
            </Form.Group>
        </Form>
    );
}

export default LoginForm;
