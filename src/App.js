import Apresentacao from "./componentes/apresentacao/apresentacao";
import Cabecalho from "./componentes/cabecalho/cabecalho";
import EscolhaDoEditor from "./componentes/EscolhaDoEditor/escolhaDoEditor";
import FundoDaPagina from "./componentes/fundoDaPaigina/fundoDaPagina";
import PublicacaoCodigo from "./componentes/publicacaoCodigo/publicacaoCodigo.js";
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
        <PublicacaoCodigo></PublicacaoCodigo>
        
      </div>

    
    </div>
  );
}

export default App;
