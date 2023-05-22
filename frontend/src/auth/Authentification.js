import React from 'react';

//components
import {connect} from "react-redux";
import {checkAuthenticated, load_user} from "./Auth";
import {useEffect} from "react";

const Authentification = ({checkAuthenticated, load_user, children}) => {
    useEffect(()=>{
        checkAuthenticated();
        load_user();
    })
    return (
        <div>
            {children}
        </div>
    );
}

export default connect(null,  {checkAuthenticated, load_user})(Authentification)