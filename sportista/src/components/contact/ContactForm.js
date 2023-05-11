import React from "react";
import { Form, Button } from "react-bootstrap";
import "./Contact.css";

function ContactForm() {
    return (
        <Form className="contact-form">
            <Form.Group className="mb-3" controlId="formBasicEmail5">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name="email" placeholder="Enter email" required/>
            </Form.Group>

            <Form.Group controlId="formSubject5">
                <Form.Label>Subject</Form.Label>
                <Form.Select name="subject" required>
                    <option value="">Select a subject</option>
                    <option value="Inquiry">Inquiry</option>
                    <option value="Feedback">Feedback</option>
                    <option value="Support">Support</option>
                </Form.Select>
            </Form.Group>

            <Form.Group controlId="formMessage5">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" name="message" rows={5} style={{ resize: "none" }} required/>
            </Form.Group>

            <Button variant="primary" type="submit">
                Send
            </Button>
        </Form>
    );
}

export default ContactForm;
