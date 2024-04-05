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
                <div className="flex flex-col items-center gap-4">
                    <Formulario setTexto={setTexto} texto={texto} />
                </div>
            </div>
                    <p className={`rounded-full px-3 py-1 text-xl text-black ${respostaDaVerificacao === 'Termos válidos' ? 'bg-correto' : 'bg-incorreto'}`}>{respostaDaVerificacao}</p>
            <section className="flex flex-col items-center gap-4">
                <h2 className="text-xl">Os termos que se encontram no alfabeto são os seguintes:</h2>
                <p>{props.listaParagrafo}</p>
            </section>
        </>
    );
}

export default BasePage;