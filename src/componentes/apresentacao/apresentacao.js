import "./apresentacao.css";
import "./apresentacaoResposividade.css";

export default function Apresentacao() {
  return (
    <>
      <section className="apresentacao">
        <div className="continerImagemIlustracaoEsquerdaCima">
          <img
            className="imagemIlustracao1"
            src="/imagens/ilustracaoApresentacao/16.webp"
            alt="img"
          ></img>

          <img
            className="imagemIlustracao2"
            src="/imagens/ilustracaoApresentacao/2.webp"
            alt="img"
          ></img>

          <img
            className="imagemIlustracao3"
            src="/imagens/ilustracaoApresentacao/3.webp"
            alt="img"
          ></img>
        </div>

        <div className="continerImagemIlustracaoEsquerdaBaixo">
          <img
            className="imagemIlustracao4"
            src="/imagens/ilustracaoApresentacao/4.webp"
            alt="img"
          ></img>

          <img
            className="imagemIlustracao5"
            src="/imagens/ilustracaoApresentacao/5.webp"
            alt="img"
          ></img>

          <img
            className="imagemIlustracao6"
            src="/imagens/ilustracaoApresentacao/6.webp"
            alt="img"
          ></img>

          <img
            className="imagemIlustracao7"
            src="/imagens/ilustracaoApresentacao/7.webp"
            alt="img"
          ></img>
        </div>

        <div className="continerSecaoBusca">
          <h2 className="Tituloinput">
            Os meus <br></br> melhores links
          </h2>

          <input
            type="text"
            name="text"
            class="input"
            placeholder="Procure por fontes, sites, codigos, cores"
          ></input>

          <div className="ContinerTodasTags">
            <p className="ContinerTag codigo">
              <img
                className="iconeTag"
                src="/imagens/iconeTag/code-svgrepo-com.svg"
                alt="iconeTag"
              ></img>
              Codigo
            </p>

            <p className="ContinerTag cor">
              <img
                className="iconeTag"
                src="/imagens/iconeTag/color-adjustement-mode-channels-svgrepo-com.svg"
                alt="iconeTag"
              ></img>
              Cores
            </p>

            <p className="ContinerTag fontes">
              <img
                className="iconeTag"
                src="/imagens/iconeTag/font-size-svgrepo-com.svg"
                alt="iconeTag"
              ></img>
              Fontes
            </p>

            <p className="ContinerTag sites">
              <img
                className="iconeTag"
                src="/imagens/iconeTag/website-svgrepo-com.svg"
                alt="iconeTag"
              ></img>
              Sites
            </p>
            </div>

        </div>

        <div className="continerImagemIlustracaoDireitaCima">
          <img
            className="imagemIlustracao7"
            src="/imagens/ilustracaoApresentacao/11.webp"
            alt="img"
          ></img>

          <img
            className="imagemIlustracao6"
            src="/imagens/ilustracaoApresentacao/10.webp"
            alt="img"
          ></img>

          <img
            className="imagemIlustracao5"
            src="/imagens/ilustracaoApresentacao/9.webp"
            alt="img"
          ></img>

          <img
            className="imagemIlustracao4"
            src="/imagens/ilustracaoApresentacao/8.webp"
            alt="img"
          ></img>

        </div>

        <div className="linhaFantasmaGrind"></div>

        <div className="continerImagemIlustracaoDireitaBaixo">
          <img
            className="imagemIlustracao3"
            src="/imagens/ilustracaoApresentacao/12.webp"
            alt="img"
          ></img>

          <img
            className="imagemIlustracao2"
            src="/imagens/ilustracaoApresentacao/13.webp"
            alt="img"
          ></img>

          <img
            className="imagemIlustracao1"
            src="/imagens/ilustracaoApresentacao/15.webp"
            alt="img"
          ></img>

        </div>
   
      </section>
    </>
  );
}
