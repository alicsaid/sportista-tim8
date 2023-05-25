import Card from 'react-bootstrap/Card';
import React, {useEffect, useState} from "react";
import {CardContent, Typography} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import axios from "axios";
import EditFieldModal from "./EditFieldModal";
import DeleteConfirmation from "./DeleteConfirmationModal";

function Field(props) {

    return (
        <div className="cardContainer">
            <div className="cardRow">
                {props.fields.map((field) => (
                    <Card key={field.fields.id} style={{ width: '18rem', marginTop: "5rem" }}>
                        <Card.Img variant="top" src={require('../../resources/images/teren1.jpg')} alt={"teren"} />
                        <Card.Body>
                            <Card.Title>{field.fields.name}</Card.Title>
                            <Card.Text>
                                {field.fields.details}
                            </Card.Text>
                            <Card.Text>
                                Location: {field.fields.address}
                            </Card.Text>
                            <EditFieldModal />
                            <DeleteConfirmation />

                        </Card.Body>
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default Field;