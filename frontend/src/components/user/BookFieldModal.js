import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const BookFieldModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (
        <>
            <button className="custom-register-button" onClick={openModal}>Book</button>
            <Modal show={isOpen} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>BOOK THIS FIELD!</Modal.Title>
                </Modal.Header>
                <Modal.Body className="d-flex flex-column align-items-center">
                    <input className="custom-input" type="date" value="2017-06-01" />
                    <input className="custom-input" type="time" />
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" id="flexSwitchCheckReverse" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckReverse">Book weekly!</label>
                    </div>
                    <button className="custom-register-button mt-5" >
                        Book
                    </button>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default BookFieldModal;
