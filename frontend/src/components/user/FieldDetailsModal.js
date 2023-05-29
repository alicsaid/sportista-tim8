import React, { useState } from "react";
import { Modal } from "react-bootstrap";

const FieldDetailsModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (
        <>
            <button className="custom-register-button" onClick={openModal}>DETAILS</button>
            <Modal show={isOpen} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>FIELD NAME</Modal.Title>
                </Modal.Header>
                <Modal.Body className="d-flex flex-column align-items-center">
                    <p>Adresa: ...</p>
                    <p>Detalji: ...</p>
                    <p>Posto u bazi nemamo vise podataka o terenu, ovdje mozemo dodati jos kad je koji dostupan</p>
                    <button className="custom-register-button">BOOK</button>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default FieldDetailsModal;
