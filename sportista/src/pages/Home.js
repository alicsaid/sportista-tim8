import React from 'react';
import "../components/basics/Basic.css"
import "./Home.css"

//components
import Navbar from "../components/navigation/Navbar";
import {Header, Footer} from "../components/basics/Basic"

function MappedImage(){
    return (
        <div className="relative container-fluid d-flex justify-content-center" >
            <img src="logo1024.png" className="mapped_image"/>
            <a href="/link1"><div className="basketball1"></div></a>
            <a href="/link1"><div className="tennis1"></div></a>
            <a href="/link1"><div className="football1"></div></a>
            <a href="/link1"><div className="volleyball1"></div></a>
            <a href="/link1"><div className="tennis2"></div></a>
            <a href="/link1"><div className="handball"></div></a>
            <a href="/link2"><div className="basketball2"></div></a>
            <a href="/link1"><div className="football2"></div></a>
            <a href="/link1"><div className="volleyball2"></div></a>
        </div>
    );
}
export default function Home() {
    return (
        <div>
            <Header />
                <main>
                    <h2 className="display-3 text-center m-5 fw-bold">Get ready for some sports! Book your favorite venue in just a few clicks.</h2>
                    <div className="justify-content-center d-flex">
                        <MappedImage />
                    </div>
                    <h2 className="display-3 text-center m-5">Click the sport you want to see!</h2>

                </main>
            <Footer />
            <script>imageMapResize();</script>
        </div>
    );
};

