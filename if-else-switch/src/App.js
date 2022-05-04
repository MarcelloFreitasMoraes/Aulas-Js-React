import './App.css';
import { MsgIfElse, MsgfunSwitch } from './utils';

function App() {

  // quero que você faça uma condição que se o valor digitado no input
  // for --Guitarra-- console tem que aparecer 'tem cordas'
  // se digitar --Bateria-- console aparece 'tem pedal, e se digitar
  // --Microfone-- console aparece 'tem fios', se não 'não existe esse instrumento'

  // quero que você faça um console com switch case que faça algo com 3 opções e tenha
  // uma opção para quando não atender as 3 opções.

  return (
    <div className="App">
      <h2>If e Else</h2>
      <input onChange={(e) => {MsgIfElse(e.target.value)}} />
      <h2>Switch Case</h2>
      <input onChange={(e) => {MsgfunSwitch(e.target.value)}}/>
    </div>
  );
}

export default App;