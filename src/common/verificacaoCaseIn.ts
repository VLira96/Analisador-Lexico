const verificacaoCaseIn = (lista: string[], texto: string) => {
    const listaTexto = texto.toLowerCase().split(/\s+/);

    for (const termo of listaTexto) {
        if (lista.indexOf(termo) === -1) {
            return `Termo ${termo} é inválido`;
        }
    }
    return 'Termos válidos';
}

export default verificacaoCaseIn;