import React from 'react';
import "./Admin.css";

//components
import AdminSidebar from "../../components/navigation/AdminSidebar";
import DashboardCharts from "../../components/admin/DashboardCharts";
import MostRentedFields from "../../components/admin/MostRentedFields";

function Dashboard() {
    return (
        <div style={{ display: 'flex' }}>
            <AdminSidebar />
            <div style={{marginLeft: '10px'}}>
                <h1>Dashboard</h1>
                <DashboardCharts />
                <MostRentedFields />
            </div>
        </div>
    );
}

export default Dashboard;
