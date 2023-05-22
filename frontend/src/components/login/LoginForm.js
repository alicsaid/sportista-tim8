import React, { useState } from 'react';
import "./LoginForm.css";
import {connect} from "react-redux";
import {login} from "../../auth/Auth";


function LoginForm({login}) {
    const [isRightPanelActive, setRightPanelActive] = useState(false);
    const [renterEmail, setRenterEmail] = useState('');
    const [renterPassword, setRenterPassword] = useState('');

    const handleUserButtonClick = () => {
        setRightPanelActive(true);
    };

    const handleRenterButtonClick = () => {
        setRightPanelActive(false);
    };

    const handleRenterEmail = (event)=>{
        setRenterEmail(event.target.value);
    }

    const handleRenterPassword = (event)=>{
        setRenterPassword(event.target.value);
    }

    const loginRenter = () => {
        login(renterEmail, renterPassword)
    }

    const loginUser = () => {

    }

    return (
        <div className={isRightPanelActive ? 'dowebok right-panel-active' : 'dowebok'} id="dowebok">
            <div className="form-container sign-up-container">
                <form action="#">
                    <h1 className={"loginh1"}>Hi user.</h1>
                    <input type="email" placeholder="Email address"/>
                        <input type="password" placeholder="Password"/>
                            <button className={"loginbutton"} onClick={loginUser}>Login</button>
                </form>
            </div>
            <div className="form-container sign-in-container">
                <form action="#">
                    <h1 className={"loginh1"}>Hi renter.</h1>
                    <input type="email" placeholder="Email address" onChange={handleRenterEmail}/>
                        <input type="password" placeholder="Password" onChange={handleRenterPassword}/>
                            <button className={"loginbutton"} onClick={loginRenter}>Login</button>
                </form>
            </div>
            <div className="overlay-container">
                <div className="overlay">
                    <div className="overlay-panel overlay-left">
                        <h1 className={"loginh1"}>Are you a renter?</h1>
                        <p className={"loginp"}>Click here to login as renter.</p>
                        <button id="signUser" className={"loginbutton ghost"} onClick={handleRenterButtonClick}>Login</button>
                    </div>
                    <div className="overlay-panel overlay-right">
                        <h1 className={"loginh"}>Are you a user?</h1>
                        <p className={"loginp"}>Click here to login as user.</p>
                        <button id="signRenter" className={"loginbutton ghost"} onClick={handleUserButtonClick}>Login</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default connect(null, {login})(LoginForm);
