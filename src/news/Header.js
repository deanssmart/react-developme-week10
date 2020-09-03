import React from "react";

import { Link } from "react-router-dom";

const Header = () => (
    <header className="jumbotron jumbotron-fluid">
        <div className="container-fluid">
            <h1 className="display-4">
            <Link to="/news" className="text-primary p-4">Bloggo Magnifico</Link>
            </h1>
        </div>
    </header>    
);

export default Header;