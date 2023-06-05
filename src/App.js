import './App.css';
import Feed from './componentes/Feed/Feed';
import Stories from './componentes/Stories/Stories';
import LadoEsquerdo from './componentes/LadoEsquerdo/LadoEquerdo';
import LadoDireito from './componentes/LadoDireito/LadoDireito';


function App() {
  return (
    <div className='App'>
      <LadoEsquerdo />

      <div className='Centro'>
        <Stories />        
        <Feed />
        <div className='Feed'></div>
      </div>

      <div className='LadoDireito'>
        <LadoDireito />
      </div>

    </div>
  );
}

export default App;
