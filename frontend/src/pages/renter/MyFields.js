import React from 'react';


//components
import RenterSidebar from "../../components/navigation/RenterSidebar";
import PokaznaStranica from "../../components/renter/PokaznaStranica";
import Field from "../../components/renter/Field";
import AddFieldModal from "../../components/renter/AddFieldModal";

function MyFields() {
    return (
        <div style={{ display: 'flex' }}>
            <RenterSidebar />
            <div style={{ marginLeft: '10px'}}>
                <Field />
            </div>
            <AddFieldModal/>
        </div>
    );
}

export default MyFields;