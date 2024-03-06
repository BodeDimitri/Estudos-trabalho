import { Banner } from './componentes/banner/Banner.js';
import Formulario from './componentes/Formulario/index.js';
import { useState } from 'react';



function App() {

  const [colaboradores, setColaboradores] = useState[('')]

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner/>
      <Formulario aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}></Formulario>
    </div>
  );
}

export default App;
