import "./Navbar&Footer.css";
import React from "react";

function Footer() {
    return (
        <footer className="footer">
            <div className="copyright">
                &copy; 2023 SPORTISTA - TIM 8
            </div>
            <div className="admin-login">
                <a href="http://localhost:3000/admin-login">Login as admin</a>
            </div>
        </footer>
    );
}

export default Footer;
