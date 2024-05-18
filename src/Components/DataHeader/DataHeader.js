import React, { useState } from "react";
import "./style.css";

export default function DataHeader({ setCompanyName }) {
    const [currentDate] = useState(new Date().toLocaleDateString('pt-BR').replace(/\//g, '/'));

    const handleCompanyNameChange = (event) => {
        setCompanyName(event.target.value);
    };

    return (
        <>
            <section>
                <h2>Avarias</h2>

                <div className="avaria-dados">
                    <div>
                        <span className="title">Empresa:</span>
                        <input type="text" className="empresa" onChange={handleCompanyNameChange}/>
                    </div>

                    <div>
                        <span className="title">Data:</span>
                        <span>{currentDate}</span>
                    </div>
                </div>
            </section>
        </>
    );
}
