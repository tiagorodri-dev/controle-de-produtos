import React from "react";
import logo from "../../assets/logo.png";
import "../Header/style.css";

export default function Header() {

    return (
        <>
            <img src={logo} alt="Logo" className="logo" />

            <div className="dados">
                <div>
                    {/* <span>Endereço:</span>
                    <h5>Responsável:</h5>
                    <span>Francisco Ribamar Alves Rodrigues</span> */}
                </div>
            </div>
        </>
    )
}