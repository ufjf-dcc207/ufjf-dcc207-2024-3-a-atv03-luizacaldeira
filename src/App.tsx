import Animal from './Animal';
import Exibicao from './Exibicao';
import './App.css';
import { ReactNode } from 'react';

type AnimaisTuplaType = [string,string,number, boolean];
const ANIMAIS:AnimaisTuplaType[] = [
  ["🦁","Leão", 190.0, true],
  ["🦩","Flamingo", 12.0, true],
  ["🦒","Girafa", 1200.0, true],
  ["🦜","Papagaio", 0.120, true],
];

function App() {
  const exA1:ReactNode[] = [];
  const exB2:ReactNode[] = [];

for (let i = 0; i < ANIMAIS.length; i++){
  exA1.push (
    <Animal 
    key={ANIMAIS[i][1]}
    icone={ANIMAIS[i][0]}
    nome={ANIMAIS[i][1]}
    peso={ANIMAIS[i][2]}
    extincao={ANIMAIS[i][3]}
    />
  );
}

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
