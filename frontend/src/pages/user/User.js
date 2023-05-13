import React from 'react';
import "./User.css";

//components
import Sidebar from "../../components/navigation/Sidebar";
import FieldCard from "../../components/user/FieldCard";

function Dashboard() {
    return (
        <div style={{ display: 'flex' }}>
            <div style={{ position: 'fixed' }}>
                <Sidebar />
            </div>
            <div style={{ marginLeft: '27rem', marginTop: '2rem' }}>
                <h1>Dashboard</h1>
                <div className="fieldCards">
                    <FieldCard />
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
