import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const CancelBookingFieldModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (
        <>
            <button className="custom-register-button" onClick={openModal}>CANCEL</button>
            <Modal show={isOpen} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Cancel booking?</Modal.Title>
                </Modal.Header>
                <Modal.Body className="d-flex flex-column align-items-center">
                    <h5>Are you sure you want to cancel this reservation?</h5>
                    <button className="custom-register-button mt-5" >
                        CANCEL
                    </button>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default CancelBookingFieldModal;
