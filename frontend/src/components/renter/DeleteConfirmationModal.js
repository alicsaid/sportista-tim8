import {SERVER_URL} from "../../auth/Consts";
import React, { useState } from 'react';
import axios from 'axios';
import { Button, Modal } from 'react-bootstrap';

const DeleteConfirmationModal = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    const deleteField = (field_id) => {
        console.log(field_id);
        axios
            .delete(`${SERVER_URL}/renter/delete/${field_id}/`)
            .then((response) => {
                console.log('Field deleted successfully');
            })
            .catch((error) => {
                console.error('Error deleting post:', error);
            });
    };

    const callFuns = () => {
        closeModal();
        deleteField(props.field_id);
        setTimeout(props.getf, 330)
    };

    return (
        <>
            <button className="custom-register-button" onClick={openModal}>
                DELETE
            </button>
            <Modal show={isOpen} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>DELETE FIELD</Modal.Title>
                </Modal.Header>
                <Modal.Body className="text-center">
                    <h4>Are you sure you want to delete the field?</h4>
                    <button className="custom-register-button" onClick={() => callFuns()}>
                        DELETE
                    </button>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default DeleteConfirmationModal;
