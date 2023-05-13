import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./Admin.css";

//components
import Sidebar from "../../components/navigation/Sidebar";

function Users() {
    const [users, setUsers] = useState([
        { id: 1, firstName: "John", lastName: "Doe", email: "john@example.com", gender: "Male", dateOfBirth: "13-04-1995", sports: ["Football", "Basketball", "Handball", "Paintball"] },
        { id: 2, firstName: "Jennifer", lastName: "Smith", email: "jennifer@example.com", gender: "Female", dateOfBirth: "05-05-1999", sports: ["Volleyball", "Basketball", "Tennis", "Ice skating"] },
        { id: 3, firstName: "Mike", lastName: "Smith", email: "mike@example.com", gender: "Male", dateOfBirth: "29-04-1993", sports: ["Football", "Basketball", "Volleyball", "Boxing"] },
        { id: 4, firstName: "Jane", lastName: "Roe", email: "jane@example.com", gender: "Female", dateOfBirth: "02-07-1997", sports: ["Tennis", "Table tennis", "Ice skating"] },
        { id: 5, firstName: "Sarah", lastName: "Campbell", email: "sarah@example.com", gender: "Female", dateOfBirth: "07-08-2001", sports: ["Basketball", "Handball", "Table tennis"] },
        { id: 6, firstName: "Tom", lastName: "Wade", email: "tom@example.com", gender: "Male", dateOfBirth: "21-03-2000", sports: ["Football", "Hockey", "Airsoft"] },
        { id: 7, firstName: "Austin", lastName: "Toe", email: "austin@example.com", gender: "Male", dateOfBirth: "25-09-1996", sports: ["Tennis", "Basketball", "Airsoft"] },
        { id: 8, firstName: "Edward", lastName: "Stiles", email: "edward@example.com", gender: "Male", dateOfBirth: "27-12-1999", sports: ["Basketball", "Boxing", "Paintball"] },
        { id: 9, firstName: "Mia", lastName: "Soler", email: "mia@example.com", gender: "Female", dateOfBirth: "09-03-2004", sports: ["Volleyball", "Football", "Hockey"] },
    ]);

    const [showModal, setShowModal] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

    const handleDelete = (id) => {
        const updatedUsers = users.filter(user => user.id !== id);

        const updatedUsersWithNewIds = updatedUsers.map((user, index) => ({
            ...user,
            id: index + 1,
        }));

        setUsers(updatedUsersWithNewIds);
    };

    const handleOpenModal = (user) => {
        setSelectedUser(user);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setSelectedUser(null);
        setShowModal(false);
    };

    return (
        <div style={{ display: 'flex' }}>
            <Sidebar />
            <div style={{ marginLeft: '27rem', marginTop: '2rem', marginBottom: '2rem', marginRight: '1rem', height: 'calc(100vh - 5rem)', overflowY: 'auto' }}>
                <h1>Users</h1>

                <div className="table">
                    <Table striped bordered hover size="sm" style={{border: '3px solid #ccc', boxShadow: '0 0 5px rgba(0,0,0,0.2)'}}>
                        <thead>
                        <tr>
                            <th className="table-content">ID</th>
                            <th className="table-content">First name</th>
                            <th className="table-content">Last name</th>
                            <th className="table-content">Email address</th>
                            <th className="table-content">Gender</th>
                            <th className="table-content">Date of birth</th>
                            <th className="table-content">Sports</th>
                            <th className="table-content">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {users.map(user => (
                            <tr key={user.id}>
                                <td className="table-content">{user.id}</td>
                                <td className="table-content">{user.firstName}</td>
                                <td className="table-content">{user.lastName}</td>
                                <td className="table-content">{user.email}</td>
                                <td className="table-content">{user.gender}</td>
                                <td className="table-content">{user.dateOfBirth}</td>
                                <td className="table-content">
                                    {user.sports.length === 1
                                        ? user.sports[0]
                                        : (
                                            <Dropdown>
                                                <Dropdown.Toggle variant="success" style={{background: 'none', border: 'none', color: 'black'}}>
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    {user.sports.map(sport => (
                                                        <Dropdown.Item key={sport}>{sport}</Dropdown.Item>
                                                    ))}
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        )}
                                </td>
                                <td className="table-content">
                                    <div className="button-group">
                                        <Button className="buttonView" size="sm" onClick={() => handleOpenModal(user)}>View</Button>
                                        <Button className="buttonDelete" variant="danger" size="sm" onClick={() => handleDelete(user.id)}>Delete</Button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                </div>
                <div className="empty-space"></div>
                <Modal show={showModal} onHide={handleCloseModal} centered>
                    <Modal.Header closeButton>
                        <Modal.Title>User Details</Modal.Title>
                    </Modal.Header>
                    {selectedUser && (
                        <Modal.Body>
                            <p><strong>ID:</strong> {selectedUser.id}</p>
                            <p><strong>First Name:</strong> {selectedUser.firstName}</p>
                            <p><strong>Last Name:</strong> {selectedUser.lastName}</p>
                            <p><strong>Email Address:</strong> {selectedUser.email}</p>
                            <p><strong>Gender:</strong> {selectedUser.gender}</p>
                            <p><strong>Date of Birth:</strong> {selectedUser.dateOfBirth}</p>
                            <p><strong>Sports:</strong> {selectedUser.sports.join(', ')}</p>
                        </Modal.Body>
                    )}
                </Modal>
            </div>
        </div>
    );
}

export default Users;
