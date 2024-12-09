import Animal from './Animal';
import Exibicao from './Exibicao';
import './App.css';
import { ReactNode } from 'react';

function App() {
  const exA1:ReactNode[] = [
    <Animal icone="🦁" nome="Leão" peso={-1} extincao/>,
    <Animal icone="🦩" nome="Flamingo" peso={12} extincao />,
  ];
  const exB2:ReactNode[] = [
    <Animal icone="🦒" nome="Girafa" peso={1200} extincao />,
    <Animal icone="🦜" nome="Papagaio" peso={0.120} extincao />,
  ];
  return (
  <div className='app'>
    <Exibicao 
    abertura={new Date("2024-11-06T08:00:00.000-03:00")}
    fechamento={new Date("2024-11-06T12:00-03:00")}
    cercado="A1"
    >
     {exA1}   
    </Exibicao>

    <Exibicao 
    abertura={new Date("2024-11-06T13:00:00.000-03:00")}
    fechamento={new Date("2024-11-06T17:00-03:00")}
    cercado="B1"
    > {exB2}
    </Exibicao>
  
  </div>
  );  
} 

export default App;
