import React from "react";

import { Link } from "react-router-dom";

const Footer = () => (
    <footer className="fixed-bottom bg-dark">
        <ul className="nav">
            <li className="nav-item">
                <Link to="/challenges" className="nav-link">Challenges</Link>
            </li>
            <li className="nav-item">
                <Link to="/news" className="nav-link">News</Link>
            </li>         
        </ul>
    </footer>    
);

export default Footer;