const verificacao = (lista: string[], texto: string) => {

    // não é sensivel a maiúsculas ou minúsculas, por razões de escolha mesmo
    const listaTexto = texto.toLowerCase().split(/\s+/);

    for (const termo of listaTexto) {
        if (lista.indexOf(termo) === -1) {
            return `Termo ${termo} é inválido`;
        }
    }
    return 'Termos válidos';
}

export default verificacao;