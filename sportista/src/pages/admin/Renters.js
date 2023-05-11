import React from 'react';
import Table from 'react-bootstrap/Table';
import Dropdown from 'react-bootstrap/Dropdown';
import "./Admin.css";

//components
import Sidebar from "../../components/navigation/Sidebar";

function Renters() {
    const renters = [
        { id: 1, name: "Vistafon", address: "Bulevar Meše Selimovića bb, Sarajevo", email: "vistafon@example.com", sports: ["Football", "Handball"] },
        { id: 2, name: "Fudbalski tereni Bentbaša", address: "Aleja Ambasadora bb, Sarajevo", email: "bentbasa@example.com", sports: ["Football"] },
        { id: 3, name: "Zetra", address: "Alipašina bb, Sarajevo", email: "zetra@example.com", sports: ["Football", "Tennis"] },
        { id: 4, name: "Centar Skenderija", address: "Terezija bb, Sarajevo", email: "skenderija@example.com", sports: ["Football", "Basketball", "Volleyball"] },
        { id: 5, name: "Centar Safet Zajko", address: "Halilovići bb, Sarajevo", email: "safetzajko@example.com", sports: ["Football", "Tennis", "Volleyball", "Basketball"] },
    ];

    return (
        <div style={{ display: 'flex' }}>
            <Sidebar />
            <div style={{ marginLeft: '27rem', marginTop: '2rem' }}>
                <h1>Renters</h1>

                <div className="table">
                    <Table striped bordered hover size="sm" style={{border: '3px solid #ccc',  boxShadow: '0 0 5px rgba(0,0,0,0.2)'}}>
                        <thead>
                            <tr>
                                <th className="table-content">ID</th>
                                <th className="table-content">Name of sports center</th>
                                <th className="table-content">Address</th>
                                <th className="table-content">Email address</th>
                                <th className="table-content">Available sports</th>
                            </tr>
                        </thead>
                        <tbody>
                            {renters.map(renter => (
                                <tr key={renter.id}>
                                    <td className="table-content">{renter.id}</td>
                                    <td className="table-content">{renter.name}</td>
                                    <td className="table-content">{renter.address}</td>
                                    <td className="table-content">{renter.email}</td>
                                    <td className="table-content">
                                        {renter.sports.length === 1
                                            ? renter.sports[0]
                                            : <Dropdown>
                                                <Dropdown.Toggle variant="success" style={{background: 'none', border: 'none', color: 'black'}}>
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    {renter.sports.map(sport => (
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

export default Renters;