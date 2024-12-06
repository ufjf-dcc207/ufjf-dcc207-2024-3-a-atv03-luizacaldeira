import Animal from './Animal';
import Exibicao from './Exibicao';
import './App.css';

function App() {
  return (
  <div className='app'>
    <Exibicao 
    abertura={new Date("2024-11-06T08:00:00.000-03:00")}
    fechamento={new Date("2024-11-06T12:00-03:00")}
    cercado="A1"
    >
        <Animal icone="🦁" nome="Leão" peso={-1} extincao={true} />
        <Animal icone="🦒" nome="Girafa" peso={1200} extincao={true} />
        
    </Exibicao>

    <Exibicao 
    abertura={new Date("2024-11-06T13:00:00.000-03:00")}
    fechamento={new Date("2024-11-06T17:00-03:00")}
    cercado="B1"
    >
        <Animal icone="🦜" nome="Papagaio" peso={0.120} extincao={true} />
    </Exibicao>
  
  </div>
  );  
} 

export default App;
