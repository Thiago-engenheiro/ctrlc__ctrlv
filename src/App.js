import Anuncios from "./componentes/anuncios/anuncios";
import Apresentacao from "./componentes/apresentacao/apresentacao";
import Cabecalho from "./componentes/cabecalho/cabecalho";
import CoresPublicacao from "./componentes/CoresPublicacao/coresPublicacao";
import EscolhaDoEditor from "./componentes/EscolhaDoEditor/escolhaDoEditor";
import FontesPublicacao from "./componentes/FontesPublicacao/fontesPublicacao";
import FundoDaPagina from "./componentes/fundoDaPaigina/fundoDaPagina";
import PublicacaoCodigoV2 from "./componentes/publicacaoCodigov2/publicacaoCodigoV2";

import RedesSocias from "./componentes/redesSocias/redesSocias";

function App() {
  return (
    <div className="App">
      <FundoDaPagina></FundoDaPagina>
      <Cabecalho></Cabecalho>
      <Apresentacao></Apresentacao>
      <RedesSocias></RedesSocias>

      <div className="continerConteudo">
        <EscolhaDoEditor></EscolhaDoEditor>
        <Anuncios></Anuncios>
        <PublicacaoCodigoV2></PublicacaoCodigoV2>
        <FontesPublicacao></FontesPublicacao>
        <CoresPublicacao></CoresPublicacao>
        <Anuncios></Anuncios>
      </div>
    </div>
  );
}

export default App;
