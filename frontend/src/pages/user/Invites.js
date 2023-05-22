import React from 'react';

//components
import UserSidebar from "../../components/navigation/UserSidebar";

function Invites() {
    return (
        <div style={{ display: 'flex' }}>
            <UserSidebar />
            <div style={{ marginLeft: '10px'}}>
                <h1>Invites</h1>
            </div>
        </div>
    );
}

export default Invites;