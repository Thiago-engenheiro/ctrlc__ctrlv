import "./filtro.css";
import React, { useState, useEffect } from "react";
import FiltrosSwitche from "./filtrosSwitche";
import "./filtroResponsividade.css";

const options = [
  { value: "todos", label: "Todos" },
  { value: "nenhum", label: "Nenhum" },
  { value: "biblioteca", label: "Biblioteca" },
  { value: "aprendizado", label: "Aprendizado" },
  { value: "design", label: "Design" },
];

const options2 = [
  { value: "todos", label: "Todos" },
  { value: "nenhum", label: "Nenhum" },
  { value: "botao", label: "Botao" },
  { value: "card", label: "Card" },
  { value: "checkbox", label: "Checkbox" },

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

const optionsReceitas = [
  { value: "todos", label: "Todos" },
  { value: "nenhum", label: "Nenhum" },
  { value: "almoco/janta", label: "Almoço/janta" },
  { value: "doces", label: "Doces" },
  { value: "salgado", label: "Salgado" },
];

const optionsMeusSites = [
  { value: "todos", label: "Todos" },
  { value: "nenhum", label: "Nenhum" },
];

const optionsFaculdades = [
  { value: "todos", label: "Todos" },
  { value: "nenhum", label: "Nenhum" },
];

const optionsAlura = [
  { value: "todos", label: "Todos" },
  { value: "nenhum", label: "Nenhum" },
  { value: "canva", label: "Canva" },
  { value: "comportamento", label: "Comportamento" },
  { value: "comunicacao", label: "Comunicação" },
  { value: "excel", label: "Excel" },
  { value: "formacao", label: "Formação" },
  { value: "frameworks", label: "Frameworks" },
  { value: "git", label: "Git" },
  { value: "html-css", label: "Html-css" },
  { value: "javaScript", label: "JavaScript" },
  { value: "lideranca", label: "Liderança" },
  { value: "powerBi", label: "Power Bi" },
  { value: "react", label: "React" },
  { value: "ux", label: "UX" },
  { value: "wordPress", label: "WordPress" },
];

const optionsUdemy = [
  { value: "todos", label: "Todos" },
  { value: "nenhum", label: "Nenhum" },
  { value: "ciberseguranca", label: "Cibersegurança" },
  { value: "redes", label: "Redes" },
  { value: "python", label: "Python" },
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
  const [estadoTodosOsLinksPessoal, setEstadoTodosOsLinksPessoal] =
    useState(false);
  const [estadoTodosOsLinksCertificado, setEstadoTodosOsLinksCertificado] =
    useState(false);

  const [siteValue, setSiteValue] = useState("todos");
  const [codigoValue, setCodigoValue] = useState("todos");

  const [entretenimentoValue, setEntretenimentoValue] = useState("nenhum");
  const [YoutubeValue, setYoutubeValue] = useState("nenhum");
  const [ReceitasValue, setReceitasValue] = useState("nenhum");
  const [MeusSitesValue, setMeusSitesValue] = useState("nenhum");

  const [aluraValue, setAluraValue] = useState("nenhum");
  const [udemyValue, setUdemyValue] = useState("nenhum");
  const [faculdadeValue, setFaculdadeValue] = useState("nenhum");

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
    setReceitasValue(newValue);
    setMeusSitesValue(newValue);
  };

  const handleToggle3 = () => {
    const newState = !estadoTodosOsLinksCertificado;
    setEstadoTodosOsLinksCertificado(newState);
    const newValue = newState ? "todos" : "nenhum";
    setAluraValue(newValue);
    setUdemyValue(newValue);
    setFaculdadeValue(newValue);
  };

  useEffect(() => {
    const valores = {
      site: siteValue,
      codigo: codigoValue,
      entretenimento: entretenimentoValue,
      youtube: YoutubeValue,
      alura: aluraValue,
      udemy: udemyValue,
      MeusSites: MeusSitesValue,
      receitas: ReceitasValue,
      faculdade: faculdadeValue,
    };

    console.log("Valores atualizados no Filtro:", valores);

    if (typeof onValoresAtualizados === "function") {
      onValoresAtualizados(valores);
    } else {
      console.error("onValoresAtualizados não é uma função!");
    }
  }, [
    siteValue,
    codigoValue,
    entretenimentoValue,
    YoutubeValue,
    aluraValue,
    udemyValue,
    MeusSitesValue,
    ReceitasValue,
    faculdadeValue,
    onValoresAtualizados,
  ]);

  return (
    <>
      <section className="continerFiltro">
        <h3 className="filtroTitulo">Seletores de busca</h3>
        <div className="todosOsFiltros">
          <div className="filtro">
            <label className="tituloFiltro">links para TI</label>
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
            <label className="tituloFiltro">Links pessoais</label>
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

          <div className="filtro">
            <SelectInput
              imagem="/imagens/iconeTag/food.svg"
              id="filtroReceita"
              label="Receita"
              options={optionsReceitas}
              name="Receita"
              value={ReceitasValue}
              onChange={setReceitasValue}
              disabled={!estadoTodosOsLinksPessoal}
            />
          </div>

          <div className="filtro">
            <SelectInput
              imagem="/imagens/iconeTag/website.svg"
              id="filtroMeusSites"
              label="Meus-Sites"
              options={optionsMeusSites}
              name="Meus-Sites"
              value={MeusSitesValue}
              onChange={setMeusSitesValue}
              disabled={!estadoTodosOsLinksPessoal}
            />
          </div>
        </div>

        {/*

          <div className="linhaDecorativa"></div>

          <div className="todosOsFiltros">
            <div className="filtro">
              <label className="tituloFiltro">Certificados</label>
              <FiltrosSwitche
                checked={estadoTodosOsLinksCertificado}
                onChange={handleToggle3}
              />
            </div>

            <div className="filtro">
              <SelectInput
                imagem="/imagens/iconeTag/alura.png"
                id="filtroAlura"
                label="Alura"
                options={optionsAlura}
                name="alura"
                value={aluraValue}
                onChange={setAluraValue}
                disabled={!estadoTodosOsLinksCertificado}
              />
            </div>

            <div className="filtro">
              <SelectInput
                imagem="/imagens/iconeTag/udemy.png"
                id="filtroUdemy"
                label="Udemy"
                options={optionsUdemy}
                name="udemy"
                value={udemyValue}
                onChange={setUdemyValue}
                disabled={!estadoTodosOsLinksCertificado}
              />
            </div>

            <div className="filtro">
              <SelectInput
                imagem="/imagens/iconeTag/certificado.svg"
                id="filtroUdemy"
                label="Faculdade"
                options={optionsFaculdades}
                name="faculdade"
                value={faculdadeValue}
                onChange={setFaculdadeValue}
                disabled={!estadoTodosOsLinksCertificado}
              />
            </div>

          </div>

        */}
      </section>
    </>
  );
}
