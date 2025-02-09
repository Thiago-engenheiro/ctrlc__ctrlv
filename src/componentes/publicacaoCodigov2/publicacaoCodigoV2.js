import './publicacaoCodigoV2.css';
import './publicacaoCodigoV2Resposividade.css'

export default function PublicacaoCodigoV2() {
    return (
      <>
        <section className="PublicacaoCodigoV2">
          <a className="LinkPublicacao" href="teste">
            Codigos e componentes
            <img
              className="iconePubliacao"
              src="/imagens/publicacao/enlarge-text.png"
              alt="icone"
            ></img>
          </a>
  
          <div className="continerPublicacoes">
            <div className="continerPublicacaoMaior">
              <div className="continerImagemPublicacaoMaior">
                <img
                  className="PubliacaoImagem"
                  src="/imagens/publicacao/publicacao-Botoes.png"
                  alt="imagem"
                ></img>
              </div>
  
              <h5 className="continerPublicacoesTitulo">
                Botões: 30 Opções gratuitas de modelos incriveis que achei na
                internet
              </h5>
  
              <p className="continerPublicacoesTexto">
                Se você procura por modelos de botões, confira essa excelente
                lista com diversas opções para você usar em seus sites.
              </p>
            </div>
  
            <div className="continerPublicacaoMenor">
              <div className="continerPublicacaoMenorPostagem comBorda">
                <div className="continerImagemPublicacaoMenor">
                  <img className="PubliacaoImagem" src="/imagens/publicacao/cards-modelos.webp" alt="imagem"></img>
                </div>
  
                <h5 className="continerPublicacoesTituloMenor">
                  Cards: 15 Opções gratuitas de modelos de cards que que uso no dia dia
                </h5>
  
                <p className="continerPublicacoesTextoMenor">
                Seja para destacar informações, 
                produtos ou conteúdos visuais, os cards são essenciais em interfaces modernas. 
                Neste post, reuni 15 designs de cards encontrados pela web que são funcionais e cheios de estilo para inspirar seus projetos!
                </p>
              </div>
  
              <div className="continerPublicacaoMenorPostagem">
                <div className="continerImagemPublicacaoMenor">
                  <img className="PubliacaoImagem" src="/imagens/publicacao/carregando- publicacao.webp" alt="imagem"></img>
                </div>
  
                <h5 className="continerPublicacoesTituloMenor">
                Animações de Carregamento: 12 Modelos Criativos que Encontrei na Web
                </h5>
  
                <p className="continerPublicacoesTextoMenor">
                As animações de carregamento são essenciais para manter os usuários engajados enquanto esperam. 
                Confira 12 modelos criativos, como círculos giratórios, 
                barras animadas e outros designs inteligentes, que podem dar um toque especial aos seus projetos!
                </p>
              </div>
            </div>

            <div className="continerPublicacaoMenorPostagem">

            <h5 className="continerPublicacoesTituloMenor">

                Mais postagens no futuro !

              </h5>

            </div>

            </div>
    
        </section>
      </>
    );
  }
  