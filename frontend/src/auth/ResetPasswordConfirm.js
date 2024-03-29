import React, { useState } from 'react';
import {connect} from "react-redux";
import {reset_password_confirm} from "./Auth";
import Button from '@material-ui/core/Button';
import {Navigate} from "react-router-dom";
import {useParams} from "react-router-dom";
import TopNavbar from "../components/navigation/Navbar";
import Footer from "../components/navigation/Footer";
import TextField from '@material-ui/core/TextField';


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
        <div>
            <TopNavbar />
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
                <TextField
                    className="mt-5 mb-3 w-25"
                    type="password"
                    label="Password"
                    value={password}
                    onChange={handlePasswordChange}
                    required
                    variant="outlined"
                />
                <Button variant="outlined" onClick={resetPasswordConfirm} className="nextButton">
                Next
            </Button>
            </div>
            <Footer />
        </div>
    );
}

export default connect(null, {reset_password_confirm})(ResetPasswordConfirm);
