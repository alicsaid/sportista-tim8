import Table from "react-bootstrap/Table";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React, {useEffect, useState} from "react";
import axios from "axios";
import DeleteConfirmationModalRenter from "./DeleteConfirmationModalRenter";
import DeleteConfirmationModalUser from "./DeleteConfirmationModalUser";
import {Form} from "react-bootstrap";

function UsersTable() {
    const [users, setUsers] = useState([]);
    const [counter, setCounter] = useState(1);
    const [isOpen, setIsOpen] = useState(false);
    const [warningMessage, setWarningMessage] = useState('');
    const [selectedUser, setSelectedUser] = useState(null);

    const openModal = (user) => {
        setIsOpen(true);
        setSelectedUser(user);
    };

    const closeModal = () => {
        setIsOpen(false);
        setSelectedUser(null);
        setWarningMessage("");
    };


    const sendWarningMessage = () => {

        const emailData = {
            sender_email: 'foul.official2305@outlook.com', // Naša adresa e-pošte
            recipient_email: selectedUser.email,
            message: warningMessage,
        };

        axios
            .post('http://127.0.0.1:8000/admin/users/send-email/', emailData)
            .then((response) => {
                console.log('Warning email sent successfully');
                closeModal();

            })
            .catch((error) => {
                console.error('Warning email sending failed:', error);
            });

        setIsOpen(false);

    };


    useEffect(() => {
        getUsers();
    }, []);

    function getUsers() {
        axios.get(`http://127.0.0.1:8000/admin/users/getUsers/`)
            .then((response) => {
                setUsers(response.data);

            })
            .catch((error) => {
                console.error('Error fetching fields:', error);
            });
    }

    return (
        <div>
            <div className="table">
                <Table striped bordered hover size="sm" style={{border: '3px solid #ccc', boxShadow: '0 0 5px rgba(0,0,0,0.2)'}}>
                    <thead>
                    <tr>
                        <th className="table-content">ID</th>
                        <th className="table-content">First name</th>
                        <th className="table-content">Last name</th>
                        <th className="table-content">Email address</th>
                        <th className="table-content">Gender</th>
                        <th className="table-content">City</th>
                        <th className="table-content">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {users.map((user, index= 1) => (
                        <tr key={user.id}>
                            <td className="table-content">{counter + index}</td>
                            <td className="table-content">{user.firstName}</td>
                            <td className="table-content">{user.lastName}</td>
                            <td className="table-content">{user.email}</td>
                            <td className="table-content">{user.gender ? 'male' : 'female'}</td>
                            <td className="table-content">{user.city}</td>
                            <td className="table-content">
                                <div className="button-group">
                                    <Button className="buttonView" onClick={() => openModal(user)}  size="sm">Warn</Button>
                                    <Modal show={isOpen} onHide={closeModal}>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Send Warning Message</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <Form>
                                                <Form.Group controlId="message">
                                                    <Form.Label>Message</Form.Label>
                                                    <Form.Control
                                                        as="textarea"
                                                        rows={4}
                                                        value={warningMessage}
                                                        onChange={(e) => setWarningMessage(e.target.value)}
                                                    />
                                                </Form.Group>
                                            </Form>
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <Button variant="secondary" onClick={closeModal}>
                                                Cancel
                                            </Button>
                                            <Button variant="primary" onClick={() => sendWarningMessage()} >
                                                Send
                                            </Button>
                                        </Modal.Footer>
                                    </Modal>

                                    <DeleteConfirmationModalUser user_id={user.id} getU={getUsers} />
                                </div>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
            </div>
        </div>
    );
}

export default UsersTable;