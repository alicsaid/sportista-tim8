import React, { useState } from 'react';
import "./Admin.css";

//components
import AdminSidebar from "../../components/navigation/AdminSidebar";
import UsersTable from "../../components/admin/UsersTable";

function Users() {

    return (
        <div style={{ display: 'flex' }}>
            <AdminSidebar />
            <div className="admin-page">
                <h1>Users</h1>
                <h5>Table of registered users.</h5>
                <UsersTable />
            </div>
        </div>
    );
}

export default Users;
