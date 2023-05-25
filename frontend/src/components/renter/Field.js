import Card from 'react-bootstrap/Card';
import React, {useEffect, useState} from "react";
import {CardContent, Typography} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import axios from "axios";
import EditFieldModal from "./EditFieldModal";
import DeleteConfirmation from "./DeleteConfirmationModal";

function Field(props) {
    console.log(props.fields[0])
    return (
        <div className="cardContainer">
            <div className="cardRow">
                {props.fields.map((field) => (
                    <Card key={field.pk} style={{ width: '18rem', marginTop: "5rem" }}>
                        <Card.Img variant="top" src={field.fields.image} alt={"teren"} />
                        <Card.Body>
                            <Card.Title>{field.fields.name}</Card.Title>
                            <Card.Text>
                                {field.fields.details}
                            </Card.Text>
                            <Card.Text>
                                Location: {field.fields.address}
                            </Card.Text>
                            <EditFieldModal />
                            <DeleteConfirmation field_id={field.pk} getf={props.getf}/>

                        </Card.Body>
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default Field;