import React from 'react';

//components
import UserSidebar from "../../components/navigation/UserSidebar";
import ContactForm from "../../components/contact/ContactForm";
import {connect} from "react-redux";
import {Navigate} from "react-router-dom";

function Contact({ user, isAuthenticated }) {

    // if(!isAuthenticated && user == null)
    //     return (<Navigate to={"/"}/>)

    return (
        <div className="background-grayish" style={{ display: 'flex' }}>
            <UserSidebar />
            <div className="page-margin">
                <h1>Contact</h1>
                <h5>Contact support team for any questions.</h5>
                <ContactForm />
            </div>
        </div>
    );
}

const mapStateToProps = state => ({isAuthenticated: state.auth.isAuthenticated, user : state.auth.user});


export default connect(mapStateToProps,null)(Contact);