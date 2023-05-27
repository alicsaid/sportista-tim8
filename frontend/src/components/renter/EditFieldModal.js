import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import FieldFormAction from "./FieldFormAction";

const EditFieldModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (
        <>
            <Button variant="outline-secondary" style={{ margin: "5px" }} onClick={openModal}>
                Edit field
            </Button>
            <Modal show={isOpen} onHide={closeModal}>
                <Modal.Header>
                    <button className="btn-close" onClick={closeModal}></button>
                </Modal.Header>
                <Modal.Body>
                    <FieldFormAction action="Edit" />
                </Modal.Body>
            </Modal>
        </>
    );
};

export default EditFieldModal;
