import "./index.css";
import experiencia from "./experiencia.json";

export default function Experiencias() {
    return (
        <div className="container meu_container">
            {experiencia.map(item => (
                <div>
                    <div className="empresa">
                    <img src={item.logo_empresa} alt={item.logo_alt} className="logo_empresa"></img>
                    <h3 className="empresa">{item.empresa}</h3>
                </div>
                <div className="meu_cargo">
                    <h4 className="cargo">{item.cargo}</h4>
                    <p className="descricao">{item.descricao}</p>
                </div>
                </div>
            ))}
        </div>
    )
}



