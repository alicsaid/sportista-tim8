import React from 'react';

//components
import UserSidebar from "../../components/navigation/UserSidebar";

function UserAccount() {
    return (
        <div style={{ display: 'flex' }}>
            <UserSidebar />
            <div style={{ marginLeft: '10px'}}>
                <h1>Account</h1>
            </div>
        </div>
    );
}

export default UserAccount;