import React from 'react';

//components
import UserSidebar from "../../components/navigation/UserSidebar";
import ContactForm from "../../components/contact/ContactForm";

function Contact() {
    return (
        <div style={{ display: 'flex' }}>
            <UserSidebar />
            <div style={{ marginLeft: '10px'}}>
                <h1>Contact</h1>
                <ContactForm />
            </div>
        </div>
    );
}

export default Contact;