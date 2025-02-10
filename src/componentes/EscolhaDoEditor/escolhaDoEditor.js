import "./escolhaDoEditor.css";
import "./escolhaDoEditorResposividade.css";

export default function EscolhaDoEditor() {
  return (
    <>
      <section className="escolhaDoEditor">
        <div className="continerTituloEditor">
          <h3 className="TituloEditor">Escolha do editor</h3>
        </div>

        <div className="continerPublicacaoEditor">
          <img
            className="imagemPublicacao"
            src="/imagens/publicacao/Editor.png"
            alt="imagemPublicacao"
          ></img>
          <p className="ContinerTaggPublicacao sites">
            Site
            <img
              className="iconeTagPublicacao"
              src="/imagens/iconeTag/website-svgrepo-com.svg"
              alt="iconeTag"
            ></img>
          </p>
        </div>
      </section>
    </>
  );
}
