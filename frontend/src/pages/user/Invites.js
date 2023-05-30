import React from 'react';

//components
import UserSidebar from "../../components/navigation/UserSidebar";
import {connect} from "react-redux";
import {Navigate} from "react-router-dom";

function Invites({ user, isAuthenticated }) {

    // if(!isAuthenticated && user == null)
    //     return (<Navigate to={"/"}/>)

    return (
        <div style={{ display: 'flex' }}>
            <UserSidebar />
            <div className="user-page">
                <h1>Invites</h1>
                <h5>List of invites from other users.</h5>
            </div>
        </div>
    );
}

const mapStateToProps = state => ({isAuthenticated: state.auth.isAuthenticated, user : state.auth.user});


export default connect(mapStateToProps,null)(Invites);