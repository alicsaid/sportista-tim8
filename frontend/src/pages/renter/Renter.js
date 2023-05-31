import React from 'react';
import "./Renter.css";

//components
import RenterSidebar from "../../components/navigation/RenterSidebar";
import {connect} from "react-redux";
import TableNext10Bookings from "../../components/renter/TableNext10Bookings";
function Dashboard() {

    return (
        <div style={{ display: 'flex' }}>
            <RenterSidebar />
            <div className="renter-page">
                <h1>Dashboard</h1>
                <h5>Table of your 10 next bookings.</h5>
                <TableNext10Bookings />
            </div>

        </div>
    );
}

const mapStateToProps = state => ({isAuthenticated: state.auth.isAuthenticated, user : state.auth.user});


export default connect(mapStateToProps,null)(Dashboard);