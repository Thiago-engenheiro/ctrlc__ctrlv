import "./filtro.css";
import React, { useState, useEffect } from "react";
import FiltrosSwitche from "./filtrosSwitche";
import './filtroResponsividade.css'


const options = [
  { value: "todos", label: "Todos" },
  { value: "nenhum", label: "Nenhum" },
  { value: "biblioteca", label: "Biblioteca" },
  { value: "aprendizado", label: "Aprendizado" },
];

const options2 = [
  { value: "todos", label: "Todos" },
  { value: "nenhum", label: "Nenhum" },
  { value: "botao", label: "Botao" },
  { value: "card", label: "Card" },
];

const optionsEntretenimento = [
  { value: "todos", label: "Todos" },
  { value: "nenhum", label: "Nenhum" },
  { value: "jogos", label: "jogos" },
  { value: "midia", label: "Midia" },
];

const optionsYoutube = [
  { value: "todos", label: "Todos" },
  { value: "nenhum", label: "Nenhum" },
  { value: "jogos", label: "jogos" },
  { value: "midia", label: "Midia" },
];

const SelectInput = ({
  imagem,
  id,
  label,
  options,
  name,
  value,
  onChange,
  disabled,
}) => {
  const handleChange = (e) => {

    onChange(e.target.value);

  };

  let selectClass = "inputFiltro";
  if (value === "todos") {
    selectClass += " verdeFundo";
  } else if (value === "nenhum") {
    selectClass += " vermelhoFundo";
  }

  return (
    <>
      <div className="continerInformacaoFiltro">
        <label htmlFor={id} className="tituloFiltro">
          {label}
        </label>
        {imagem && <img src={imagem} alt={label} className="imagemFiltro" />}
      </div>
      <select
        id={id}
        className={selectClass}
        name={name}
        value={value}
        onChange={handleChange}
        disabled={disabled}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </>
  );
};

export default function Filtro({ onValoresAtualizados = () => {} }) { 

  const [estadoTodosOsLinks, setEstadoTodosOsLinks] = useState(true);
  const [estadoTodosOsLinksPessoal, setEstadoTodosOsLinksPessoal] = useState(false);

  const [siteValue, setSiteValue] = useState("todos");
  const [codigoValue, setCodigoValue] = useState("todos");

  const [entretenimentoValue, setEntretenimentoValue] = useState("nenhum");
  const [YoutubeValue, setYoutubeValue] = useState("nenhum");

  const handleToggle = () => {
    const newState = !estadoTodosOsLinks;
    setEstadoTodosOsLinks(newState);
    const newValue = newState ? "todos" : "nenhum";
    setSiteValue(newValue);
    setCodigoValue(newValue);
  };

  const handleToggle2 = () => {
    const newState = !estadoTodosOsLinksPessoal;
    setEstadoTodosOsLinksPessoal(newState);
    const newValue = newState ? "todos" : "nenhum";
    setEntretenimentoValue(newValue);
    setYoutubeValue(newValue);
  };

  useEffect(() => {

    const valores = {
      site: siteValue,
      codigo: codigoValue,
      entretenimento: entretenimentoValue,
      youtube: YoutubeValue,
  };

  console.log("Valores atualizados no Filtro:", valores);

  if (typeof onValoresAtualizados === "function") {
    onValoresAtualizados(valores); 
  } else {
    console.error("onValoresAtualizados não é uma função!");
  }
  }, [siteValue, codigoValue, entretenimentoValue, YoutubeValue, onValoresAtualizados])

  

  return (
    <>
      <section className="continerFiltro">
        <h3 className="filtroTitulo">Seletores de busca</h3>
        <div className="todosOsFiltros">
          <div className="filtro">
            <label className="tituloFiltro">Todos os links</label>
            <FiltrosSwitche
              checked={estadoTodosOsLinks}
              onChange={handleToggle}
            />
          </div>

          <div className="filtro">
            <SelectInput
              imagem="/imagens/iconeTag/website-svgrepo-com.svg"
              id="filtroSites"
              label="Sites"
              options={options}
              name="site"
              value={siteValue}
              onChange={setSiteValue}
            />
          </div>

          <div className="filtro">
            <SelectInput
              imagem="/imagens/iconeTag/code-svgrepo-com.svg"
              id="filtroCodigo"
              label="Codigos"
              options={options2}
              name="Codigo"
              value={codigoValue}
              onChange={setCodigoValue}
            />
          </div>
        </div>

        <div className="linhaDecorativa"></div>

        <div className="todosOsFiltros">
          <div className="filtro">
            <label className="tituloFiltro">Links pessoal</label>
            <FiltrosSwitche
              checked={estadoTodosOsLinksPessoal}
              onChange={handleToggle2}
            />
          </div>

          <div className="filtro">
            <SelectInput
              imagem="/imagens/iconeTag/entretenimento.svg"
              id="filtroEntretenimento"
              label="Entretenimento"
              options={optionsEntretenimento}
              name="entretenimento"
              value={entretenimentoValue}
              onChange={setEntretenimentoValue}
              disabled={!estadoTodosOsLinksPessoal}
            />
          </div>

          <div className="filtro">
            <SelectInput
              imagem="/imagens/iconeTag/youtube.svg"
              id="filtroYoutube"
              label="Youtube"
              options={optionsYoutube}
              name="Youtube"
              value={YoutubeValue}
              onChange={setYoutubeValue}
              disabled={!estadoTodosOsLinksPessoal}
            />
          </div>
        </div>
      </section>
    </>
  );
}
