import React from 'react';
import "./User.css";

//components
import Sidebar from "../../components/navigation/Sidebar";
import VenueCard from "./VenueCard";

function Dashboard() {
    return (
        <div style={{ display: 'flex' }}>
            <Sidebar />
            <div style={{ marginLeft: '27rem', marginTop: '2rem' }}>
                <h1>Dashboard</h1>
                <div className={"venueCards"}>
                    <VenueCard />
                </div>
            </div>
        </div>
    );
}

export default Dashboard;