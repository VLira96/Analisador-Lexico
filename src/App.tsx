import { useState } from "react";
import verificacao from "./common/verificacao";
import alfabeto from "./common/listaAlfabeto";
import Formulario from "./components/formulario";

function App() {
  const [texto, setTexto] = useState<string>('');

  return (
    <>
      <main className="m-24 flex flex-col items-center gap-48">
        <div className="flex flex-col items-center gap-10">
          <h1 className="text-2xl">Analizador Léxico</h1>

          <div className="flex flex-col items-center gap-4">
            <Formulario setTexto={setTexto} />
            <p>{verificacao(alfabeto, texto)}</p>
          </div>
        </div>
        <section className="flex flex-col items-center gap-4">
          <h2 className="text-xl">Os termos que se encontram no alfabeto são os seguintes:</h2>
          <p>japonesa, sombria, franja, baixa, louca, pod, fumaça, doença, ar, preto, matador, muralha, monarca, maluco, maravilha, macaco, prego, martelo, parafuso, pires, cadeira, bateria, caneta, teste, trave, brinquedo, jogo, dança, amar, mel, qualquer, palavra, serve, pegue, leve, mulher, controle, moto, quadro, tomada, sexo, marin, abatedouro, gostoso, ligue, abacaxi, laranja, carlos, pipoca, sabonete.</p>
        </section>
      </main>
    </>
  );
}

export default App;