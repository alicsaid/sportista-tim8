import React from 'react';


//components
import Sidebar from "../../components/navigation/Sidebar";
import PokaznaStranica from "../../components/renter/PokaznaStranica";

function MyFields() {
    return (
        <div style={{ display: 'flex' }}>
            <Sidebar />
            <div style={{ marginLeft: '27rem', marginTop: '2rem' }}>
                <PokaznaStranica />
            </div>
        </div>
    );
}

export default MyFields;