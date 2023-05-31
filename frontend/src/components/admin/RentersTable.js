import Table from "react-bootstrap/Table";
import React, {useEffect, useState} from "react";
import Button from "react-bootstrap/Button";
import "../../pages/admin/Admin.css";

import axios from "axios";
import DeleteConfirmationModalRenter from "./DeleteConfirmationModalRenter";

function RentersTable() {

    const [renters, setRenters] = useState([]);
    const [counter, setCounter] =  useState(1);

    const handleDelete = (id) => {
        const updatedRenters = renters.filter(renter => renter.id !== id);

        const updatedRentersWithNewIds = updatedRenters.map((renter, index) => ({
            ...renter,
            id: index + 1,
        }));

        setRenters(updatedRentersWithNewIds);
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
                                            <Button className="buttonView"  size="sm">Warn</Button>

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