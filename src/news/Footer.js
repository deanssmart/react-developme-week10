import React from "react";

import { Link } from "react-router-dom";

const Footer = () => (
    <footer className="fixed-bottom bg-dark">
        <ul className="nav">
            <li className="nav-item">
                <Link to="/challenges" className="nav-link">Challenges</Link>
            </li>
            <li className="nav-item">
                <Link to="/hooks" className="nav-link">Hook Challenges</Link>
            </li> 
            <li className="nav-item">
                <Link to="/reducer" className="nav-link">Reducer Challenges</Link>
            </li>                                 
            <li className="nav-item">
                <Link to="/news" className="nav-link">News</Link>
            </li>   
            <li className="nav-item">
                <Link to="/news/create" className="nav-link">Create Article</Link>
            </li>                          
        </ul>
    </footer>    
);

export default Footer;