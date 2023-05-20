import React, { useState } from 'react';
import {connect} from "react-redux";
import {reset_password} from "./Auth";
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import {Navigate} from "react-router-dom";


function ResetPassword({reset_password}) {
    const [email, setEmail] = useState('');
    const [requestSent, setRequestSent] = useState(false);
    const handleEmailChange = (event)=>{
        setEmail(event.target.value);
    }

    const resetPassword = () => {
        reset_password(email)
        setRequestSent(true)
    }

    if(requestSent)
        return (
            <Navigate to="/"/>
        )

    return (
        <div className={"container"}>
            <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={handleEmailChange}
                    required={true}
                />
            </Form.Group>
            <Button variant="primary" onClick={resetPassword} className="nextButton">
                Next
            </Button>
        </div>

    );
}

export default connect(null, {reset_password})(ResetPassword);
