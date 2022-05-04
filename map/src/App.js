import './App.css';

function App() {
  // MAP SEMPRE EM USADO PARA TRAZER DADOS DE UM ARRAY []
  const celulas = [
    {
      nome: "Marcelo",
      idade: 30,
      telefone: 945988406,
      data_nascimento: '14/01/1992',
      nome_da_mae: "Maria",
      nome_do_pai:"Marcelo Ap"

    },
    {
      nome: "Karina",
      idade: 25,
      telefone: 940674881,
      data_nascimento: '17/06/1996',
      nome_da_mae: "Valdirene",
      nome_do_pai:"Sebastião"
    },
    {
      nome: "Eduarda",
      idade: 10,
      telefone: 98888888,
      data_nascimento: '30/06/2011',
      nome_da_mae: "Karina",
      nome_do_pai:"Marcelo"
    },
    {
      nome: "Davi",
      idade: 8,
      telefone: 977777777,
      data_nascimento: '15/06/2014',
      nome_da_mae: "karina",
    },
    {
      nome: "Théo",
      idade: 4,
      telefone: 966666666,
      data_nascimento: '17/03/2018',
      nome_da_mae: "Karina",

    },
  ]

  // fazer uma lista exibindo 5 pessoas com nome, idade, data de nascimento e nome da mae, e para 3 pessoas 
  // o nome do pai porem quem não tiver o pai nem o titulo pai


  return (
    <div className="App">
      {
        celulas.map(item => {

          return (
            <div className='box'>
              <div>{item.nome}</div>
              <div>{item.idade}</div>
              {item.nome_do_pai && <span>{item.nome_do_pai}</span> }
         
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
