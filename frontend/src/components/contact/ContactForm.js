import React from "react";
import { Form, Button } from "react-bootstrap";
import "./Contact.css";

function ContactForm() {
    return (
        <form className="contact-form">
            <div className="mb-3">
                <input type="email" className="custom-input" id="email" name="email" placeholder="Enter email" required />
            </div>
            <div className="mb-3">
                <select className="custom-input" id="subject" name="subject" required>
                    <option value="">Select a subject</option>
                    <option value="Inquiry">Inquiry</option>
                    <option value="Feedback">Feedback</option>
                    <option value="Support">Support</option>
                </select>
            </div>
            <div className="mb-3">
                <textarea className="custom-input" placeholder="Message" id="message" name="message" rows={5} style={{ resize: "none" }} required></textarea>
            </div>
            <button className="custom-register-button" type="submit">Send</button>
        </form>
    );
}

export default ContactForm;
