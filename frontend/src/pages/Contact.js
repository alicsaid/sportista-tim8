import React from 'react';

//components
import Sidebar from "../components/navigation/Sidebar";
import ContactForm from "../components/contact/ContactForm";

function Contact() {
    return (
        <div style={{ display: 'flex' }}>
            <Sidebar />
            <div style={{ marginLeft: '27rem', marginTop: '2rem' }}>
                <h1>Contact</h1>
                <ContactForm />
            </div>
        </div>
    );
}

export default Contact;