import React from 'react';
import {Navigate, useParams} from "react-router-dom";
import {connect} from "react-redux";
import {verify} from "./Auth";

const Activate = ({verify}) =>{
    const {uid,token} = useParams()
    verify(uid, token)
    return (
        <div>
            Veryfying...
            <Navigate to="/login"/>
        </div>
    )

}

export default connect(null, {verify})(Activate)