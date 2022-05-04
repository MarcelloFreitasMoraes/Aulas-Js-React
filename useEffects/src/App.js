import React, { useState, useEffect } from "react";

function Home() {
  const [elenco, setElenco] = useState('Alisson, Danilo, Marquinhos, Thiago Silva, Guilherme Arana, Casemiro, Fred, Lucas Paquetá, Antony, Neymar e Vinícius Júnior')
  const [nomes, setNomes] = useState('Karina, Davi, Théo, Edudarda, Marcelo, Rafael, Felipe, Zoe Lilly, Grazyela e Maria Luiza')
  const [timeSelecao, setTimeSelecao] = useState('Seleção Brasileira')
  const [acionador, setAdicionar] = useState('selecao')
  const [trocarNomes, setTrocaNomes] = useState(0)

  useEffect(() => {
    if (acionador === 'corinthians') {
      setElenco('Cássio, João Victor, Gil, Raúl Gustavo, Du Queiroz, Paulinho, Giuliano, Renato Augusto, Willian, Adson, Róger Guedes.')
      setTimeSelecao('Corinthinas')
    }
    else if (acionador === 'sao paulo') {
      setElenco(' Tiago Volpi, Igor Vinicius, Arboleda, Léo, Reinaldo, Luan, Gabriel Sara, Igor Gomes, Alisson, Eder e Luciano.')
      setTimeSelecao('São Paulo')
    }
    else if (acionador === 'palmeiras') {
      setElenco('Weverton, Marcos Rocha, Gómez, Murilo, Piquerez, Danilo, Zé Rafael, Raphael Veiga, Dudu, Rony, Rafael Navarro')
      setTimeSelecao('Palmeiras')
    }
    else if (acionador === 'selecao') {
      setElenco('Alisson, Danilo, Marquinhos, Thiago Silva, Guilherme Arana, Casemiro, Fred, Lucas Paquetá, Antony, Neymar e Vinícius Júnior')
      setTimeSelecao('Seleção Brasileira')
    }

  }, [acionador]);

  useEffect(() => {
    if (trocarNomes === 1) {
      setNomes('Gelinho, Mauricio, Felipe, Poly, Nathan, Emanuel, Caio, Italo, Douglas e Primo')
    }
    else if (trocarNomes === 2) {
      setNomes('Goku, Freeza, Curirin, Picolo, Mestre Kame, Gohan, Jiren, Nappa, Vegeta')
    }
  },
    [trocarNomes])

  //fazer aparecer a lista da seleção brasileira, só que vc tera 3 botôes para trocar
  //os nomes da seleção brasileira, para os jogadores do corinthians, do são paulo e do
  //palmeiras, 11 jogadores.

  //uma função q mude a tela 10  nomes diferentes, ao clicar em um botão, mudar 2x

  return (
    <>
      <h1>useEffect</h1>
      <div>
        <div>
          <h3>Exercício 1</h3>
          <h2>{timeSelecao}</h2>
          <p>{elenco}</p>
          <button onClick={() => setAdicionar('selecao')}>SELEÇÃO BRASILEIRA</button>
          <button onClick={() => setAdicionar('corinthians')}>CORINTHIANS</button>
          <button onClick={() => setAdicionar('sao paulo')}>SÃO PAULO</button>
          <button onClick={() => setAdicionar('palmeiras')}>PALMEIRAS</button>
        </div>
        <div>
          <h3>Exercício 2</h3>
          <p>{nomes}</p>
          <button onClick={() => setTrocaNomes(trocarNomes + 1)}>MUDAR NOMES</button>
        </div>
      </div>
    </>
  );
}

export default Home;