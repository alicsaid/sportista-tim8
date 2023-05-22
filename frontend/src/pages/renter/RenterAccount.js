import React from 'react';

//components
import RenterSidebar from "../../components/navigation/RenterSidebar";

function RenterAccount() {
    return (
        <div style={{ display: 'flex' }}>
            <RenterSidebar />
            <div style={{ marginLeft: '10px'}}>
                <h1>Account</h1>
            </div>
        </div>
    );
}

export default RenterAccount;