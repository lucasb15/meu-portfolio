import skill from "./skills.json";
import "./index.css";

export default function Skills() {
    return (
        <div className="container_sobre">
            <h3 className="titulo">Minhas Skills ( )</h3>
            <div className="card_skills">
                {skill.map(item => (
                    <div className="card">
                        <img src={item.src} alt={item.nome} className="logo"></img>
                        <p className="nome_skill">{item.nome}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}