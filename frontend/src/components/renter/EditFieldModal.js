import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import FieldFormAction from "./FieldFormAction";
import EditFieldForm from "./EditFieldForm";

const EditFieldModal = (props) => {
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
                    <EditFieldForm field_id={props.field_id} closeModal={closeModal} getf={props.getf}/>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default EditFieldModal;
