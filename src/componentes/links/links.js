import { useState, useEffect } from "react";
import Card from "../card/card";
import Filtro from "../filtro/filtro";

const Links = () => {
  const [dadosCards, setDadosCards] = useState([]);
  const [valoresDosFiltros, setValoresDosFiltros] = useState({
    site: "todos",
    codigo: "todos",
    entretenimento: "todos",
    youtube: "todos",
    alura: "todos",
    udemy: "todos",
    MeusSites: "todos",
    receitas: "todos",
    faculdade: "todos",
  });

  useEffect(() => {
    fetch("/backend/cards.json")
      .then((response) => response.json())
      .then((data) => setDadosCards(data.cards))
      .catch((error) => console.error("Erro ao carregar o JSON:", error));
  }, []);

  // Função para filtrar os cards
  const filtrarCards = () => {
    return dadosCards.filter((card) => {
      const { site, codigo, entretenimento, youtube, alura, udemy, MeusSites, receita, faculdade } = valoresDosFiltros;

      console.log();

      if (
        card.categoria === "site" &&
        (site === "todos" || card.subcategoria === site)
      ) {
        return true;
      }
      if (
        card.categoria === "codigo" &&
        (codigo === "todos" || card.subcategoria === codigo)
      ) {
        return true;
      }
      if (
        card.categoria === "entretenimento" &&
        (entretenimento === "todos" || card.subcategoria === entretenimento)
      ) {
        return true;
      }
      if (
        card.categoria === "youtube" &&
        (youtube === "todos" || card.subcategoria === youtube)
      ) {
        return true;
      }
      if (
        card.categoria === "alura" &&
        (alura === "todos" || card.subcategoria === alura)
      ) {
        return true;
      }
      if (
        card.categoria === "udemy" &&
        (udemy === "todos" || card.subcategoria === udemy)
      ) {
        return true;
      }
      if (
        card.categoria === "faculdade" &&
        (faculdade === "todos" || card.subcategoria === faculdade)
      ) {
        return true;
      }
      if (
        card.categoria === "receita" &&
        (receita === "todos" || card.subcategoria === receita)
      ) {
        return true;
      }
      if (
        card.categoria === "MeusSites" &&
        (MeusSites === "todos" || card.subcategoria === MeusSites)
      ) {
        return true;
      }

      return false;
    });
  };

  return (
    <>
      <h3 className="tituloFiltro2">Links</h3>

      <Filtro onValoresAtualizados={setValoresDosFiltros} />

      <section className="links">
        {filtrarCards()
          .sort(() => Math.random() - 0.5)
          .map((card) => (
            <Card key={card.id} {...card} />
          ))}
      </section>
    </>
  );
};

export default Links;
