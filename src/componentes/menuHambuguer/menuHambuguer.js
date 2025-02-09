import './menuHambuguer.css'
import React, { useEffect, useState } from "react";

export default function MenuHambuguer () {

    const [estadoAtual, mudaEstado] = useState(false);

    const abrirMenuLateral = () => mudaEstado(true);
    const fechaMenuLateral = () => mudaEstado(false);

    return (

        <>

        {!estadoAtual && (

        <button className="menuHamburguer" onClick={abrirMenuLateral}>

            ☰

        </button>

        )}

        {estadoAtual && (

            <section className='MenuLateral'>

                <img className='logotipoImg' src='/imagens/Eu/logotipo.png' alt='Logotipo'></img>

                <nav className='ContinerNavegacaoLinkLateral'>

                    <ul className='navegacaoLinksLateral'>

                        <li>

                            Codigo

                        </li>

                        <li>

                            Sites

                        </li>

                        <li>

                            Fontes

                        </li>

                        <li>

                            Pessoal

                        </li>

                    </ul>

                </nav>

                <button className="fechaMenuHamburguer" onClick={fechaMenuLateral}>

                    X

                </button>

                <img className='logotipoPessoal' src='/src' alt='Logotipo'></img>

            </section>

        )}

        </>
      
    )

}