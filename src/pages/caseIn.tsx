import listaAlfabeto from "../utils/listaAlfabeto";
import verificacaoCaseIn from "../utils/verificacaoCaseIn";
import BasePage from "../components/basePage";

const NoCase = () => {
    const listaEmString = "for, while, and, or, break, if, else, from, not, this, abstract, boolean, class, extends, double, implements, import, private, new, return, public, global, void, none, update, alter, select, inner, join, delete, join, group, by, +, -, *, /, %, ++, --, =, +=, -=, *=, /=, %=, &&, ||, !, ==, !=, <, <=, >=, (, ), {, }, [, ], :, ;, #, ', &, |, ^, ~, @, $.";
    
    return (
        <>
            <BasePage titulo="Analisador Léxico Case Insensitive" alfabeto={listaAlfabeto} listaParagrafo={listaEmString} verificacao={verificacaoCaseIn} />
        </>
    );
}

export default NoCase;