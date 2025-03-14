import "./telaDeCarregamento.css";
import { useState, useEffect } from "react";

export default function TelaDeCarregamento({ resultadoDoCarregamento }) {
  const [paginaCarregada, setPaginaCarregada] = useState(false);
  const [ocultarTela, setOcultarTela] = useState(false);
  const [ocultarConteudo, setOcultarConteudo] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setOcultarConteudo(true), 13000);
    const timer2 = setTimeout(() => setPaginaCarregada(true), 15000);
    const timer3 = setTimeout(() => setOcultarTela(true), 16000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  useEffect(() => {
    if (paginaCarregada) {
      resultadoDoCarregamento(true);
    }
  }, [paginaCarregada, resultadoDoCarregamento]);

  return (
    <section className={`telaDeCarregamento ${ocultarTela ? "telaDeCarregamento--ocultar" : ""}`}>
      <div className={`conteudo-carregamento ${ocultarConteudo ? "conteudo-carregamento--ocultar" : ""}`}>
        <h1 className="tituloCarregamento">Link Hub</h1>

        <p className="textoCarregamento">
          Devido ao fundo animado em 3D, dispositivos com menor desempenho podem
          apresentar lentidão.
        </p>
        <p className="textoCarregamento">
          Enquanto não otimizo isso, peço desculpas pelo incômodo e agradeço a
          compreensão
        </p>

        <ul className="loader">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>

        <p className="LegendaCarregando"></p>

        <div className="LogotipoCarregamento">
          <img
            className="Logo"
            src="/imagens/Eu/LOGO.png"
            alt="Logo"
            width="100"
          />
        </div>
      </div>
    </section>
  );
}