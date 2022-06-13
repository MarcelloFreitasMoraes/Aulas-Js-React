import React, { useState } from "react"
import './App.css';

function Home() {
  const [number, setNumber] = useState()

  const redirectLocal = () => {
    localStorage.setItem('nome', 'Marcelo')
  }

  const redirectSession = () => {
    sessionStorage.setItem('numero', number)
  }

  return (
    <div className="container">
      <button><a onClick={() => redirectLocal()} href="/local"> LocalStorage</a></button><br />
      <input className="input" onChange={(e) => setNumber(e.target.value)}/><br/>
      <button><a onClick={() => redirectSession()} href="/session">SessionStorage</a></button>
    </div>
  )
}

export default Home;