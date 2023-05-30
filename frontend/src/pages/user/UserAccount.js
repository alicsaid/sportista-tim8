import React from 'react';

//components
import UserSidebar from "../../components/navigation/UserSidebar";
import UserAccountOverview from "../../components/user/UserAccountOverview";
import {connect} from "react-redux";
import {Navigate} from "react-router-dom";

function UserAccount({ user, isAuthenticated }) {

    // if(!isAuthenticated && user == null)
    //     return (<Navigate to={"/"}/>)

    return (
        <div style={{ display: 'flex' }}>
            <UserSidebar />
            <div className="user-page">
                <h1>Account</h1>
                <h5>Edit you account information here.</h5>
		        <UserAccountOverview/>
            </div>
        </div>
    );
}

const mapStateToProps = state => ({isAuthenticated: state.auth.isAuthenticated, user : state.auth.user});


export default connect(mapStateToProps,null)(UserAccount);