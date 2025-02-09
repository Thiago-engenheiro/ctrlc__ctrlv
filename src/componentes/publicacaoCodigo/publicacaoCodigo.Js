import LinhaDecorativa from "../linhaDecorativa/linhaDecorativa";
import "./publicacaoCodigo.css";

export default function PublicacaoCodigo() {
  return (
    <>
      <section className="PublicacaoCodigo">
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
              Botões: 30 Opções Gratuitas de modelos incriveis que achei na
              internet
            </h5>

            <p className="continerPublicacoesTexto">
              Se você procura por modelos de botões, confira essa excelente
              lista com diversas opções para você usar em seus sites.
            </p>
          </div>

          <div className="continerPublicacaoMenor">
            <div className="continerPublicacaoMenorPostagem">
              <div className="continerImagemPublicacaoMenor">
                <img className="PubliacaoImagem" src="" alt="imagem"></img>
              </div>

              <h5 className="continerPublicacoesTituloMenor">
                Botões: 30 Opções Gratuitas de modelos incriveis que achei na
                internet
              </h5>

              <p className="continerPublicacoesTextoMenor">
                Se você procura por modelos de botões, confira essa excelente
                lista com diversas opções para você usar em seus sites.
              </p>
            </div>

            <div className="continerPublicacaoMenorPostagem">
              <div className="continerImagemPublicacaoMenor">
                <img className="PubliacaoImagem" src="" alt="imagem"></img>
              </div>

              <h5 className="continerPublicacoesTituloMenor">
                Botões: 30 Opções Gratuitas de modelos incriveis que achei na
                internet
              </h5>

              <p className="continerPublicacoesTextoMenor">
                Se você procura por modelos de botões, confira essa excelente
                lista com diversas opções para você usar em seus sites.
              </p>
            </div>
          </div>

          <div className="continerPublicacaoMenor"></div>

          <div className="continerPublicacaoMedia"></div>
        </div>
      </section>
    </>
  );
}
