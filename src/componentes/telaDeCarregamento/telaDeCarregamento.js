import './telaDeCarregamento.css'

import { useState, useEffect } from "react";



export default function TelaDeCarregamento ({ resultadoDoCarregamento }) {

    const [paginaCarregada, setPaginaCarregada] = useState(false);

    useEffect(() => {

        const timer = setTimeout(() => {
            
            setPaginaCarregada(true);
        

        }, 15000);

        return () => clearTimeout(timer);

    }, [paginaCarregada, resultadoDoCarregamento]);

    if (paginaCarregada) {


        resultadoDoCarregamento(paginaCarregada)
        return null;
     
    }

    return (

        <>

                <section className='telaDeCarregamento'>

                    <h1 className='tituloCarregamento'>Link Hub</h1>

                    <p className='textoCarregamento'>Devido ao fundo animado em 3D, dispositivos com menor desempenho podem apresentar lentidão.</p>
                    <p className='textoCarregamento'>Enquanto não otimizo isso, peço desculpas pelo incômodo e agradeço a compreensão</p>

                    <ul class="loader">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>

                    <p class="LegendaCarregando"></p>

                    <div className='LogotipoCarregamento'>

                        <img class="Logo" src="/imagens/Eu/LOGO.png" alt="Logo" width="100"></img>

                    </div>
                    
                </section>


        
        </>

    )


}