import React, {useState} from "react";
import "./Contact.css";
import Button from "@material-ui/core/Button";
import axios from "axios";
import {SERVER_URL} from "../../auth/Consts";

function ContactForm() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    function sendMessage(){
        axios.post(`${SERVER_URL}/inbox/message/`, {
            firstName,
            lastName,
            subject,
            message
        })

        alert("Message successfully sent to admin!")
    }

    return (
        <form className="contact-form mt-5">
            <div className="mb-3">
                <input type="text" className="custom-input" id="first_name" name="first_name" placeholder="First name" onChange={(e) => {setFirstName(e.target.value)}} required />
                <input type="text" className="custom-input" id="last_name" name="last_name" placeholder="Last name" onChange={(e) => {setLastName(e.target.value)}} required />
            </div>
            <div className="mb-3">
                <select className="custom-input contact-input" id="subject" name="subject" onChange={(e) => {setSubject(e.target.value)}} required>
                    <option value="">Select a subject</option>
                    <option value="Inquiry">Inquiry</option>
                    <option value="Feedback">Feedback</option>
                    <option value="Support">Support</option>
                </select>
            </div>
            <div className="mb-3">
                <textarea className="custom-input contact-input" placeholder="Message" id="message" name="message" rows={5} style={{ resize: "none" }} onChange={(e) => {setMessage(e.target.value)}} required></textarea>
            </div>
            <Button className=" custom-button mt-3" onClick={sendMessage} type={"submit"}>SEND</Button>
        </form>
    );
}

export default ContactForm;
