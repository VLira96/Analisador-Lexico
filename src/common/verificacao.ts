const verificacao = (lista: string[], texto: string) => {

    const listaTexto = texto.split(' ');

    for (const termo of listaTexto) {
        if (lista.indexOf(termo) === -1) {
            return `Termo ${termo} é inválido`;
        }
    }
    return 'Termos válidos';
}

export default verificacao;