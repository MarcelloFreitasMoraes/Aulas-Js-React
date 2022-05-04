import './App.css';

function App() {
  // onClick no click
  // onChange na mudança

  // fazer um input com onChange que o a pessoa digitar ele vai somar com uma varivael
  // com o valor 4 e vai retornar o alert com o resultado


//fazer um click numa div com texto qualquer que retorne um alert o texto "Você conseguiu" 
// de uma variavel
const message = "Você conseguiu"
const number = 4

return (
  <div className="App">
    <form className='change'>
      <label>Escreva um numero:</label>
      <input onChange={(e) => { alert(JSON.parse(e.target.value) + number) }}/>
    </form>

    <div className='enviar' onClick={() => alert(message)}>
      Click Aqui
    </div>
  </div>
);
}

export default App;