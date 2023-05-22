import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardContent, Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

function Basketball(props) {

    //const [basketballFields, setBasketballFields] = useState([]);
    const [fields, setFields] = useState([]);

    // useEffect(() => {
    //     getBasketballFields();
    // }, []);
    //
    // function getBasketballFields() {
    //     axios
    //         .get('http://127.0.0.1:8000/basketballFields/')
    //         .then((response) => {
    //             setBasketballFields(response.data);
    //         })
    //         .catch((error) => {
    //             console.error('Error fetching basketball fields:', error);
    //         });
    // }

    useEffect(() => {
        getFields();
    }, []);

    function getFields() {
        axios
            .get('http://127.0.0.1:8000/sport/1')
            .then((response) => {
                setFields(response.data);
                console.log(fields)
            })
            .catch((error) => {
                console.error('Error fetching fields:', error);
            });
    }

    return (
        <div>
            <h1>{props.header}</h1>
            {/*basketballFields.map(field => (
                <Card key={field.fields.id} sx={{ margin: '10px', maxWidth: 300 }}>
                    <img src={field.fields.image} alt={field.fields.name} style={{ width: '100%' }} />
                    <CardContent>
                        <Typography variant="h5" component="div">
                            Field name
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Location: {field.fields.address}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Price: {field.fields.price}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Rating: 4.5/5 {field.fields.grades}
                            <StarIcon />
                        </Typography>
                    </CardContent>
                </Card>
            ))*/}
        </div>
    );
}

export default Basketball;
