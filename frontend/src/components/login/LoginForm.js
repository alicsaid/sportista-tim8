import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./LoginForm.css";

function LoginForm() {
    const [isRightPanelActive, setRightPanelActive] = useState(false);

    const handleUserButtonClick = () => {
        setRightPanelActive(true);
    };

    const handleRenterButtonClick = () => {
        setRightPanelActive(false);
    };

    return (
        <div className={isRightPanelActive ? 'dowebok right-panel-active' : 'dowebok'} id="dowebok">
            <div className="form-container sign-up-container">
                <form action="#">
                    <h1>Hi user.</h1>
                    <input type="email" placeholder="Email address"/>
                        <input type="password" placeholder="Password"/>
                            <button>Login</button>
                </form>
            </div>
            <div className="form-container sign-in-container">
                <form action="#">
                    <h1>Hi renter.</h1>
                    <input type="email" placeholder="Email address"/>
                        <input type="password" placeholder="Password"/>
                            <button>Login</button>
                </form>
            </div>
            <div className="overlay-container">
                <div className="overlay">
                    <div className="overlay-panel overlay-left">
                        <h1>Are you a renter?</h1>
                        <p>Click here to login as renter.</p>
                        <button id="signUser" className={"ghost"} onClick={handleRenterButtonClick}>Login</button>
                    </div>
                    <div className="overlay-panel overlay-right">
                        <h1>Are you a user?</h1>
                        <p>Click here to login as user.</p>
                        <button id="signRenter" className={"ghost"} onClick={handleUserButtonClick}>Login</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;
