import {SERVER_URL} from "../../auth/Consts";

import React, { useState } from 'react';
import axios from 'axios';
import { Button, Modal } from 'react-bootstrap';

const DeleteConfirmation = (props) => {
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
            <Button variant="outline-danger" style={{ margin: '5px' }} onClick={openModal}>
                Delete
            </Button>
            <Modal show={isOpen} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="alert alert-danger">Are you sure you want to delete the field?</div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={closeModal}>
                        Cancel
                    </Button>
                    <Button variant="danger" onClick={() => callFuns()}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default DeleteConfirmation;
