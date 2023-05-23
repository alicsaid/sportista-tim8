import React from 'react';

//components
import UserSidebar from "../../components/navigation/UserSidebar";
import AccountForUser from "../../components/user/AccountForUser";

function UserAccount() {
    return (
        <div style={{ display: 'flex' }}>
            <UserSidebar />
            <div style={{ marginLeft: '10px'}}>
                <h1>Account</h1>
		        <AccountForUser/>
            </div>
        </div>
    );
}

export default UserAccount;