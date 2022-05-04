import React, { useState } from "react";
import "./App.css";

function Home() {
  const [ir, setIr] = useState("Vamos");
  const [fazer, seFazer] = useState("Jogo");
  const [contador, setContador] = useState(1);

  function mudarLocal() {
    setIr("Não Vamos");
    seFazer("Futebol");
  }

  function multiplicar() {
    setContador(contador * 4);
  }

  return (
    <div className="container">
      <div className="card">
        <p>
          Ei {ir} para o {fazer}.
        </p>
        <button onClick={() => mudarLocal()}>Trocar</button>
      </div>
      <div className="card">
        <p className="card">{contador}</p>
        <button onClick={() => multiplicar()}>+</button>
      </div>
    </div>
  );
}
export default Home;
//vc tera q fazer uma função q muda dois states q exibe na tela num mesma frase
//vc tera q fazer 1 state como contador, * 4