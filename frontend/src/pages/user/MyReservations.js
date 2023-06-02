import React from 'react';

//components
import UserSidebar from "../../components/navigation/UserSidebar";
import UserStats from "../../components/user/UserStats";
import {connect} from "react-redux";
import {Navigate} from "react-router-dom";
import MyReservationCard from "../../components/user/MyReservationCard";

function MyReservations({ user, isAuthenticated }) {

    // if(!isAuthenticated && user == null)
    //     return (<Navigate to={"/"}/>)

    const scheduled = 20;
    const played = 15;

    return (
        <div style={{ display: 'flex' }}>
            <UserSidebar />
            <div className="page-margin">
                <h1>My Reservations</h1>
                <h5>List of your bookings.</h5>
                <div className="fieldCards">
                    <MyReservationCard />
                </div>
                <div>
                    <h1 className="mt-5">Stats</h1>
                    <h5>The ratio of scheduled and played reservations.</h5>
                    <UserStats scheduled={scheduled} played={played} />
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = state => ({isAuthenticated: state.auth.isAuthenticated, user : state.auth.user});


export default connect(mapStateToProps,null)(MyReservations);