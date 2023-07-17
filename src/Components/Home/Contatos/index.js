import "./index.css";
import Contatos from "./contatos.json";

export default function Contato() {
    return (
        <div className="contatos">
            {Contatos.map(item => (
                <a href={item.src}><img src={item.imagem} alt={item.nome}></img></a>
            ))}
        </div>
    )
}
/*
<Nav.Link href={item.src}>{item.nome}</Nav.Link>*/