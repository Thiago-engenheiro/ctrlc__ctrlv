import MenuHambuguer from '../menuHambuguer/menuHambuguer'
import './cabecalho.css'
import './cabecalho.Resposividade.css'

export default function Cabecalho () {

    return (

        <>

            <section className='cabecalho'>

                <div className='continerLogoImg'>
                    <img className='logotipoImg' src='/imagens/Eu/logotipo.png' alt='Logotipo'></img>
                </div>

                <div className='ContinerLogoPagina'>
                    <h1 className='TituloPagina'> Control C // Control V</h1>
                </div>

                <nav className='ContinerNavegacaoLink'>

                    <ul className='navegacaoLinks'>

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

                <MenuHambuguer></MenuHambuguer>

            </section>
        
        </>

    )


}