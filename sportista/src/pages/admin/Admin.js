import React from 'react';
import "./Admin.css";

//components
import Sidebar from "../../components/navigation/Sidebar";
import DashboardCharts from "../../components/admin/DashboardCharts";
import MostRentedFields from "../../components/admin/MostRentedFields";

function Dashboard() {
    return (
        <div style={{ display: 'flex' }}>
            <Sidebar />
            <div style={{ marginLeft: '27rem', marginTop: '2rem', overflowY: 'auto', height: 'calc(100vh - 5rem)' }}>
                <h1>Dashboard</h1>
                <DashboardCharts />
                <MostRentedFields />
            </div>
        </div>
    );
}

export default Dashboard;
