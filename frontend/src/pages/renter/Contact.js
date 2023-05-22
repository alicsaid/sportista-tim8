import React from 'react';

//components
import RenterSidebar from "../../components/navigation/RenterSidebar";
import ContactForm from "../../components/contact/ContactForm";

function Contact() {
    return (
        <div style={{ display: 'flex' }}>
            <RenterSidebar />
            <div style={{ marginLeft: '10px'}}>
                <h1>Contact</h1>
                <ContactForm />
            </div>
        </div>
    );
}

export default Contact;