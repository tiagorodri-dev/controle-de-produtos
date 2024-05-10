import React from "react";
import { useState } from "react";
import "./style.css";

export default function DataHeader() {

    const [currentDate] = useState(new Date().toLocaleDateString());

    return (
        <>
            <section>
                <h2>Avarias</h2>

                <div className="avaria-dados">
                    <div>
                        <span className="title">Empresa:</span>
                        <input type="text" className="empresa"/>
                    </div>

                    <div>
                        <span className="title">Data:</span>
                        <span>{currentDate}</span>
                    </div>
                </div>
            </section>
        </>
    )
}