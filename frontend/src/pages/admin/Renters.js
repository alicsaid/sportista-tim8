import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./Admin.css";

//components
import Sidebar from "../../components/navigation/Sidebar";

function Renters() {
    const [renters, setRenters] = useState([
        {
            id: 1,
            name: "renter1",
            email: "renter1@example.com",
            city: "Sarajevo",
            phone: "062123123",
            sports: ["Football", "Handball", "Volleyball", "Tennis"]
        },
        {
            id: 2,
            name: "renter2",
            email: "renter2@example.com",
            city: "Sarajevo",
            phone: "062123124",
            sports: ["Paintball", "Table tennis", "Airsoft", "Boxing", "Hockey"]
        },
        {
            id: 3,
            name: "renter3",
            email: "renter3@example.com",
            city: "Mostar",
            phone: "062123125",
            sports: ["Football", "Volleyball", "Handball", "Basketball"]
        },
        {
            id: 4,
            name: "renter4",
            email: "renter4@example.com",
            city: "Konjic",
            phone: "062123126",
            sports: ["Table tennis", "Volleyball", "Tennis", "Airsoft"]
        },
        {
            id: 5,
            name: "renter5",
            email: "renter5@example.com",
            city: "Banja Luka",
            phone: "062123127",
            sports: ["Ice skating", "Paintball", "Football"]
        },
        {
            id: 6,
            name: "renter6",
            email: "renter6@example.com",
            city: "Travnik",
            phone: "062123128",
            sports: ["Volleyball", "Boxing", "Handball", "Paintball"]
        },
        {
            id: 7,
            name: "renter7",
            email: "renter7@example.com",
            city: "Sarajevo",
            phone: "062123129",
            sports: ["Basketball", "Football", "Volleyball", "Hockey"]
        },
        {
            id: 8,
            name: "renter8",
            email: "renter8@example.com",
            city: "Mostar",
            phone: "062123120",
            sports: ["Table tennis", "Volleyball", "Football"]
        },

    ]);

    const [selectedRenter, setSelectedRenter] = useState(null);

    const handleDelete = (id) => {
        const updatedRenters = renters.filter(renter => renter.id !== id);

        const updatedRentersWithNewIds = updatedRenters.map((renter, index) => ({
            ...renter,
            id: index + 1,
        }));

        setRenters(updatedRentersWithNewIds);
    };

    const handleViewDetails = (id) => {
        const renter = renters.find(renter => renter.id === id);
        setSelectedRenter(renter);
    };

    const handleCloseModal = () => {
        setSelectedRenter(null);
    };

    return (
        <div style={{display: 'flex'}}>
            <Sidebar/>
            <div style={{marginLeft: '27rem', marginTop: '2rem', marginBottom: '2rem', marginRight: '1rem', height: 'calc(100vh - 5rem)', overflowY: 'auto' }}>
                <h1>Renters</h1>

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
                            <th className="table-content">Available sports</th>
                            <th className="table-content">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {renters.map(renter => (
                            <React.Fragment key={renter.id}>
                                <tr>
                                    <td className="table-content">{renter.id}</td>
                                    <td className="table-content">{renter.name}</td>
                                    <td className="table-content">{renter.email}</td>
                                    <td className="table-content">{renter.city}</td>
                                    <td className="table-content">{renter.phone}</td>
                                    <td className="table-content">
                                        {renter.sports.length === 1
                                            ? renter.sports[0]
                                            : (
                                                <Dropdown>
                                                    <Dropdown.Toggle variant="success" style={{
                                                        background: 'none',
                                                        border: 'none',
                                                        color: 'black'
                                                    }}>
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu>
                                                        {renter.sports.map(sport => (
                                                            <Dropdown.Item key={sport}>{sport}</Dropdown.Item>
                                                        ))}
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            )
                                        }
                                    </td>
                                    <td className="table-content">
                                        <div className="button-group">
                                            <Button className="buttonView" size="sm" onClick={() => handleViewDetails(renter.id)}>View</Button>
                                            <Button className="buttonDelete" variant="danger" size="sm"
                                                    onClick={() => handleDelete(renter.id)}>Delete</Button>
                                        </div>
                                    </td>
                                </tr>
                                {selectedRenter && selectedRenter.id === renter.id && (
                                    <tr>
                                        <td colSpan={6}>
                                            <Modal show={true} onHide={handleCloseModal} centered>
                                                <Modal.Header closeButton>
                                                    <Modal.Title>Renter Details</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <p><strong>ID:</strong> {selectedRenter.id}</p>
                                                    <p><strong>Name:</strong> {selectedRenter.name}</p>
                                                    <p><strong>Email:</strong> {selectedRenter.email}</p>
                                                    <p><strong>City:</strong> {selectedRenter.city}</p>
                                                    <p><strong>Phone number:</strong> {selectedRenter.phone}</p>
                                                    <p><strong>Available
                                                        Sports:</strong> {selectedRenter.sports.join(", ")}</p>
                                                </Modal.Body>
                                            </Modal>
                                        </td>
                                    </tr>
                                )}
                            </React.Fragment>
                        ))}
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    );
}

export default Renters;
