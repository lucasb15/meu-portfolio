import skill from "./skills.json";
import "./index.css";

export default function Skills() {
    return (
        <div className="container meu_container">
            <h3 className="titulo">Minhas Skills ( )</h3>
            <div className="card_skills">
                {skill.map(item => (
                    <div className="card_skill">
                        <img src={item.src} alt={item.nome} className="logo"></img>
                        <p className="nome_skill">{item.nome}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}