import "./App.css";
import { Banner } from "./componentes/Banner";
import { FormularioDeEvento } from "./componentes/FormularioDeEvento";
import { CardEvento } from "./componentes/CardEvento";
import { useState } from "react";

function App() {
  // Eventos pré-carregados
  const eventosIniciais = [
    // FRONT-END
    {
      capa: "https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_1.png",
      tema: "Front-End",
      data: "20/05/2025",
      titulo: "Mulheres no Front",
      descricao:
        "Pixel & Code: Valorizando e impulsionando a participação feminina no desenvolvimento front-end.",
    },
    {
      capa: "https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_2.png",
      tema: "Front-End",
      data: "20/05/2025",
      titulo: "Meetup Front-End",
      descricao:
        "Meetup unindo design e desenvolvimento front-end para explorar tendências em UI.",
    },

    // BACK-END
    {
      capa: "https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_extra_9.png",
      tema: "Back-End",
      data: "20/05/2025",
      titulo: "Back-End Masters",
      descricao:
        "Code to Core: Performance e inovação no back-end, conectando especialistas e entusiastas.",
    },
    {
      capa: "https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_4.png",
      tema: "Back-End",
      data: "20/05/2025",
      titulo: "Server Side Summit",
      descricao:
        "Workshop que explora a essência do back-end, escalabilidade e boas práticas.",
    },

    // DEVOPS
    {
      capa: "https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_5.png",
      tema: "DevOps",
      data: "20/05/2025",
      titulo: "DevOps Evolution",
      descricao:
        "Congresso sobre automação, CI/CD, cultura DevOps, tendências e inovações.",
    },

    // INTELIGÊNCIA ARTIFICIAL
    {
      capa: "https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_6.png",
      tema: "Inteligência Artificial",
      data: "20/05/2025",
      titulo: "Deep Learning Days",
      descricao: "Imersão sobre IA, redes neurais e aprendizado profundo.",
    },
    {
      capa: "https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_7.png",
      tema: "Inteligência Artificial",
      data: "20/05/2025",
      titulo: "IA na palma da mão",
      descricao:
        "Workshop IA em dispositivos móveis, aplicando a tecnologia em soluções acessíveis.",
    },
    {
      capa: "https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_8.png",
      tema: "Inteligência Artificial",
      data: "20/05/2025",
      titulo: "IA Segura e Acessível",
      descricao:
        "Palestra sobre segurança e inclusão em soluções baseadas em inteligência artificial.",
    },

    // DATA SCIENCE
    {
      capa: "https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_9.png",
      tema: "Data Science",
      data: "20/05/2025",
      titulo: "Data Pulse",
      descricao:
        "Congresso sobre dados nas decisões estratégicas, análise e inovações da ciência de dados.",
    },
    {
      capa: "https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_10.png",
      tema: "Data Science",
      data: "20/05/2025",
      titulo: "Data Revolution",
      descricao:
        "Palestra sobre últimas tendências em big data, análise e inteligência empresarial.",
    },
    {
      capa: "https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_11.png",
      tema: "Data Science",
      data: "20/05/2025",
      titulo: "Driven by Data",
      descricao:
        "Minicurso sobre como dados impulsionam decisões e inovações para o futuro.",
    },
    {
      capa: "https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_12.png",
      tema: "Data Science",
      data: "20/05/2025",
      titulo: "SQL Summit",
      descricao:
        "Ciclo de palestras com especialistas do universo dos bancos de dados SQL.",
    },

    // CLOUD
    {
      capa: "https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_13.png",
      tema: "Cloud",
      data: "20/05/2025",
      titulo: "SkyTech Summit",
      descricao:
        "Palestra sobre tendências em computação em nuvem, escalabilidade e infraestrutura.",
    },
    {
      capa: "https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_14.png",
      tema: "Cloud",
      data: "20/05/2025",
      titulo: "Mundo Cloud",
      descricao:
        "Encontro de especialistas e entusiastas para discutir novidades da tecnologia cloud.",
    },
  ];

  const [eventos, setEventos] = useState(eventosIniciais);

  function adicionarEvento(novoEvento) {
    setEventos([...eventos, novoEvento]);
  }

  // Cria array de temas únicos a partir dos eventos
  const temasUnicos = [...new Set(eventos.map((evento) => evento.tema))];

  return (
    <main>
      <header>
        <img src="/logo.png" alt="Logo" />
      </header>

      <Banner />

      <FormularioDeEvento adicionarEvento={adicionarEvento} />

      {temasUnicos.length > 0 ? (
        temasUnicos.map((nomeTema, index) => (
          <section key={index}>
            <h3 className="titulo-tema">{nomeTema}</h3>
            <div className="eventos-do-tema">
              {eventos
                .filter((evento) => evento.tema === nomeTema)
                .map((evento, i) => (
                  <CardEvento evento={evento} key={i} />
                ))}
            </div>
          </section>
        ))
      ) : (
        <p>Nenhum evento criado ainda.</p>
      )}

      <footer>
        <p>© 2025 TecBoard. Todos os direitos reservados.</p>
      </footer>
    </main>
  );
}

export default App;
