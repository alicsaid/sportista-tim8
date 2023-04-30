import React, { useEffect } from 'react';
import "../../components/navigation/Navbar&Footer.css"
import "./Home.css"

//components
import TopNavbar from "../../components/navigation/Navbar";
import Footer from "../../components/navigation/Footer";

function MappedImage(){
    return (
        <div className="relative container-fluid d-flex justify-content-center" >
            <img src="/logo1024.png" alt="logo" className="mapped_image"/>
            <a href="/link1"><div className="basketball1"></div></a>
            <a href="/link1"><div className="tennis1"></div></a>
            <a href="/link1"><div className="football1"></div></a>
            <a href="/link1"><div className="volleyball1"></div></a>
            <a href="/link1"><div className="tennis2"></div></a>
            <a href="/link1"><div className="handball"></div></a>
            <a href="/link2"><div className="basketball2"></div></a>
            <a href="/link1"><div className="football2"></div></a>
            <a href="/link3"><div className="volleyball2"></div></a>
        </div>
    );
}

export default function Home() {
    useEffect(() => {
        const imageMapResize = () => {
            // your imageMapResize code here
        }
        imageMapResize();
    }, []);

    return (
        <div>
            <TopNavbar />
            <main>
                <h2 className="display-6 text-center m-5 fw-bold">Get ready for some sports! Book your favorite field in just a few clicks.</h2>
                <div className="justify-content-center d-flex">
                    <MappedImage />
                </div>
                <h2 className="display-5 text-center m-5">Click the sport you want to see!</h2>

            </main>
            <Footer />
        </div>
    );
};
