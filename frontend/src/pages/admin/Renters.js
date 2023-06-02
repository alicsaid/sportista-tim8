import React from 'react';
import "./Admin.css";

//components
import AdminSidebar from "../../components/navigation/AdminSidebar";
import RentersTable from "../../components/admin/RentersTable";

function Renters() {
    return (
        <div style={{display: 'flex'}}>
            <AdminSidebar/>
            <div className="page-margin">
                <h1>Renters</h1>
                <h5>Table of registered renters.</h5>
                <RentersTable />
            </div>
        </div>
    );
}

export default Renters;
