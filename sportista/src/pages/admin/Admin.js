import React from 'react';

//components
import Sidebar from "../../components/navigation/Sidebar";
import DashboardCharts from "./DashboardCharts";
import MostRentedFields from "./MostRentedFields";

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
