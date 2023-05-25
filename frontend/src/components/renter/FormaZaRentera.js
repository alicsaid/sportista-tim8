import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, {useState} from "react";
import axios from "axios";
import {connect} from "react-redux";
import {Navigate} from "react-router-dom";
import {SERVER_URL} from "../../auth/Consts";

function Forma(props,{user, isAuthenticated}) {
    var objekat;
    const [sport,setSport] = useState("");
    const [name,setName] = useState("");
    const [location,setLocation] = useState("");
    const [price,setPrice] = useState("");
    const [img,setImg] = useState("");
    const [description,setDescription] = useState("");
    const [hasSports, setHasSports] = useState([]);
    const [gotData, setGotData] = useState(false);
    if(!gotData)
        axios.get( `${SERVER_URL}/daj_sportove`).then((res) => {
            setHasSports(res.data)
            setGotData(true)
        })
    console.log(img)
    if(props.user != null){
        objekat ={
            user:props.user.id,
            sport:sport,
            name:name,
            price:price,
            location:location,
            img:img,
            description:description
        }
    }

    function posalji(event) {
        event.preventDefault();
        console.log(objekat);

        axios.post('http://127.0.0.1:8000/renter/spremi', objekat)
            .then(response => {
                console.log(response.data);
                // Handle the successful response
            })
            .catch(error => {
                console.error(error);
                // Handle the error
            });
    }
    return (
        <Form onSubmit={posalji} encType="multipart/form-data" >

            <Form.Group className="mb-1" controlId="formBasicSport">
                <Form.Label>Sport</Form.Label>
                <Form.Select aria-label="Default select example" onChange={(e)=>{setSport(e.target.value)}}>
                    <option>Select sport</option>
                    {hasSports.map((sport) => (
                        <option value={sport.pk}>{sport.fields.name}</option>
                    ))}
                </Form.Select>
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
            <div style={{textAlign: "center"}}>
            <Button variant="outline-success" type="submit" onClick={props.closeModal} style={{width: "53%"}}>
                {props.dodaj}
            </Button>
            </div>
        </Form>
    );
}
const mapStateToProps = state => ({isAuthenticated: state.auth.isAuthenticated, user : state.auth.user});


export default connect(mapStateToProps,null)(Forma);