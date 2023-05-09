import React, { useEffect } from 'react';
import "../../components/navigation/Navbar&Footer.css"
import "./Home.css"

//components
import TopNavbar from "../../components/navigation/Navbar";
import Footer from "../../components/navigation/Footer";

function MappedImage(){
    return (
        <div className="relative container-fluid d-flex justify-content-center home_slika" >
            <img src="/home_image.svg" alt="logo" className="mapped_image"/>
            <a href="/basketball"><div className="basketball"></div></a>
            <a href="/paintball"><div className="paintball"></div></a>
            <a href="/tennis"><div className="tennis"></div></a>
            <a href="/ice_skating"><div className="ice_skating"></div></a>
            <a href="/football"><div className="football"></div></a>
            <a href="/volleyball"><div className="volleyball"></div></a>
            <a href="/boxing"><div className="boxing"></div></a>
            <a href="/handball"><div className="handball"></div></a>
            <a href="/table_tennis"><div className="table_tennis"></div></a>
            <a href="/hockey"><div className="hockey"></div></a>
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
            <main className="align-items-center justify-content-center d-flex">
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