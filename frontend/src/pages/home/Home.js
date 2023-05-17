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
            <a href="/sport/basketball"><div className="basketball" title="basketball"></div></a>
            <a href="/sport/paintball"><div className="paintball" title="paintball and airsoft"></div></a>
            <a href="/sport/tennis"><div className="tennis" title="tennis"></div></a>
            <a href="/sport/ice_skating"><div className="ice_skating" title="ice skating"></div></a>
            <a href="/sport/football"><div className="football" title="football"></div></a>
            <a href="/sport/volleyball"><div className="volleyball" title="volleyball"></div></a>
            <a href="/sport/boxing"><div className="boxing" title="boxing"></div></a>
            <a href="/sport/handball"><div className="handball" title="handball"></div></a>
            <a href="/sport/table_tennis"><div className="table_tennis" title="table tennis"></div></a>
            <a href="/sport/hockey"><div className="hockey" title="hockey"></div></a>
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
                <h4 className="display-6 text-center m-3 fw-bold">Get ready for some sports!</h4>
                <h4 className="display-6 text-center mb-5 fw-bold">Book your favorite field in just a few clicks.</h4>
                <div className="justify-content-center d-flex">
                    <MappedImage />
                </div>
                <div style={{width: '100%', marginTop: '10px'}}>
                    <h2 className="display-5" style={{textAlign: 'center'}}>Click the sport you want to see!</h2>
                    <div className="admin-login">
                        <a href="../admin" className="admin-link">Login as admin</a>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};
