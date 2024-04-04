import IFormulario from "../interfaces/IFormulario";

const Formulario = (props: IFormulario) => {
    const submitTexto = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault();
        props.setTexto(valor);
    }

    let valor = props.texto;

    return (
        <form className="flex flex-col items-center gap-2" onSubmit={submitTexto}>
            <textarea className="text-black text-xl rounded w-auto" cols={70} rows={4} onChange={evento => valor = evento.target.value} required></textarea>
            <button className="bg-blue-800 transition-colors  hover:bg-blue-700 px-3 py-1 rounded-full" type="submit">Verificar</button>
        </form>
    );
}

export default Formulario;