import React from 'react';

//components
import RenterSidebar from "../../components/navigation/RenterSidebar";
import {Navigate} from "react-router-dom";
import {connect} from "react-redux";

function Analytics({isAuthenticated,user}) {
    if(!isAuthenticated && user == null)
        return (<Navigate to={"/"}/>)
    return (
        <div style={{ display: 'flex' }}>
            <RenterSidebar />
            <div style={{ marginLeft: '10px'}}>
                <h1>Analytics</h1>
            </div>
        </div>
    );
}
const mapStateToProps = state => ({isAuthenticated: state.auth.isAuthenticated, user : state.auth.user});


export default connect(mapStateToProps,null)(Analytics);

