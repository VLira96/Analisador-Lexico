import IFormulario from "../interfaces/IFormulario";

const Formulario = (props: IFormulario) => {
    const submitTexto = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault();
    }

    return (
        <form onSubmit={submitTexto}>
            <input className="text-black text-xl rounded w-auto" type="text" onChange={evento => props.setTexto(evento.target.value)} required/>
        </form>
    );
}

export default Formulario;