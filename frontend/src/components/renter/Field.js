import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material'
import React from "react";

/* components */
import EditFieldModal from "./EditFieldModal";
import DeleteConfirmationModal from "./DeleteConfirmationModal";

function Field(props) {

    //console.log(props.fields[0])

    return (
        <div className="cardContainer">
            <div className="cardRow">
                {props.fields.map((field) => (
                    <Card key={field.pk} sx={{ width: '18rem', marginTop: "5rem" }}>
                        <CardMedia
                            component="img"
                            src={field.fields.image}
                            alt="teren"
                        />
                        <CardContent>
                            <Typography variant="h5" component="div">
                                {field.fields.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {field.fields.details}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Location: {field.fields.address}
                            </Typography>
                            <EditFieldModal />
                            <DeleteConfirmationModal field_id={field.pk} getf={props.getf}/>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default Field;