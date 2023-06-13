import React, {useEffect, useState} from 'react';
import "./User.css";

//components
import UserSidebar from "../../components/navigation/UserSidebar";
import FieldCard from "../../components/user/FieldCard";
import {connect} from "react-redux";
import {Navigate} from "react-router-dom";
import axios from "axios";

function Dashboard({user, isAuthenticated}) {
    const [fields, setFields] = useState([]);

    useEffect(() => {
        getFields();
    }, [fields, user]);
    function getFields() {
        if(user)
            axios
                .get(`http://127.0.0.1:8000/user/dashboard`)
                .then((response) => {


                    if(fields.length !== response.data.length)
                        setFields(response.data.reverse())
                })
                .catch((error) => {
                    console.error('Error fetching fields:', error);
                });
    }
    // if(!isAuthenticated && user == null)
    //     return (<Navigate to={"/"}/>)
    return (
        <div style={{ display: 'flex' }}>
                <UserSidebar />
            <div className="page-margin">
                <h1>Dashboard</h1>
                <h5>List of available fields for booking.</h5>
                <div className="fieldCards">
                    <FieldCard onlyFavorites={false} fields={fields} user={user}/>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = state => ({isAuthenticated: state.auth.isAuthenticated, user : state.auth.user});


export default connect(mapStateToProps,null)(Dashboard);
