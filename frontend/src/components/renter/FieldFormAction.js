import Form from 'react-bootstrap/Form';
import React, {useState} from "react";
import axios from "axios";
import {connect} from "react-redux";
import {Navigate} from "react-router-dom";
import {SERVER_URL} from "../../auth/Consts";

function FieldFormAction(props, { user, isAuthenticated } ) {

    var objekat;
    const [sport,setSport] = useState("");
    const [name,setName] = useState("");
    const [location,setLocation] = useState("");
    const [price,setPrice] = useState("");
    const [images,setImages] = useState(null);
    const [description,setDescription] = useState("");
    const [hasSports, setHasSports] = useState([]);
    const [gotData, setGotData] = useState(false);

    if(!gotData)
        axios.get( `${SERVER_URL}/daj_sportove`).then((res) => {
            setHasSports(res.data)
            setGotData(true)
        })

    console.log(images)

    if(props.user != null){
        objekat ={
            user:props.user.id,
            sport:sport,
            name:name,
            price:price,
            location:location,
            img:images,
            description:description
        }
    }

    function convertImagesToStrings(fileList) {
        const promises = Array.from(fileList).map((file) => {
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onload = () => {
                    const imageData = reader.result;
                    resolve(imageData);
                };
                reader.onerror = reject;
                reader.readAsDataURL(file);
            });
        });

        return Promise.all(promises);
    }


    function posalji() {
        console.log(objekat);
        if (images) {
            convertImagesToStrings(images)
                .then((imageStrings) => {
                    axios.post('http://127.0.0.1:8000/renter/spremi', {...objekat, img:imageStrings} )
                        .then(response => {
                            console.log(response.data);
                            // Handle the successful response
                        })
                        .catch(error => {
                            console.error(error);
                            // Handle the error
                        });
                })
                .catch((error) => {
                    console.error(error);
                });
        } else {
            axios.post('http://127.0.0.1:8000/renter/spremi', objekat )
                .then(response => {
                    console.log(response.data);
                    // Handle the successful response
                })
                .catch(error => {
                    console.error(error);
                    // Handle the error
                });
        }
    }

    function callFuns(){
        posalji()
        props.closeModal()
        setTimeout(props.getF, 330)
    }

    return (
        <form encType="multipart/form-data">
            <div className="mb-1">
                <select className="custom-input" id="formBasicSport" aria-label="Default select example" onChange={(e) => { setSport(e.target.value) }}>
                    <option>Select sport</option>
                    {hasSports.map((sport) => (
                        <option value={sport.pk}>{sport.fields.name}</option>
                    ))}
                </select>
            </div>

            <div className="mb-1">
                <input className="custom-input" type="text" id="formBasicName" placeholder="Enter name" onChange={(e) => { setName(e.target.value) }} />
            </div>

            <div className="mb-1">
                <input className="custom-input" type="text" id="formBasicLocation" placeholder="Enter location" onChange={(e) => { setLocation(e.target.value) }} />
            </div>

            <div className="mb-1">
                <input className="custom-input" type="number" id="formBasicPrice" placeholder="Enter price" onChange={(e) => { setPrice(e.target.value) }} />
            </div>

            <div className="mb-1">
                <input className="custom-input" type="file" id="formBasicImg" placeholder="Enter Image" multiple onChange={(e) => { setImages(e.target.files) }} />
            </div>

            <div className="mb-3">
                <textarea className="custom-input" id="ControlTextarea1" rows={3} onChange={(e) => { setDescription(e.target.value) }}></textarea>
            </div>

            <div style={{ textAlign: "center" }}>
                <button className="custom-register-button" onClick={callFuns}>
                    {props.action}
                </button>
            </div>
        </form>
    );
}
const mapStateToProps = state => ({isAuthenticated: state.auth.isAuthenticated, user : state.auth.user});

export default connect(mapStateToProps,null)(FieldFormAction);