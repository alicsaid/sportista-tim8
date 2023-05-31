import React from "react";
import "./Contact.css";

function ContactForm() {
    return (
        <form className="contact-form">
            <div className="mb-3">
                <input type="text" className="custom-input" id="first_name" name="first_name" placeholder="First name" required />
                <input type="email" className="custom-input" id="last_name" name="last_name" placeholder="Last name" required />
            </div>
            <div className="mb-3">
                <select className="custom-input contact-input" id="subject" name="subject" required>
                    <option value="">Select a subject</option>
                    <option value="Inquiry">Inquiry</option>
                    <option value="Feedback">Feedback</option>
                    <option value="Support">Support</option>
                </select>
            </div>
            <div className="mb-3">
                <textarea className="custom-input contact-input" placeholder="Message" id="message" name="message" rows={5} style={{ resize: "none" }} required></textarea>
            </div>
            <button className="custom-register-button" type="submit">SEND</button>
        </form>
    );
}

export default ContactForm;
