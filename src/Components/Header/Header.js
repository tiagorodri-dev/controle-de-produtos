import React from "react";
import logo from "../../assets/logo.png";
import "../Header/style.css";

export default function Header() {

    const handlePrint = () => {
        window.print();
    }

    return (
        <>
            <div className="dados">
                <img src={logo} alt="Logo" className="logo" />

                <button onClick={handlePrint} className="download">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"/></svg>
                </button>

                {/* <div>
                    <span>Endereço:</span>
                    <h5>Responsável:</h5>
                    <span>Francisco Ribamar Alves Rodrigues</span>
                </div> */}
            </div>
        </>
    )
}