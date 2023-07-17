import './index.css';

export default function DarkMode() {
    return (
        <div className="modo_escuro">
            <input
                type="checkbox"
                id="botao_darkmode"
            />
            <label htmlFor="botao_darkmode">
                <img src="/assets/dark_white/Sol.svg" alt="Foto Sol - Modo Claro"/>
                <img src="/assets/dark_white/Lua.svg" alt="Foto Lua - Modo Escuro"/>
            </label>
        </div>
    )
}