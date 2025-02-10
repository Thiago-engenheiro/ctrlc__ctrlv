import "./coresPublicacao.css";

export default function CoresPublicacao() {
  return (
    <>
      <section className="CoresPublicacao">
        <a className="LinkPublicacao" href="teste">
          Cores
          <div className="continericonePubliacao cor">
            <img
              className="iconePubliacao"
              src="/imagens/iconeTag/color-adjustement-mode-channels-svgrepo-com.svg"
              alt="icone"
            ></img>
          </div>
        </a>

        <div className="continerPublicacoes">
          <div className="continerPublicacaoMaior">
            <div className="continerImagemPublicacaoMaior rosa">
              <img
                className="PubliacaoImagem"
                src="/imagens/publicacao/CorEfundo/corAnimate2.gif"
                alt="imagem"
              ></img>
              <p className="ContinerTaggPublicacao cor">
                Cor
                <img
                  className="iconeTagPublicacao"
                  src="/imagens/iconeTag/color-adjustement-mode-channels-svgrepo-com.svg"
                  alt="iconeTag"
                ></img>
              </p>
            </div>

            <h5 className="continerPublicacoesTitulo">
              Combinações de Cores que Vão Inspirar Seus Projetos
            </h5>

            <p className="continerPublicacoesTexto">
              As cores têm o poder de transformar o visual de qualquer design.
              Confira nossas sugestões de paletas incríveis, do minimalista ao
              vibrante, para criar composições harmoniosas e impactantes em seus
              projetos!
            </p>
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
