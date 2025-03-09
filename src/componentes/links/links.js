import { useState, useEffect } from "react";
import Card from '../card/card'; 

const Links = () => {
    const [dadosCards, setDadosCards] = useState([]); 

    useEffect(() => {
        fetch("/backend/cards.json") 
            .then((response) => response.json())
            .then((data) => setDadosCards(data.cards)) 
            .catch((error) => console.error("Erro ao carregar o JSON:", error));
    }, []); 

    return (
        <>
            <h3 className="tituloFiltro2">Links</h3>

            <section className='links'>
                {dadosCards.map((card) => (
                    <Card key={card.id} {...card} /> 
                ))}
            </section>
        </>
    );
};

export default Links;