import "./escolhaDoEditor.css";
import './escolhaDoEditorResposividade.css'

export default function EscolhaDoEditor() {
  return (
    <>
      <section className="escolhaDoEditor">
        
        <div className="continerTituloEditor">
          <h3 className="TituloEditor">Escolha do editor</h3>
        </div>

        <div className="continerPublicacaoInformacao">

          <p className="publicacaoInformacao"> <mark className="informacaoTitulo">Data</mark> <br></br> <br></br> 02/2025 </p>
          <p className="publicacaoInformacao"> <mark className="informacaoTitulo">Autor</mark> <br></br> <br></br> Por Thiago Abraao </p>
          <p className="ContinerTagPublicacao sites">

            <img className="iconeTag" src="/imagens/iconeTag/website-svgrepo-com.svg" alt="iconeTag"></img>
            Sites

          </p>

        </div>

        <div className="continerPublicacaoEditor">

          <img className="imagemPublicacao" src="/imagens/publicacao/Editor.png" alt="imagemPublicacao"></img>

        </div>

      </section>
    </>
  );
}
