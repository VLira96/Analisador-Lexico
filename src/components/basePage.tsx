import { useState } from "react";
import Formulario from "./formulario";
import IBasePage from "../interfaces/IBasePage";

const BasePage = (props: IBasePage) => {
    const [texto, setTexto] = useState<string>('');

    const respostaDaVerificacao = props.verificacao(props.alfabeto, texto);

    return (
        <>
            <div className="flex flex-col items-center gap-10">
                <h1 className="text-2xl">{props.titulo}</h1>
                {/* Analizador Léxico */}
                <div className="flex flex-col items-center gap-4">
                    <Formulario setTexto={setTexto} texto={texto} />
                    <p className={`rounded-full px-3 py-1 text-black ${respostaDaVerificacao === 'Termos válidos' ? 'bg-correto' : 'bg-incorreto'}`}>{respostaDaVerificacao}</p>
                </div>
            </div>
            <section className="flex flex-col items-center gap-4">
                <h2 className="text-xl">Os termos que se encontram no alfabeto são os seguintes:</h2>
                <p>{props.listaParagrafo}</p>
                {/* japonesa, sombria, franja, baixa, louca, pod, fumaça, doença, ar, preto, matador, muralha, monarca, maluco, maravilha, macaco, prego, martelo, parafuso, pires, cadeira, bateria, caneta, teste, trave, brinquedo, jogo, dança, amar, mel, qualquer, palavra, serve, pegue, leve, mulher, controle, moto, quadro, tomada, sexo, marin, abatedouro, gostoso, ligue, abacaxi, laranja, carlos, pipoca, sabonete. */}
            </section>
        </>
    );
}

export default BasePage;