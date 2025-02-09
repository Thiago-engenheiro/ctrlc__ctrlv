import Apresentacao from "./componentes/apresentacao/apresentacao";
import Cabecalho from "./componentes/cabecalho/cabecalho";
import EscolhaDoEditor from "./componentes/EscolhaDoEditor/escolhaDoEditor";
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
        <PublicacaoCodigoV2></PublicacaoCodigoV2>
      </div>
    </div>
  );
}

export default App;
