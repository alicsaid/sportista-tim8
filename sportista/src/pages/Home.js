import React from 'react';

//components
import Navbar from "../components/navigation/Navbar";

export default function Home() {
    return (
        <div>
            <Navbar />
            <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <h1>Home</h1>
            </div>
        </div>
    );
};