import "./App.css";
import { Banner } from "./componentes/Banner";
import { FormularioDeEvento } from "./componentes/FormularioDeEvento";
import { CardEvento } from "./componentes/CardEvento";
import { useState } from "react";

function App() {
  const [eventos, setEventos] = useState([
    // Coloque aqui os eventos iniciais
  ]);

  function adicionarEvento(novoEvento) {
    setEventos([...eventos, novoEvento]);
  }

  return (
    <main>
      <header>
        <img src="/logo.png" alt="Logo" />
      </header>
      <Banner />

      <FormularioDeEvento adicionarEvento={adicionarEvento} />

      {/* Passa o array atualizado para o CardEvento */}
      <CardEvento eventos={eventos} />

      <footer>
        <p>© 2025 TecBoard. Todos os direitos reservados.</p>
      </footer>
    </main>
  );
}

export default App;
