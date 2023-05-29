import React from 'react';
import "./User.css";

//components
import UserSidebar from "../../components/navigation/UserSidebar";
import FieldCard from "../../components/user/FieldCard";
import {connect} from "react-redux";
import {Navigate} from "react-router-dom";

function Dashboard({ user, isAuthenticated }) {

    // if(!isAuthenticated && user == null)
    //     return (<Navigate to={"/"}/>)

    return (
        <div style={{ display: 'flex' }}>
                <UserSidebar />
            <div className="user-page">
                <h1>Dashboard</h1>
                <h5>List of available fields for booking.</h5>
                <div className="fieldCards">
                    <FieldCard />
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = state => ({isAuthenticated: state.auth.isAuthenticated, user : state.auth.user});


export default connect(mapStateToProps,null)(Dashboard);
