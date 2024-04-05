import { BrowserRouter, Route, Routes } from "react-router-dom";
import Testes from "./pages/testes";
import Case from "./pages/case";
import NoCase from "./pages/caseIn";
import Header from "./components/header";
import Erro404 from "./pages/erro404";

function App() {


  return (
    <BrowserRouter>
      <Header />

      <main className="m-12 flex flex-col items-center gap-16">
        <Routes>
          <Route path="/" element={<Case />} />
          <Route path="/caseinsensitive" element={<NoCase />} />
          <Route path="/testes" element={<Testes />} />
          <Route path="*" element={<Erro404 />} />
        </Routes>
      </main>

    </BrowserRouter>
  );
}

export default App;