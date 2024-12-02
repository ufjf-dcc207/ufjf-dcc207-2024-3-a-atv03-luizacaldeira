import Animal from './Animal';
import './App.css'

function App() {
  return <div className='app'>
    <Animal icone="🦁" nome="Leão" peso={-1} extincao={true} />
    <Animal icone="🦒" nome="Girafa" peso={1200} extincao={true} />
  </div>;
} 

export default App
