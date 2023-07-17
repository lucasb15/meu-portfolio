import React from "react";
import Contato from "./Contatos";
import Apresentacao from "./Apresentacao";
import Foto from "./Foto";
import "./index.css";

export default function Home() {
    return (
        <section className="home" id="home">
            <Contato />
            <Apresentacao />
            <Foto />
        </section>
    )
}