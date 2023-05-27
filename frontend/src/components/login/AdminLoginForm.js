import React, { useState } from 'react';
import "./LoginForm.css";

/* TODO:
   povezati da ide na /admin kad se loguje
*/

function AdminLoginForm() {
    return (
        <div className="admin-login-form">
            <form action="#">
                <h1 className="m-3">ADMIN LOGIN</h1>
                <input className="custom-input" type="email" id="email" placeholder="Email address" />

                <input className="custom-input" type="password" id="password" placeholder="Password" />

                <button className="custom-register-button" type="submit">Login</button>
            </form>
        </div>
    );
}

export default AdminLoginForm;
