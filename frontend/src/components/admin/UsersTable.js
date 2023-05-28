import Table from "react-bootstrap/Table";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React, {useEffect, useState} from "react";
import axios from "axios";

function UsersTable() {
    const [users, setUsers] = useState([]);

    const handleDelete = (id) => {
        const updatedUsers = users.filter(user => user.id !== id);

        const updatedUsersWithNewIds = updatedUsers.map((user, index) => ({
            ...user,
            id: index + 1,
        }));

        setUsers(updatedUsersWithNewIds);
    };


    useEffect(() => {
        getUsers();
    }, []);

    function getUsers() {
        axios.get(`http://127.0.0.1:8000/admin/users/getUsers/`)
            .then((response) => {
                setUsers(response.data);
                console.log("DA VIDIMO RESPONSE.DATA: ")
                console.log(response.data)

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
                    {users.map(user => (
                        <tr key={user.id}>
                            <td className="table-content">{user.id}</td>
                            <td className="table-content">{user.firstName}</td>
                            <td className="table-content">{user.lastName}</td>
                            <td className="table-content">{user.email}</td>
                            <td className="table-content">{user.gender ? 'male' : 'female'}</td>
                            <td className="table-content">{user.city}</td>
                            <td className="table-content">
                                <div className="button-group">
                                    <Button className="buttonView" size="sm" >Warn</Button>
                                    <Button className="buttonDelete" variant="danger" size="sm" onClick={() => handleDelete(user.id)}>Delete</Button>
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