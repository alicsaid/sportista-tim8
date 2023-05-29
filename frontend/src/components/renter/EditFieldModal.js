import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import FieldFormAction from "./FieldFormAction";

const EditFieldModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (
        <>
            <button className="custom-register-button" onClick={openModal}>
                EDIT
            </button>
            <Modal show={isOpen} onHide={closeModal}>
                <Modal.Header>
                    <Modal.Title>EDIT FIELD</Modal.Title>
                    <button className="btn-close" onClick={closeModal}></button>
                </Modal.Header>
                <Modal.Body>
                    <FieldFormAction action="EDIT" />
                </Modal.Body>
            </Modal>
        </>
    );
};

export default EditFieldModal;
