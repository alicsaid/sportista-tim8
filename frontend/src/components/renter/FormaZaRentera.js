import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, {useState} from "react";
import axios from "axios";
import {connect} from "react-redux";
import {Navigate} from "react-router-dom";

function Forma(props,{user, isAuthenticated}) {
    const [sport,setSport] = useState("");
    const [name,setName] = useState("");
    const [location,setLocation] = useState("");
    const [price,setPrice] = useState("");
    const [img,setImg] = useState("");
    const [description,setDescription] = useState("");
    const objekat ={
        sport:sport,
        name:name,
        price:price,
        location:location,
        img:img,
        description:description
    }
    async function posalji(event) {
        event.preventDefault();
        console.log(objekat);

        await axios('http://127.0.0.1:8000/renter/spremi', {
            method: 'POST',
            headers: {'Content-Type': 'text/plain'},
            body: JSON.stringify(objekat),

        }).then(result => console.log('success====:', result))
            .catch(error => console.log('error============:', error));
    }
    return (
        <Form>
            <Form.Group className="mb-1" controlId="formBasicSport">
                <Form.Label>Sport</Form.Label>
                <Form.Control type="text" placeholder="Enter sport" onChange={(e)=>{setSport(e.target.value)}}/>
            </Form.Group>
            <Form.Group className="mb-1" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter name" onChange={(e)=>{setName(e.target.value)}}/>
            </Form.Group>

            <Form.Group className="mb-1" controlId="formBasicLocation">
                <Form.Label>Location</Form.Label>
                <Form.Control type="text" placeholder="Enter location" onChange={(e)=>{setLocation(e.target.value)}} />
            </Form.Group>
            <Form.Group className="mb-1" controlId="formBasicPrice">
                <Form.Label>Price</Form.Label>
                <Form.Control type="number" placeholder="Enter price" onChange={(e)=>{setPrice(e.target.value)}}/>
            </Form.Group>
            <Form.Group className="mb-1" controlId="formBasicImg">
                <Form.Label>Image</Form.Label>
                <Form.Control type="file" placeholder="Enter Image" onChange={(e)=>{setImg(e.target.files[0])}}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="ControlTextarea1">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows={3} onChange={(e)=>{setDescription(e.target.value)}}/>
            </Form.Group>

            <Button variant="outline-success" type="submit" onClick={posalji}>
                {props.dodaj}
            </Button>
        </Form>
    );
}
const mapStateToProps = state => ({isAuthenticated: state.auth.isAuthenticated, user : state.auth.user});


export default connect(mapStateToProps,null)(Forma);






