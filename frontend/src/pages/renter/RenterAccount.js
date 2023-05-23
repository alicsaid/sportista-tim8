import React from 'react';

//components
import RenterSidebar from "../../components/navigation/RenterSidebar";
import AccountForRenter from "../../components/renter/AccountForRenter";

function RenterAccount() {
    return (
        <div style={{ display: 'flex' }}>
            <RenterSidebar />
            <div style={{ marginLeft: '10px'}}>
                <h1>Account</h1>
                <AccountForRenter/>
            </div>
        </div>
    );
}

export default RenterAccount;