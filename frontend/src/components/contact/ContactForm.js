import React from "react";
import "./Contact.css";
import Button from "@material-ui/core/Button";

function ContactForm() {
    return (
        <form className="contact-form mt-5">
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
            <Button variant="outlined" className="mt-3" type="submit">SEND</Button>
        </form>
    );
}

export default ContactForm;
