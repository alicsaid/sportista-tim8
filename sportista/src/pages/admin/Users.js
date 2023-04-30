import React from 'react';
import Table from 'react-bootstrap/Table';
import Dropdown from 'react-bootstrap/Dropdown';
import "./Users.css";

//components
import Sidebar from "../../components/navigation/Sidebar";

function Users() {
    const users = [
        { id: 1, firstName: "John", lastName: "Doe", gender: "Male", dateOfBirth: "13-04-1995", email: "john@example.com", sports: ["Football", "Basketball", "Handball"] },
        { id: 2, firstName: "Jennifer", lastName: "Smith", gender: "Female", dateOfBirth: "05-05-1999", email: "jennifer@example.com", sports: ["Volleyball", "Basketball", "Tennis"] },
        { id: 3, firstName: "Mike", lastName: "Smith", gender: "Male", dateOfBirth: "29-04-1993", email: "mike@example.com", sports: ["Football", "Basketball", "Volleyball"] },
        { id: 4, firstName: "Jane", lastName: "Roe", gender: "Female", dateOfBirth: "02-07-1997", email: "jane@example.com", sports: ["Tennis"] },
        { id: 5, firstName: "Sarah", lastName: "Campbell", gender: "Female", dateOfBirth: "07-08-2001", email: "sarah@example.com", sports: ["Basketball", "Handball"] },
        { id: 6, firstName: "Tom", lastName: "Wade", gender: "Male", dateOfBirth: "21-03-2000", email: "tom@example.com", sports: ["Football"] },
        { id: 7, firstName: "Austin", lastName: "Toe", gender: "Male", dateOfBirth: "25-09-1996", email: "austin@example.com", sports: ["Tennis", "Basketball"] },
        { id: 8, firstName: "Edward", lastName: "Stiles", gender: "Male", dateOfBirth: "27-12-1999", email: "edward@example.com", sports: ["Basketball"] },
        { id: 9, firstName: "Mia", lastName: "Soler", gender: "Female", dateOfBirth: "09-03-2004", email: "mia@example.com", sports: ["Volleyball", "Football"] },
    ];

    return (
        <div style={{ display: 'flex' }}>
            <Sidebar />
            <div style={{ marginLeft: '27rem', marginTop: '2rem' }}>
                <h1>Users</h1>

                <div className="table">
                    <Table striped bordered hover size="sm" style={{border: '3px solid #ccc',  boxShadow: '0 0 5px rgba(0,0,0,0.2)'}}>
                        <thead>
                        <tr>
                            <th className="table-content">ID</th>
                            <th className="table-content">First name</th>
                            <th className="table-content">Last name</th>
                            <th className="table-content">Gender</th>
                            <th className="table-content">Date of birth</th>
                            <th className="table-content">Email address</th>
                            <th className="table-content">Sports</th>
                        </tr>
                        </thead>
                        <tbody>
                        {users.map(user => (
                            <tr key={user.id}>
                                <td className="table-content">{user.id}</td>
                                <td className="table-content">{user.firstName}</td>
                                <td className="table-content">{user.lastName}</td>
                                <td className="table-content">{user.gender}</td>
                                <td className="table-content">{user.dateOfBirth}</td>
                                <td className="table-content">{user.email}</td>
                                <td className="table-content">
                                    {user.sports.length === 1
                                        ? user.sports[0]
                                        : <Dropdown>
                                            <Dropdown.Toggle variant="success" style={{background: 'none', border: 'none', color: 'black'}}>
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                {user.sports.map(sport => (
                                                    <Dropdown.Item key={sport}>{sport}</Dropdown.Item>
                                                ))}
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    }
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    );
}

export default Users;