import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const FieldDetailsModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (
        <>
            <button className="custom-register-button" onClick={openModal}>Details</button>
            <Modal show={isOpen} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Field Name</Modal.Title>
                </Modal.Header>
                <Modal.Body className="d-flex flex-column align-items-center">
                    <p>Adresa: ...</p>
                    <p>Detalji: ...</p>
                    <p>Posto u bazi nemamo vise podataka o terenu, ovdje mozemo dodati jos kad je koji dostupan</p>
                    <button className="custom-register-button">Book</button>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default FieldDetailsModal;
