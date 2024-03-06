import logo from './logo.svg';
import { Banner } from './componentes/banner/Banner.js';
import CampoTexto from './componentes/CampoTexto/CampoTexto.js';
import Formulario from './componentes/Formulario/index.js';


function App() {
  return (
    <div className="App">
      <Banner/>
      <Formulario></Formulario>
    </div>
  );
}

export default App;
