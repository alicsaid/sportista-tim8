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
            <div className="admin-page">
                <h1>Dashboard</h1>
                <h5>Welcome to admin dashboard.</h5>
                <DashboardCharts />
                <h1 className="mt-5">Most Rented Fields</h1>
                <h5>List of your 3 most rented fields.</h5>
                <MostRentedFields />
            </div>
        </div>
    );
}

export default Dashboard;
