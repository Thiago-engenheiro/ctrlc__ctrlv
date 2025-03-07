import "./links.css";
import "./linksResponsividade.css";
import "./botaoFiltro.css";
import "./card.css";

import { useState } from "react";

export default function Links() {
  const [ativado, setAtividado] = useState(true);
  const [ativadoBotao, setAtividadoBotao] = useState(false);

  const mudarEstadoDeAtivado = () => {
    setAtividado(!ativado);
    console.log("Ativado:", ativado);
  };

  return (
    <>
      <section className="links">
        <div className="continerLinks">
          <h3 className="tituloFiltro">Seletores de busca </h3>

          <div className="filtros">
            <div className="continerFiltro">
              <label className="tituloDoFiltro">Todos os links</label>
              <label class="switch">
                <input type="checkbox" onChange={mudarEstadoDeAtivado} />
                <span class="slider"></span>
              </label>
            </div>

            <div className="continerFiltro">
              <button disabled={ativado} className="botaoFiltro desativado">
                <img
                  className="iconeImg"
                  src="/imagens/iconeTag/code-svgrepo-com.svg"
                  alt="Icone"
                ></img>
                Codigo
                <img
                  className="setaImg"
                  src="/imagens/iconeTag/seta.png"
                  alt="Icone"
                ></img>
              </button>

              <div className="continerSubFiltro"></div>
            </div>

            <div className="continerFiltro">
              <button disabled={ativado} className="botaoFiltro desativado">
                <img
                  className="iconeImg"
                  src="/imagens/iconeTag/code-svgrepo-com.svg"
                  alt="Icone"
                ></img>
                Cores
                <img
                  className="setaImg"
                  src="/imagens/iconeTag/seta.png"
                  alt="Icone"
                ></img>
              </button>
            </div>

            <div className="continerFiltro">
              <button disabled={ativado} className="botaoFiltro desativado">
                <img
                  className="iconeImg"
                  src="/imagens/iconeTag/code-svgrepo-com.svg"
                  alt="Icone"
                ></img>
                Fontes
                <img
                  className="setaImg"
                  src="/imagens/iconeTag/seta.png"
                  alt="Icone"
                ></img>
              </button>
            </div>

            <div className="continerFiltro">
              <button disabled={ativado} className="botaoFiltro desativado">
                <img
                  className="iconeImg"
                  src="/imagens/iconeTag/code-svgrepo-com.svg"
                  alt="Icone"
                ></img>
                Sites
                <img
                  className="setaImg"
                  src="/imagens/iconeTag/seta.png"
                  alt="Icone"
                ></img>
              </button>
            </div>

            <div className="continerFiltro">
              <button disabled={ativado} className="botaoFiltro desativado">
                <img
                  className="iconeImg"
                  src="/imagens/iconeTag/code-svgrepo-com.svg"
                  alt="Icone"
                ></img>
                Pessoal
                <img
                  className="setaImg"
                  src="/imagens/iconeTag/seta.png"
                  alt="Icone"
                ></img>
              </button>
            </div>

            <div className="continerFiltro">
              <button disabled={ativado} className="botaoFiltro desativado">
                <img
                  className="iconeImg"
                  src="/imagens/iconeTag/code-svgrepo-com.svg"
                  alt="Icone"
                ></img>
                Imagens
                <img
                  className="setaImg"
                  src="/imagens/iconeTag/seta.png"
                  alt="Icone"
                ></img>
              </button>
            </div>
          </div>
        </div>

        <h3 className="tituloFiltro2">Links</h3>

        <div className="continerCardsLinks">
          <div className="card">
            <div class="img"></div>
            <div class="continerIconeImg codigo">
              <img
                className="iconeImgCard"
                src="/imagens/iconeTag/code-svgrepo-com.svg"
                alt="Icone"
              ></img>
            </div>
            <span>Nome do card</span>

            <p class="info">
              Vai ter um texto legal aqui sobre, Vai ter um texto legal aqui
              sobre , Vai ter um texto legal aqui sobre , Vai ter um texto legal
              aqui sobre , Vai ter um texto legal aqui sobre, Vai ter um texto
              legal aqui sobre
            </p>

            <a className="linkCard" href="a">
              Link para o codigo
            </a>
          </div>

          <div className="card">
            <div class="img"></div>
            <div class="continerIconeImg cor">
              <img
                className="iconeImgCard"
                src="/imagens/iconeTag/color-adjustement-mode-channels-svgrepo-com.svg"
                alt="Icone"
              ></img>
            </div>
            <span>Nome do card</span>

            <p class="info">
              Vai ter um texto legal aqui sobre, Vai ter um texto legal aqui
              sobre , Vai ter um texto legal aqui sobre , Vai ter um texto legal
              aqui sobre , Vai ter um texto legal aqui sobre, Vai ter um texto
              legal aqui sobre
            </p>

            <a className="linkCard" href="a">
              Link para o codigo
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
