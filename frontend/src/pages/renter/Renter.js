import React from 'react';

//components
import Sidebar from "../../components/navigation/Sidebar";
import Field from "../../components/renter/Field";
import AddFieldModal from '../../components/renter/AddFieldModal';
function Dashboard() {
    return (
        <div style={{ display: 'flex' }}>
            <Sidebar />
            <div style={{ marginLeft: '27rem', marginTop: '2rem' }}>
                <h1>Dashboard</h1>

            </div>
            
        </div>
    );
}

export default Dashboard;