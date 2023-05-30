import React, { useState } from 'react';
import axios from 'axios';
import { Button, Modal } from 'react-bootstrap';

const DeleteConfirmationModalUser = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    const deleteUser = (user_id) => {
        axios.delete(`http://127.0.0.1:8000/admin/users/deleteUser/${user_id}/`)
            .then((response) => {
                console.log('User deleted successfully');
            })
            .catch((error) => {
                console.error('Error deleting post:', error);
            });
    };

    const callFuns = () => {
        closeModal();
        console.log("Obrisat cu usera sa IDem: ")
        console.log(props.user_id)
        deleteUser(props.user_id);
        setTimeout(props.getU, 330)
    };

    return (
        <>
            <Button className="buttonDelete" variant="danger" size="sm" onClick={openModal}>
                Delete
            </Button>
            <Modal show={isOpen} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete user</Modal.Title>
                </Modal.Header>
                <Modal.Body className="text-center">
                    <h4>Are you sure you want to delete the user?</h4>
                    <button className="custom-register-button float-end" onClick={() => callFuns()}>
                        Delete
                    </button>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default DeleteConfirmationModalUser;