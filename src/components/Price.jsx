import React from "react";
import "../styles/Price.css";

function Price() {
    return (
        <div className="container_price">
            <div className="price_bloc">
                <h1 className="price_titre">Tarifs</h1>
                <div className="price_info">
                    <h3>Adultes</h3>
                    <p>Selon les performances des artistes</p>
                </div>
                <div className="price_info">
                    <h3>Enfants</h3>
                    <p> A vos risques et périls</p>
                </div>
                <div className="price_info">
                    <h3>Groupe</h3>
                    <p>Nous consulter</p>
                </div>
            </div>
        </div>
    );
};

export default Price;