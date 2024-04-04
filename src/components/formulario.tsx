import IFormulario from "../interfaces/IFormulario";

const Formulario = (props: IFormulario) => {
    const submitTexto = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault();
        props.setTexto(valor);
    }

    let valor = props.texto;

    return (
        <form onSubmit={submitTexto}>
            <input className="text-black text-xl rounded w-auto" type="text" onChange={evento => valor=evento.target.value} required/>
        </form>
    );
}

export default Formulario;