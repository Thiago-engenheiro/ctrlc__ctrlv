import "./links.css";
import "./linksResponsividade.css";
import "./botaoFiltro.css";
import "./card.css";
import './subFiltro.css'

import { useState } from "react";

export default function Links() {

  const [selecionadoGrupo1, setSelecionadoGrupo1] = useState("Todos");
  const [selecionadoGrupo2, setSelecionadoGrupo2] = useState(null);
  const [selecionadoGrupo3, setSelecionadoGrupo3] = useState(null);
  const [selecionadoGrupo4, setSelecionadoGrupo4] = useState(null);
  const [selecionadoGrupo5, setSelecionadoGrupo5] = useState(null);
  const [ativado, setAtividado] = useState(true);
  const [botoesAtivados, setBotoesAtivados] = useState({
    codigo: false,
    cores: false,
    fontes: false,
    sites: false,
    pessoal: false,
    imagens: false,

  });

  const mudarEstadoDeAtivado = () => {
    
    setAtividado(!ativado);

    setBotoesAtivados({
      codigo: false,
      cores: false,
      fontes: false,
      sites: false,
      pessoal: false,
      imagens: false,
    });

    setSelecionadoGrupo1("Nenhum"); 

  };

  const mudarEstadoDeAtivadoBotao = (botaoId) => {

    setBotoesAtivados((prevState) => ({

      ...prevState,
      [botaoId]: !prevState[botaoId], 

    }));

  };

  const handleCheckboxChange = (grupo, value) => {
    if (grupo === "grupo1") {
      setSelecionadoGrupo1(value); 
    } else if (grupo === "grupo2") {
      setSelecionadoGrupo2(value); 
    } else if (grupo === "grupo3") {
      setSelecionadoGrupo3(value); 
    } else if (grupo === "grupo4") {
      setSelecionadoGrupo4(value); 
    } else if (grupo === "grupo5") {
      setSelecionadoGrupo5(value); 
    }
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
              <button disabled={ativado} onClick={() => mudarEstadoDeAtivadoBotao("codigo")}  className="botaoFiltro desativado">
                <img
                  className="iconeImg"
                  src="/imagens/iconeTag/code-svgrepo-com.svg"
                  alt="Icone"
                ></img>
                Codigo
                <img
                    className={`setaImg ${botoesAtivados.codigo ? 'rotated' : ''}`}
                  src="/imagens/iconeTag/seta.png"
                  alt="Icone"
                ></img>
              </button>

              <div className="continerSubFiltro" hidden={!botoesAtivados["codigo"]}>

              <div className="continerSelecaoFiltro nenhum">
                  <input className="checkboxFiltro" type="checkbox" checked={selecionadoGrupo1 === "Nenhum"} 
                  onChange={() => handleCheckboxChange("grupo1", "Nenhum")} ></input>
                  <label className="textoFiltro">Nenhum</label>
                </div>

                <div className="continerSelecaoFiltro todos">
                  <input className="checkboxFiltro" type="checkbox" checked={selecionadoGrupo1 === "Todos"} 
                  onChange={() => handleCheckboxChange("grupo1", "Todos")} ></input>
                  <label className="textoFiltro">Todos</label>
                </div>

                <div className="continerSelecaoFiltro">
                  <input className="checkboxFiltro" type="checkbox" checked={selecionadoGrupo1 === "Botoes"} 
                  onChange={() => handleCheckboxChange("grupo1", "Botoes")} ></input>
                  <label className="textoFiltro">Botoes</label>
                </div>

                <div className="continerSelecaoFiltro">
                  <input className="checkboxFiltro" type="checkbox" checked={selecionadoGrupo1 === "Cards"} 
                  onChange={() => handleCheckboxChange("grupo1", "Cards")} ></input>
                  <label className="textoFiltro">Cards</label>
                </div>

                <div className="continerSelecaoFiltro">
                  <input className="checkboxFiltro" type="checkbox" checked={selecionadoGrupo1 === "Inputs"} 
                  onChange={() => handleCheckboxChange("grupo1", "Inputs")} ></input>
                  <label className="textoFiltro">Inputs</label>
                </div>

                <div className="continerSelecaoFiltro">
                  <input className="checkboxFiltro" type="checkbox" checked={selecionadoGrupo1 === "Carregamento"} 
                  onChange={() => handleCheckboxChange("grupo1", "Carregamento")} ></input>
                  <label className="textoFiltro">Carregamento</label>
                </div>

                <div className="continerSelecaoFiltro">
                  <input className="checkboxFiltro" type="checkbox" checked={selecionadoGrupo1 === "Fundos"} 
                  onChange={() => handleCheckboxChange("grupo1", "Fundos")} ></input>
                  <label className="textoFiltro">Fundos</label>
                </div>

              </div>

            </div>

            <div className="continerFiltro">
              <button disabled={ativado} onClick={() => mudarEstadoDeAtivadoBotao("cores")} className="botaoFiltro desativado">
                <img
                  className="iconeImg"
                  src="/imagens/iconeTag/code-svgrepo-com.svg"
                  alt="Icone"
                ></img>
                Cores
                <img
                  className={`setaImg ${botoesAtivados.cores ? 'rotated' : ''}`}
                  src="/imagens/iconeTag/seta.png"
                  alt="Icone"
                ></img>
              </button>

              <div className="continerSubFiltro" hidden={!botoesAtivados["cores"]}>

                <div className="continerSelecaoFiltro">
                  <input className="checkboxFiltro" type="checkbox" ></input>
                  <label className="textoFiltro">Nome aqui</label>
                </div>

                <div className="continerSelecaoFiltro">
                  <input className="checkboxFiltro" type="checkbox" ></input>
                  <label className="textoFiltro">Nome aqui</label>
                </div>

                <div className="continerSelecaoFiltro">
                  <input className="checkboxFiltro" type="checkbox" ></input>
                  <label className="textoFiltro">Nome aqui</label>
                </div>

                <div className="continerSelecaoFiltro">
                  <input className="checkboxFiltro" type="checkbox" ></input>
                  <label className="textoFiltro">Nome aqui</label>
                </div>

                <div className="continerSelecaoFiltro">
                  <input className="checkboxFiltro" type="checkbox" ></input>
                  <label className="textoFiltro">Nome aqui</label>
                </div>

              </div>

            </div>

            <div className="continerFiltro">
              <button disabled={ativado}  onClick={() => mudarEstadoDeAtivadoBotao("fontes")} className="botaoFiltro desativado">
                <img
                  className="iconeImg"
                  src="/imagens/iconeTag/code-svgrepo-com.svg"
                  alt="Icone"
                ></img>
                Fontes
                <img
                  className={`setaImg ${botoesAtivados.fontes ? 'rotated' : ''}`}
                  src="/imagens/iconeTag/seta.png"
                  alt="Icone"
                ></img>
              </button>

              <div className="continerSubFiltro" hidden={!botoesAtivados["fontes"]}>

                <div className="continerSelecaoFiltro">
                  <input className="checkboxFiltro" type="checkbox" ></input>
                  <label className="textoFiltro">Nome aqui</label>
                </div>

                <div className="continerSelecaoFiltro">
                  <input className="checkboxFiltro" type="checkbox" ></input>
                  <label className="textoFiltro">Nome aqui</label>
                </div>

                <div className="continerSelecaoFiltro">
                  <input className="checkboxFiltro" type="checkbox" ></input>
                  <label className="textoFiltro">Nome aqui</label>
                </div>

                <div className="continerSelecaoFiltro">
                  <input className="checkboxFiltro" type="checkbox" ></input>
                  <label className="textoFiltro">Nome aqui</label>
                </div>

                <div className="continerSelecaoFiltro">
                  <input className="checkboxFiltro" type="checkbox" ></input>
                  <label className="textoFiltro">Nome aqui</label>
                </div>

              </div>

            </div>

            <div className="continerFiltro">
              <button disabled={ativado} onClick={() => mudarEstadoDeAtivadoBotao("sites")} className="botaoFiltro desativado">
                <img
                  className="iconeImg"
                  src="/imagens/iconeTag/code-svgrepo-com.svg"
                  alt="Icone"
                ></img>
                Sites
                <img
                   className={`setaImg ${botoesAtivados.sites ? 'rotated' : ''}`}
                  src="/imagens/iconeTag/seta.png"
                  alt="Icone"
                ></img>
              </button>

              <div className="continerSubFiltro" hidden={!botoesAtivados["sites"]}>

                <div className="continerSelecaoFiltro">
                  <input className="checkboxFiltro" type="checkbox" ></input>
                  <label className="textoFiltro">Nome aqui</label>
                </div>

                <div className="continerSelecaoFiltro">
                  <input className="checkboxFiltro" type="checkbox" ></input>
                  <label className="textoFiltro">Nome aqui</label>
                </div>

                <div className="continerSelecaoFiltro">
                  <input className="checkboxFiltro" type="checkbox" ></input>
                  <label className="textoFiltro">Nome aqui</label>
                </div>

                <div className="continerSelecaoFiltro">
                  <input className="checkboxFiltro" type="checkbox" ></input>
                  <label className="textoFiltro">Nome aqui</label>
                </div>

                <div className="continerSelecaoFiltro">
                  <input className="checkboxFiltro" type="checkbox" ></input>
                  <label className="textoFiltro">Nome aqui</label>
                </div>

              </div>
            </div>

            <div className="continerFiltro">
              <button disabled={ativado} onClick={() => mudarEstadoDeAtivadoBotao("pessoal")} className="botaoFiltro desativado">
                <img
                  className="iconeImg"
                  src="/imagens/iconeTag/code-svgrepo-com.svg"
                  alt="Icone"
                ></img>
                Pessoal
                <img
                  className={`setaImg ${botoesAtivados.pessoal ? 'rotated' : ''}`}
                  src="/imagens/iconeTag/seta.png"
                  alt="Icone"
                ></img>
              </button>

              <div className="continerSubFiltro" hidden={!botoesAtivados["pessoal"]}>

                <div className="continerSelecaoFiltro">
                  <input className="checkboxFiltro" type="checkbox" ></input>
                  <label className="textoFiltro">Nome aqui</label>
                </div>

                <div className="continerSelecaoFiltro">
                  <input className="checkboxFiltro" type="checkbox" ></input>
                  <label className="textoFiltro">Nome aqui</label>
                </div>

                <div className="continerSelecaoFiltro">
                  <input className="checkboxFiltro" type="checkbox" ></input>
                  <label className="textoFiltro">Nome aqui</label>
                </div>

                <div className="continerSelecaoFiltro">
                  <input className="checkboxFiltro" type="checkbox" ></input>
                  <label className="textoFiltro">Nome aqui</label>
                </div>

                <div className="continerSelecaoFiltro">
                  <input className="checkboxFiltro" type="checkbox" ></input>
                  <label className="textoFiltro">Nome aqui</label>
                </div>

              </div>
            </div>

            <div className="continerFiltro">
              <button disabled={ativado} onClick={() => mudarEstadoDeAtivadoBotao("imagens")} className="botaoFiltro desativado">
                <img
                  className="iconeImg"
                  src="/imagens/iconeTag/code-svgrepo-com.svg"
                  alt="Icone"
                ></img>
                Imagens
                <img
                  className={`setaImg ${botoesAtivados.imagens ? 'rotated' : ''}`}
                  src="/imagens/iconeTag/seta.png"
                  alt="Icone"
                ></img>
              </button>

              <div className="continerSubFiltro" hidden={!botoesAtivados["imagens"]}>

                <div className="continerSelecaoFiltro">
                  <input className="checkboxFiltro" type="checkbox" ></input>
                  <label className="textoFiltro">Nome aqui</label>
                </div>

                <div className="continerSelecaoFiltro">
                  <input className="checkboxFiltro" type="checkbox" ></input>
                  <label className="textoFiltro">Nome aqui</label>
                </div>

                <div className="continerSelecaoFiltro">
                  <input className="checkboxFiltro" type="checkbox" ></input>
                  <label className="textoFiltro">Nome aqui</label>
                </div>

                <div className="continerSelecaoFiltro">
                  <input className="checkboxFiltro" type="checkbox" ></input>
                  <label className="textoFiltro">Nome aqui</label>
                </div>

                <div className="continerSelecaoFiltro">
                  <input className="checkboxFiltro" type="checkbox" ></input>
                  <label className="textoFiltro">Nome aqui</label>
                </div>

              </div>
            </div>
          </div>
        </div>

        <h3 className="tituloFiltro2">Links</h3>

        <div className="continerCardsLinks">
          <div className="card">
            <div class="img">

            <video 
            className="setaAnimada" 
            src="/imagens/imagensParaLinks/codigo/botoes/botaoComSetaAnimado.mp4" 
            type="video/mp4" 
            autoPlay 
            loop 
            muted 
            playsInline
          ></video>

            </div>
            <div class="continerIconeImg codigo">
              <img
                className="iconeImgCard"
                src="/imagens/iconeTag/code-svgrepo-com.svg"
                alt="Icone"
              ></img>
            </div>
            <span>Botão seta animado</span>

            <p class="info">
              Botão com seta animada ao passa o mause.
            </p>

            <a className="linkCard" href="https://uiverse.io/adamgiebl/smart-moth-68">
              Link para o codigo(a)
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
              Link para a cor(a)
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
