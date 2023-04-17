import React from 'react';

//components
import Sidebar from "../../components/navigation/Sidebar";

function MyReservations() {
    return (
        <div style={{ display: 'flex' }}>
            <Sidebar />
            <div style={{ marginLeft: '27rem', marginTop: '2rem' }}>
                <h1>MyReservations</h1>
            </div>
        </div>
    );
}

export default MyReservations;