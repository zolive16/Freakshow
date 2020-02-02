import React from "react";
import "../styles/NavBar.css";
import { Link } from "react-router-dom";
import images from "../assets/images.jpeg";

const Navbar = () => {
    return (
        <div className="container">
            <div className="logo">FREAKSHOW</div>
            <img src={images} alt="" className="image_nav" />
            <div className="menu">
                <ul className="ul">
                    <Link to="/">
                        <li className="li">Home</li>
                    </Link>
                    <Link to="/performances">
                        <li className="li">Performances</li>
                    </Link>
                    <Link to="/price">
                        <li className="li">Tarifs</li>
                    </Link>
                    <Link to="/about">
                        <li className="li">A propos</li>
                    </Link>
                    <Link to="/contact">
                        <li className="li">Contact</li>
                    </Link>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;