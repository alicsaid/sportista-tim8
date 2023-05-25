import Card from 'react-bootstrap/Card';
import React, {useEffect, useState} from "react";
import {CardContent, Typography} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import axios from "axios";

function Field(props) {

    const [fields, setFields] = useState([]);

    useEffect(() => {
        getFields();
    }, [fields]);

    function getFields() {
        axios
            .get(`http://127.0.0.1:8000/renter/my-fields/${props.user.id}/`)
            .then((response) => {
                setFields(response.data);
                // console.log(fields)
                // console.log(response.data)
            })
            .catch((error) => {
                console.error('Error fetching fields:', error);
            });
    }
    const [showMore, setShowMore] = useState(false);
    return (
        <div className="cardContainer">
            <div className="cardRow">
                {fields.map((field) => (
                    <Card key={field.fields.id} sx={{ marginLeft: '10px', maxWidth: 20 }}>
                        <img
                            src={require('../../resources/images/teren1.jpg')}
                            alt={field.fields.name}
                            style={{ width: '300px'}}
                        />
                        <CardContent>
                            <Typography variant="h5" component="div">
                                {field.fields.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Location: {field.fields.address}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Details: {field.fields.details}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Rating: 4.5/5 {field.fields.grades}
                                <StarIcon />
                            </Typography>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default Field;