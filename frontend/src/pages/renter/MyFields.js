import React, {useEffect, useState} from 'react';


//components
import RenterSidebar from "../../components/navigation/RenterSidebar";
import PokaznaStranica from "../../components/renter/PokaznaStranica";
import Field from "../../components/renter/Field";
import AddFieldModal from "../../components/renter/AddFieldModal";
import {connect} from "react-redux";
import {Navigate} from "react-router-dom";
import axios from "axios";

function MyFields({user,isAuthenticated}) {
    const [fields, setFields] = useState([]);
    useEffect(() => {
        getFields();
    }, [fields, user]);

    // if(!isAuthenticated && user == null)
    //     return (<Navigate to={"/"}/>)

    function getFields() {
        if(user)
        axios
            .get(`http://127.0.0.1:8000/renter/my-fields/${user.id}/`)
            .then((response) => {
                console.log(fields.length, response.data.length)
                if(fields.length !== response.data.length)
                    setFields(response.data.reverse())
            })
            .catch((error) => {
                console.error('Error fetching fields:', error);
            });
    }

    return (
        <div style={{ display: 'flex' }}>
            <RenterSidebar />
            <div style={{ marginLeft: '10px'}}>
                <Field user={user} fields={fields} getf={getFields}/>
            </div>
            <AddFieldModal props={user} getf={getFields}/>
        </div>
    );
}

const mapStateToProps = state => ({isAuthenticated: state.auth.isAuthenticated, user : state.auth.user});


export default connect(mapStateToProps,null)(MyFields);