import React from 'react';

//components
import AdminSidebar from "../components/navigation/AdminSidebar";

function NoPage() {
    return (
        <div style={{ display: 'flex' }}>
            <div style={{ marginLeft: '27rem', marginTop: '2rem' }}>
                <h1>Page not found</h1>
            </div>
        </div>
    );
}

export default NoPage;