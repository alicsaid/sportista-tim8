import React, { useState } from 'react';
import "../../pages/home/Home.css";
import {Modal} from "react-bootstrap";
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function FAQModal() {

    const [isOpen, setIsOpen] = useState(false);
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const openFAQModal = () => {
        setIsOpen(true);
    };

    const closeFAQModal = () => {
        setIsOpen(false);
    };

    return (
        <div>
            <Modal show={isOpen} onHide={closeFAQModal}>
                <Modal.Header closeButton>
                    <h4>FREQUENTLY ASKED QUESTIONS</h4>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1bh-content" id="panel1bh-header">
                                <strong>What is the pricing for field rentals?</strong>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div>
                                    <p>The pricing varies based on the type of field and duration of the rental. Please check our Pricing page for more details.</p>
                                </div>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2bh-content" id="panel2bh-header">
                                <strong>What is the cancellation policy?</strong>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div>
                                    <p>Our cancellation policy allows for a full refund if the cancellation is made at least 24 hours before the scheduled rental time.</p>
                                </div>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3bh-content" id="panel3bh-header">
                                <strong>Can I bring my own equipment?</strong>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div>
                                    <p>Yes, you are allowed to bring your own equipment for field rentals. However, please ensure that it complies with our safety regulations.</p>
                                </div>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel4bh-content" id="panel4bh-header">
                                <strong>Is there a minimum age requirement for field rentals?</strong>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div>
                                    <p>Yes, the minimum age requirement for field rentals is 18 years old. Minors must be accompanied by a responsible adult.</p>
                                </div>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel5bh-content" id="panel5bh-header">
                                <strong>Are pets allowed on the fields?</strong>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div>
                                    <p>No, pets are not allowed on the fields for safety and hygiene reasons. Service animals, however, are permitted.</p>
                                </div>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel6bh-content" id="panel6bh-header">
                                <strong>Do you provide equipment rentals?</strong>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div>
                                    <p>Yes, we provide equipment rentals for various sports and activities. Please check with our staff for availability and rental fees.</p>
                                </div>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel7bh-content" id="panel7bh-header">
                                <strong>Is there a discount for recurring field rentals?</strong>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div>
                                    <p>Yes, we offer discounts for recurring field rentals. Please contact our customer service for more information on our discount programs.</p>
                                </div>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel8bh-content" id="panel8bh-header">
                                <strong>What are the available payment methods?</strong>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div>
                                    <p>We accept payments via credit/debit cards, cash, and online payment platforms. Please note that personal checks are not accepted.</p>
                                </div>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion expanded={expanded === 'panel9'} onChange={handleChange('panel9')}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel9bh-content" id="panel9bh-header">
                                <strong>Do you offer group discounts?</strong>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div>
                                    <p>Yes, we provide group discounts for large bookings and events. Please inquire with our team to discuss the details and eligibility.</p>
                                </div>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion expanded={expanded === 'panel10'} onChange={handleChange('panel10')}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel11bh-content" id="panel11bh-header">
                                <strong>Are there changing facilities available?</strong>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div>
                                    <p>Yes, we provide changing facilities for our customers. Our facilities include clean and spacious locker rooms with showers.</p>
                                </div>
                            </AccordionDetails>
                        </Accordion>

                    </div>
                </Modal.Body>
            </Modal>

            <div className="fab-container">
                <button className="faq-fab scaler" onClick={openFAQModal}>FAQ</button>
            </div>
        </div>
    );
}

export default FAQModal;
