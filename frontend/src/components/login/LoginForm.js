import React, { useState } from 'react';
import "./LoginForm.css";
import {connect} from "react-redux";
import {login} from "../../auth/Auth";


function LoginForm({login}) {
    const [isRightPanelActive, setRightPanelActive] = useState(false);
    const [renterEmail, setRenterEmail] = useState('');
    const [renterPassword, setRenterPassword] = useState('');
    const [userEmail, setuserEmail] = useState('');
    const [userPassword, setuserPassword] = useState('');
    const [error, setError] = useState(null);

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

    const handleUserEmail = (event) => {
        setuserEmail(event.target.value)
    }

    const handleUserPassword = (event) => {
        setuserPassword(event.target.value)
    }

    const handleError = (errorMesage) => {
        setError(errorMesage)
    }

    const loginRenter = (event) => {
        event.preventDefault()
        login(renterEmail, renterPassword, false, true, handleError).then( () =>{
            displayAlert()
        })
    }
    const loginUser = (event) => {
        event.preventDefault()
        login(userEmail, userPassword, true, false, handleError).then( () =>{
            displayAlert()
        })
    }

    const displayAlert = () => {
        if (error && Object.keys(error).length > 0) {
            if (error.email != null) {
                alert(error.email);
            } else if (error.password != null) {
                alert(error.password);
            } else if(error.detail != null){
                alert(error.detail);
            }else {
                alert("Error with login")
            }
        }
    };

    return (
        <div className={isRightPanelActive ? 'dowebok right-panel-active' : 'dowebok'} id="dowebok">
            <div className="form-container sign-up-container">
                <form action="#">
                    <h1 className={"loginh1"}>Hi user.</h1>
                    <input type="email" placeholder="Email address" onChange={handleUserEmail}/>
                        <input type="password" placeholder="Password" onChange={handleUserPassword}/>
                    <a href="http://localhost:3000/reset_password" style={{textDecoration:"none", paddingBottom: "5px"}}>Forgot password?</a>
                            <button className={"loginbutton"} onClick={loginUser}>Login</button>
                </form>
            </div>
            <div className="form-container sign-in-container">
                <form action="#">
                    <h1 className={"loginh1"}>Hi renter.</h1>
                    <input type="email" placeholder="Email address" onChange={handleRenterEmail}/>
                        <input type="password" placeholder="Password" onChange={handleRenterPassword}/>
                    <a href="http://localhost:3000/reset_password" style={{textDecoration:"none", paddingBottom: "5px"}}>Forgot password?</a>
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
