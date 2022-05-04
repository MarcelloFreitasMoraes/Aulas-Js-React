import './App.css';
import { Consol, Click } from './utils'

function App() {

  // criar uma função externa que chame o numero digitado no input no console log acrescentando
  // a mensagem --é muito louco--

  //passar duas variaveis para um segunda função aonde elas retornem dentro de um alert depois do click
const menssagem = 'O'
const subMensagem = 'Marcelo'

  return (
    <div className='app'>
    <form>
      <input onChange={(e) => { Consol(e.target.value) }} />
      <button onClick={() => { Click(menssagem, subMensagem) }}>Enviar</button>
    </form>
    </div>
  )
}

export default App;
