import {SERVER_URL} from "../../auth/Consts";
import React, { useState } from 'react';
import axios from 'axios';
import { Button, Modal } from 'react-bootstrap';

const DeleteConfirmationModalRenter = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    const deleteRenter = (renter_id) => {
        axios.delete(`http://127.0.0.1:8000/admin/renters/deleteRenter/${renter_id}/`)
            .then((response) => {
                console.log('Renter deleted successfully');
            })
            .catch((error) => {
                console.error('Error deleting post:', error);
            });
    };

    const callFuns = () => {
        closeModal();
        console.log("Obrisat cu rentera sa IDem: ")
        console.log(props.renter_id)
        deleteRenter(props.renter_id);
        setTimeout(props.getR, 330)
    };

    return (
        <>
            <Button className="buttonDelete" variant="danger" size="sm" onClick={openModal}>
                Delete
            </Button>
            <Modal show={isOpen} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete renter</Modal.Title>
                </Modal.Header>
                <Modal.Body className="text-center">
                    <h4>Are you sure you want to delete the renter?</h4>
                    <button className="custom-register-button float-end" onClick={() => callFuns()}>
                        Delete
                    </button>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default DeleteConfirmationModalRenter;