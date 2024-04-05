import listaAlfabeto from "../common/listaAlfabeto";
import verificacaoCase from "../common/verificacaoCase";
import BasePage from "../components/basePage";

const Case = () => {
    const listaEmString = "for, while, and, or, break, if, else, from, not, this, abstract, boolean, class, extends, double, implements, import, private, new, return, public, global, void, none, update, alter, select, inner, join, delete, join, group, by, +, -, *, /, %, ++, --, =, +=, -=, *=, /=, %=, &&, ||, !, ==, !=, <, <=, >=, (, ), {, }, [, ], :, ;, #, ', &, |, ^, ~, @, $."
    return (
        <BasePage titulo="Analisador Léxico Case Sensitive" alfabeto={listaAlfabeto} listaParagrafo={listaEmString} verificacao={verificacaoCase} />
    );
}

export default Case;