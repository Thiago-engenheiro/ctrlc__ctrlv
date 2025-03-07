import './rodape.css'
import './rodapeResposividade.css'

export default function Rodape () {

    return (

        <>

            <section className='Rodape'>

                <div className='continerDoRodape'>

                    <h3 className='tituloRodape'>O que é LinkHub?</h3>

                    <p className='textoRodape'>

                        Um site que funciona como um repositório de links úteis que utilizo no meu dia a dia. 
                        A ideia surgiu da dificuldade de armazenar links em vários lugares e nunca encontrá-los quando preciso, 
                        seja pela falta de organização ou pela grande quantidade de conteúdo. Decidi unir o útil ao agradável e criar um site que me ajude a organizar esses links e compartilhá-los com outras pessoas. 
                        Além disso, é uma ótima oportunidade para aprimorar meus conhecimentos em desenvolvimento

                    </p>

                </div>

                <div className='continerDoRodape centro borda'>

                    <a className='linkRodape' href='a'>Feito por Thiago Abraao </a>

                    <img className='logotipoImgRodape' src='/imagens/Eu/LOGO.png' alt='Logotipo'></img>

                </div>

                <div className='continerDoRodape final'>

                    <p className='texto'>Versão do site: 0.6V - 05/03/2025</p>



                    <p className='texto'>Site sem fins lucrativos</p>

                    <p className='texto'>©Thiago Abraao</p>


                </div>

            </section>
        
        </>

    )

}