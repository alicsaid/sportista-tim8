import React from 'react';

//components
import UserSidebar from "../../components/navigation/UserSidebar";
import AccountForUser from "../../components/user/AccountForUser";
import {connect} from "react-redux";
import {Navigate} from "react-router-dom";

function UserAccount({user, isAuthenticated}) {
    console.log("HERE")
    console.log(user)
    if(!isAuthenticated && user == null)
        return (<Navigate to={"/"}/>)
    return (
        <div style={{ display: 'flex' }}>
            <UserSidebar />
            <div style={{ marginLeft: '10px'}}>
                <h1>Account</h1>
		        <AccountForUser/>
            </div>
        </div>
    );
}

const mapStateToProps = state => ({isAuthenticated: state.auth.isAuthenticated, user : state.auth.user});


export default connect(mapStateToProps,null)(UserAccount);