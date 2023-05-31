import Card from 'react-bootstrap/Card';
import React from "react";

/* components */
import EditFieldModal from "./EditFieldModal";
import DeleteConfirmationModal from "./DeleteConfirmationModal";
import Button from "@mui/material/Button";
import {Switch} from "@mui/material";
import axios from "axios";
import {SERVER_URL} from "../../auth/Consts";

function Field(props) {


    return (
        <div className="cardContainer">
            <div className="cardRow">
                {props.fields.map((field) => (
                    <Card key={field.pk} style={{ width: '18rem', marginTop: "5rem" }}>
                        <Card.Img variant="top" src={field.fields.images.split("SPLIT")[0]} alt={"teren"} />
                        <Card.Body>
                            <Card.Title>{field.fields.name}</Card.Title>
                            <Card.Text>
                                {field.fields.details}
                            </Card.Text>
                            <Card.Text>
                                Price: {field.fields.price}
                            </Card.Text>
                            <Card.Text>
                                Location: {field.fields.address}
                            </Card.Text>
                            <EditFieldModal field_id={field.pk} getf={props.getf}/>
                            <DeleteConfirmationModal field_id={field.pk} getf={props.getf}/>
                        </Card.Body>
                        <Card.Footer className={"justify-content-between align-items-center d-flex"}>
                            Lock:
                            {field.fields.lock &&
                                <Switch  defaultChecked={true} onChange={(event, checked) => {axios.post(`${SERVER_URL}/renter/lock_field/${field.pk}/${checked ? 1 : 0}/`)}} />
                            }
                            {!field.fields.lock &&
                                <Switch onChange={(event, checked) => {axios.post(`${SERVER_URL}/renter/lock_field/${field.pk}/${checked ? 1 : 0}/`)}} />
                            }
                        </Card.Footer>
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default Field;