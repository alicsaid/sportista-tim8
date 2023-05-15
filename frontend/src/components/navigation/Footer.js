import "./Navbar&Footer.css";

function Footer(){
    return (
        <section className="">
            <footer className="bg-light text-center" style={{backgroundColor: "#0a4275"}}>
                <div className="container p-4 pb-0">
                    <section className="">
                        <p className="d-flex justify-content-center align-items-center">
                            <a href="/admin"><span className="me-3">Login as admin</span></a>
                        </p>
                    </section>
                </div>
                <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
                    © 2023 Copyright:
                    <span> SPORTISTA - TIM 8</span>
                </div>
            </footer>
        </section>
    );
}

export default Footer;