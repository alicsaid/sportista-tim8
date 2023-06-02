import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import Button from '@material-ui/core/Button';
import EditFieldForm from "./EditFieldForm";

const EditFieldModal = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (
        <>
            <Button variant="outlined" onClick={openModal}>
                EDIT
            </Button>
            <Modal show={isOpen} onHide={closeModal}>
                <Modal.Header closeButton>
                    EDIT FIELD
                </Modal.Header>
                <Modal.Body>
                    <EditFieldForm field_id={props.field_id} closeModal={closeModal} getf={props.getf}/>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default EditFieldModal;
