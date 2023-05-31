import React from 'react';
import {connect} from "react-redux";
import {logout} from "./Auth";
import {Navigate} from "react-router-dom";

const Logout = ({logout}) =>{
    logout()

    return (
        <div>
            Loging out...
            <Navigate to="/"/>
        </div>
    )

}

export default connect(null,{ logout })(Logout);