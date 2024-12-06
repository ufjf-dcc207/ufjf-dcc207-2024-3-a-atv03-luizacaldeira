import { ReactNode } from "react";
import "./Exibicao.css";

interface ExibicaoProps {
    abertura: Date;
    fechamento: Date;
    cercado: string;
    children?: ReactNode;
}

export default function Exibicao({abertura:inicio, fechamento:fim, cercado:local, children:animais}:ExibicaoProps){
    return (
    <div className="exibicao">
        <div className="inicio">Abertura: {inicio.toLocaleString()}</div>
        <div className="fim">Fechamento: {fim.toLocaleString()}</div>
        <div className="local">Cercado: {local}</div>
        <div className="animais">{animais}</div>
    </div>
    );
}