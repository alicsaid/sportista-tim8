import React, { useState } from 'react';
import {connect} from "react-redux";
import {reset_password_confirm} from "./Auth";
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import {Navigate} from "react-router-dom";
import {useParams} from "react-router-dom";


function ResetPasswordConfirm({match, reset_password_confirm}) {
    const [password, setPassword] = useState('');
    const [requestSent, setRequestSent] = useState(false);
    const {uid,token} = useParams()
    const handlePasswordChange = (event)=>{
        setPassword(event.target.value);
    }

    const resetPasswordConfirm = () => {
        reset_password_confirm(uid,token,password)
        setRequestSent(true)
    }

    if(requestSent)
        return (
            <Navigate to={"/login"}/>
        )

    return (
        <div className="container">
            <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={handlePasswordChange}
                    required={true}
                />
            </Form.Group>
            <Button variant="primary" onClick={resetPasswordConfirm} className="nextButton">
                Next
            </Button>
        </div>

    );
}

export default connect(null, {reset_password_confirm})(ResetPasswordConfirm);
