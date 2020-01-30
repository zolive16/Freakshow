import React from "react";
import "../styles/Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="container_footer">
            <div className="menu">
                <ul className="ul_footer">
                    <Link to="/">
                        <li className="li_footer">Home</li>
                    </Link>
                    <Link to="/performances">
                        <li className="li_footer">Performances</li>
                    </Link>
                    <Link to="/price">
                        <li className="li_footer">Tarifs</li>
                    </Link>
                    <Link to="/about">
                        <li className="li_footer">A propos</li>
                    </Link>
                    <Link to="/contact">
                        <li className="li_footer">Contact</li>
                    </Link>
                </ul>
            </div>
        </div>
    );
}

export default Footer;