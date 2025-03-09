import Apresentacao from "./componentes/apresentacao/apresentacao";
import Cabecalho from "./componentes/cabecalho/cabecalho";
import Filtro from "./componentes/filtro/filtro";
import FundoDaPagina from "./componentes/fundoDaPaigina/fundoDaPagina";
import Links from "./componentes/links/links";

import RedesSocias from "./componentes/redesSocias/redesSocias";
import Rodape from "./componentes/rodape/rodape";

function App() {
  return (
    <div className="App">

      <FundoDaPagina></FundoDaPagina>
      <Cabecalho></Cabecalho>
      <Apresentacao></Apresentacao>
      <RedesSocias></RedesSocias>

      <div className="continerConteudo">

        <Filtro></Filtro>
        <Links></Links>
        
      </div>

      <Rodape></Rodape>

    </div>
  );
}

export default App;
