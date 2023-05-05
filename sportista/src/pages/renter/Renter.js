import React from 'react';

//components
import Sidebar from "../../components/navigation/Sidebar";
import Field from "./Field";
import AddFieldModal from './AddFieldModal';
function Dashboard() {
    return (
        <div style={{ display: 'flex' }}>
            <Sidebar />
            <div style={{ marginLeft: '27rem', marginTop: '2rem' }}>
                <Field />
            </div>
            <AddFieldModal/>
        </div>
    );
}

export default Dashboard;