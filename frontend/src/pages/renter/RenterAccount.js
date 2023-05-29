import React from 'react';

//components
import RenterSidebar from "../../components/navigation/RenterSidebar";
import RenterAccountOverview from "../../components/renter/RenterAccountOverview";

function RenterAccount({user,isAuthenticated}) {
    return (
        <div style={{ display: 'flex' }}>
            <RenterSidebar />
            <div className="renter-page">
                <h1>Account</h1>
                <h5>Edit you account information here.</h5>
                <RenterAccountOverview user={user}/>
            </div>
        </div>
    );
}

export default RenterAccount;