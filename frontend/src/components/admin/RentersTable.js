import Table from "react-bootstrap/Table";
import React, {useEffect, useState} from "react";
import Button from "react-bootstrap/Button";
import "../../pages/admin/Admin.css";

import axios from "axios";
import DeleteConfirmationModalRenter from "./DeleteConfirmationModalRenter";
import {Navigate} from "react-router-dom";
import {Form, Modal} from "react-bootstrap";

function RentersTable(props) {
    const [renters, setRenters] = useState([]);
    const [counter, setCounter] =  useState(1);
    const [isOpen, setIsOpen] = useState(false);
    const [warningMessage, setWarningMessage] = useState('');
    const [selectedRenter, setSelectedRenter] = useState(null);

    const openModal = (renter) => {
        setIsOpen(true);
        setSelectedRenter(renter);
    };

    const closeModal = () => {
        setIsOpen(false);
        setSelectedRenter(null);
        setWarningMessage("");
    };


    const sendWarningMessage = () => {

        const emailData = {
            sender_email: 'foul.official2305@outlook.com', // Naša adresa e-pošte
            recipient_email: selectedRenter.email,
            message: warningMessage,
        };

        axios
            .post('http://127.0.0.1:8000/admin/renters/send-email/', emailData)
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
        getRenters();
    }, []);

    function getRenters() {
        axios.get(`http://127.0.0.1:8000/admin/renters/getRenters/`)
            .then((response) => {
                setRenters(response.data);
            })
            .catch((error) => {
                console.error('Error fetching fields:', error);
            });
    }


    return (

        <div style={{display: 'flex'}}>
            <div style={{marginLeft: '10px'}}>
                <div className="table">
                    <Table striped bordered hover size="sm"
                           style={{border: '3px solid #ccc', boxShadow: '0 0 5px rgba(0,0,0,0.2)'}}>
                        <thead>
                        <tr>
                            <th className="table-content">ID</th>
                            <th className="table-content">Name</th>
                            <th className="table-content">Email address</th>
                            <th className="table-content">City</th>
                            <th className="table-content">Phone number</th>
                            <th className="table-content">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {renters.map((renter, index=1) => (
                            <React.Fragment key={renter.id}>
                                <tr>
                                    <td className="table-content">{counter + index}</td>
                                    <td className="table-content">{renter.name}</td>
                                    <td className="table-content">{renter.email}</td>
                                    <td className="table-content">{renter.city}</td>
                                    <td className="table-content">{renter.phone}</td>

                                    <td className="table-content">
                                        <div className="button-group">
                                            <Button className="buttonView" onClick={() => openModal(renter)}  size="sm">Warn</Button>
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

                                            <DeleteConfirmationModalRenter renter_id={renter.id} getR={getRenters} />
                                        </div>
                                    </td>
                                </tr>
                            </React.Fragment>
                        ))}
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    );
}

export default RentersTable;