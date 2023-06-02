import React from 'react';
import "./Admin.css";

//components
import AdminSidebar from "../../components/navigation/AdminSidebar";
import DashboardCharts from "../../components/admin/DashboardCharts";
import MostRentedFields from "../../components/admin/MostRentedFields";

function Inbox() {
    return (
        <div style={{ display: 'flex' }}>
            <AdminSidebar />
            <div className="page-margin">
                <h1>Inbox</h1>
                <h5>All messages recieved from users and renters.</h5>
                <h4>TABELA poruka + MODAL na kliknutu da se otvori i pročita</h4>
            </div>
        </div>
    );
}

export default Inbox;
