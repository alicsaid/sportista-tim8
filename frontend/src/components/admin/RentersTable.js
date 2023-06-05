import React, {useEffect, useState} from "react";
import axios from "axios";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

// components
import DeleteConfirmationModalRenter from "./DeleteConfirmationModalRenter";

function RentersTable() {

    const [renters, setRenters] = useState([]);
    console.log(renters)
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
        <div className="mt-5">
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>#</TableCell>
                            <TableCell>Full Name</TableCell>
                            <TableCell>Email address</TableCell>
                            <TableCell>City</TableCell>
                            <TableCell>Phone number</TableCell>
                            <TableCell>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {renters.map((renter, index) => (
                            <TableRow key={renter.id}>
                                <TableCell>{index + 1}</TableCell>
                                <TableCell>{renter.name}</TableCell>
                                <TableCell>{renter.email}</TableCell>
                                <TableCell>{renter.city}</TableCell>
                                <TableCell>{renter.phone}</TableCell>
                                <TableCell>
                                    <Button className="custom-button m-2">WARNING</Button>
                                    <DeleteConfirmationModalRenter renter_id={renter.id} getR={getRenters} />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default RentersTable;