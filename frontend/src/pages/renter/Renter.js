import React from 'react';

//components
import RenterSidebar from "../../components/navigation/RenterSidebar";
import Field from "../../components/renter/Field";
import AddFieldModal from '../../components/renter/AddFieldModal';
import 'boxicons';
import {ProSidebarProvider} from "react-pro-sidebar";
import {connect} from "react-redux";
import {Navigate} from "react-router-dom";
function Dashboard({user, isAuthenticated}) {
    if(!isAuthenticated && user == null)
            return (<Navigate to={"/"}/>)

    return (
        <div style={{ display: 'flex' }}>
            <RenterSidebar />
            <div style={{ marginLeft: '10px'}}>
                <h1>Dashboard</h1>
                <h3>ovdje mu treba prikazati tabelu idućih 10 zakazanih termina</h3>
            </div>

        </div>
    );
}

const mapStateToProps = state => ({isAuthenticated: state.auth.isAuthenticated, user : state.auth.user});


export default connect(mapStateToProps,null)(Dashboard);