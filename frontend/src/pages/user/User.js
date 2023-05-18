import React from 'react';
import "./User.css";

//components
import UserSidebar from "../../components/navigation/UserSidebar";
import FieldCard from "../../components/user/FieldCard";

function Dashboard() {
    return (
        <div style={{ display: 'flex' }}>
                <UserSidebar />
            <div style={{ marginLeft: '10px'}}>
                <h1>Dashboard</h1>
                <div className="fieldCards">
                    <FieldCard />
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
