import React from 'react';

//components
import Sidebar from "../../components/navigation/Sidebar";
import Field from "./Field";

function Dashboard() {
    return (
        <div style={{ display: 'flex' }}>
            <Sidebar />
            <div style={{ marginLeft: '27rem', marginTop: '2rem' }}>
                <Field />
            </div>
        </div>
    );
}

export default Dashboard;