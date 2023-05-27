import React from 'react';

//components
import RenterSidebar from "../../components/navigation/RenterSidebar";
import RenterAccountOverview from "../../components/renter/RenterAccountOverview";

function RenterAccount() {
    return (
        <div style={{ display: 'flex' }}>
            <RenterSidebar />
            <div className="renter-page">
                <h1>Account</h1>
                <h5>Edit you account information here.</h5>
                <RenterAccountOverview/>
            </div>
        </div>
    );
}

export default RenterAccount;