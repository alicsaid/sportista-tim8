import React from 'react';

//components
import RenterSidebar from "../../components/navigation/RenterSidebar";

function Analytics() {
    return (
        <div style={{ display: 'flex' }}>
            <RenterSidebar />
            <div style={{ marginLeft: '10px'}}>
                <h1>Analytics</h1>
            </div>
        </div>
    );
}

export default Analytics;