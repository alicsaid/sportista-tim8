import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import Button from '@material-ui/core/Button';

const CancelBookingFieldModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (
        <>
            <Button variant="outlined" onClick={openModal}>CANCEL</Button>
            <Modal show={isOpen} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>CANCEL BOOKING</Modal.Title>
                </Modal.Header>
                <Modal.Body className="d-flex flex-column align-items-center">
                    <h5>Are you sure you want to cancel this reservation?</h5>
                    <Button className="mt-3" >
                        CANCEL
                    </Button>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default CancelBookingFieldModal;
