import Apresentacao from "./componentes/apresentacao/apresentacao";
import Cabecalho from "./componentes/cabecalho/cabecalho";
import FundoDaPagina from "./componentes/fundoDaPaigina/fundoDaPagina";
import Links from "./componentes/links/links";

import RedesSocias from "./componentes/redesSocias/redesSocias";
import Rodape from "./componentes/rodape/rodape";
import TelaDeCarregamento from "./componentes/telaDeCarregamento/telaDeCarregamento";

import { useState } from "react";

function App() {
  const [paginaCarregada, setPaginaCarregada] = useState(false);

  const resultadoAtualizado = (r) => {
    setPaginaCarregada(r);
  };

  return (
    <div className="App">
      <TelaDeCarregamento
        resultadoDoCarregamento={resultadoAtualizado}
      ></TelaDeCarregamento>
      <div className="conteudo" hidden={!paginaCarregada}>
        <FundoDaPagina></FundoDaPagina>
        <Cabecalho></Cabecalho>
        <RedesSocias></RedesSocias>

        <div className="continerConteudo">
          <Links></Links>
        </div>

        <Rodape></Rodape>
      </div>
    </div>
  );
}

export default App;
