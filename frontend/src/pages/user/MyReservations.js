import React from 'react';

//components
import UserSidebar from "../../components/navigation/UserSidebar";

function MyReservations() {
    return (
        <div style={{ display: 'flex' }}>
            <UserSidebar />
            <div style={{ marginLeft: '10px'}}>
                <h1>My Reservations</h1>
            </div>
        </div>
    );
}

export default MyReservations;