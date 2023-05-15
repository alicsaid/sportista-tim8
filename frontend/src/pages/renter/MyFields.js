import React from 'react';


//components
import Sidebar from "../../components/navigation/Sidebar";
import PokaznaStranica from "../../components/renter/PokaznaStranica";
import Field from "../../components/renter/Field";
import AddFieldModal from "../../components/renter/AddFieldModal";

function MyFields() {
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

export default MyFields;