import listaAlfabetoTeste from "../common/listaAlfabetoTestes";
import verificacaoNoCase from "../common/verificacaoCaseIn";
import BasePage from "../components/basePage";

const Testes = () => {
    const listaEmString = "japonesa, sombria, franja, baixa, louca, pod, fumaça, doença, ar, preto, matador, muralha, monarca, maluco, maravilha, macaco, prego, martelo, parafuso, pires, cadeira, bateria, caneta, teste, trave, brinquedo, jogo, dança, amar, mel, qualquer, palavra, serve, pegue, leve, mulher, controle, moto, quadro, tomada, sexo, marin, abatedouro, gostoso, ligue, abacaxi, laranja, carlos, pipoca, sabonete."

    return (
        <>
            <BasePage titulo="Analisador Léxico Case Insensitive (para testes)" alfabeto={listaAlfabetoTeste} listaParagrafo={listaEmString} verificacao={verificacaoNoCase} />
        </>
    );
}

export default Testes;