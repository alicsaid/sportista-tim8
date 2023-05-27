import React from 'react';

//components
import RenterSidebar from "../../components/navigation/RenterSidebar";
import ContactForm from "../../components/contact/ContactForm";
import {connect} from "react-redux";
import {Navigate} from "react-router-dom";

function Contact({ isAuthenticated,user }) {

    // if(!isAuthenticated && user == null)
    //     return (<Navigate to={"/"}/>)

    return (
        <div style={{ display: 'flex' }}>
            <RenterSidebar />
            <div className="renter-page">
                <h1>Contact</h1>
                <h5>Contact support team for any questions.</h5>
                <ContactForm />
            </div>
        </div>
    );
}

const mapStateToProps = state => ({isAuthenticated: state.auth.isAuthenticated, user : state.auth.user});

export default connect(mapStateToProps,null)(Contact);