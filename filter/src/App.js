import "./App.css";

function App() {
  // MAP SEMPRE EM USADO PARA TRAZER DADOS DE UM ARRAY [].
  const familia = [
    {
      nome: "Marcelo",
      idade: "30 anos",
      telefone: "945988406",
      data_nascimento: "14/01/1992",
      nome_da_mae: "Maria",
      Trabalha: true,
    },
    {
      nome: "Karina",
      idade: "25 anos",
      telefone: "940674881",
      data_nascimento: "17/06/1996",
      nome_da_mae: "Valdirene",
      Trabalha: true,
    },
    {
      nome: "Eduarda",
      idade: "10 anos",
      telefone: 98888888,
      data_nascimento: "30/06/2011",
      nome_da_mae: "Karina",
      Trabalha: false,
    },
    {
      nome: "Davi",
      idade: "8 anos",
      telefone: "977777777",
      data_nascimento: "15/06/2014",
      nome_da_mae: "karina",
      Trabalha: false,
    },
  ];

  const favorito = [
    {
      nome: "Théo",
      idade: "4 anos",
      frutaFavorita: "uva",
    },
    {
      nome: "Nathan",
      idade: "34 anos",
      frutaFavorita: "abacaxi",
    },
    {
      nome: "Rafael",
      idade: "25 anos",
      frutaFavorita: "abacaxi",
    },
  ];

  const filtrandoFamilia = familia.filter((membros) => {
    return membros.Trabalha === false;
  });

  const filtrandoFavorito = favorito.filter((pessoas) => {
    return pessoas.frutaFavorita === "abacaxi";
  });

  return (
    <>
      <h1>Não Trabalha</h1>
      <div className="app">
        {filtrandoFamilia.map((membros) => {
          return (
            <div className="box">
              <p>
                <b>Nome:</b> {membros.nome}
              </p>
              <p>
                <b>Data de Nascimento:</b> {membros.data_nascimento}
              </p>
              <p>
                <b>Nome da Mãe:</b> {membros.nome_da_mae}
              </p>
            </div>
          );
        })}
      </div>
      <hr />
      <h1>Pessoas gostam Abacaxi</h1>
      <div className="app">
        {filtrandoFavorito.map((pessoas) => {
          return (
            <div className="box">
              <p>
                <b>Nome:</b> {pessoas.nome}
              </p>
              <p>
                <b>Data de Nascimento:</b> {pessoas.idade}
              </p>
              <p>
                <b>Nome da Mãe:</b> {pessoas.frutaFavorita}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;