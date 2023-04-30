import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import './Dashboard.css';

function MostRentedFields() {
    const mostRentedFields = [
        {
            name: 'Football Field',
            rentals: 23,
            image: 'https://images.unsplash.com/photo-1513104890137-74e1bcd4eb11',
        },
        {
            name: 'Basketball Court',
            rentals: 15,
            image: 'https://images.unsplash.com/photo-1512389144979-8658e8dea9f2',
        },
        {
            name: 'Tennis Court',
            rentals: 11,
            image: 'https://images.unsplash.com/photo-1533518463840-df89c08c9e7d',
        },
    ];

    return (
        <div className="most-rented-fields">
            <h1>Most Rented Fields</h1>
            <div className="most-rented-fields-container">
                {mostRentedFields.map((field, index) => (
                    <Card key={index} className="most-rented-field-card">
                        <div className="card-image" style={{ backgroundImage: `url(${field.image})` }} />
                        <Card.Header>{field.name}</Card.Header>
                        <ListGroup variant="flush">
                            <ListGroup.Item>Rentals: {field.rentals}</ListGroup.Item>
                            <ListGroup.Item>Location: TBD</ListGroup.Item>
                            <ListGroup.Item>Availability: TBD</ListGroup.Item>
                        </ListGroup>
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default MostRentedFields;
