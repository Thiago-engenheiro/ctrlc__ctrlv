import MenuHambuguer from '../menuHambuguer/menuHambuguer'
import './cabecalho.css'
import './cabecalho.Resposividade.css'

export default function Cabecalho () {

    return (

        <>

            <section className='cabecalho'>

                <div className='continerLogoImg'>
                    <img className='logotipoImg' src='/imagens/Eu/LOGO.png' alt='Logotipo'></img>
                </div>

                <div className='ContinerLogoPagina'>
                    <h1 className='TituloPagina'> Control C // Control V</h1>
                </div>

                <nav className='ContinerNavegacaoLink'>

                    <ul className='navegacaoLinks'>

                        <li>

                            <a href='a'>Codigo</a>

                        </li>

                        <li>

                            <a href='a'>Sites</a>

                        </li>

                        <li>

                            <a href='a'>Fontes</a>

                        </li>

                        <li>

                            <a href='a'>Pessoal</a>

                        </li>

                    </ul>

                </nav>

                <MenuHambuguer></MenuHambuguer>

            </section>
        
        </>

    )


}