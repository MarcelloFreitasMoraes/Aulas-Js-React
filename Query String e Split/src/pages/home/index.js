import React from "react";
import { useState } from "react";

export default function Home() {
    const [loja, setLoja] = useState();
    const [cor, setCor] = useState(); 
    const [comodo, setComodo] = useState();
    const [fornecedor, setFornecedor] = useState(); 
    console.log(loja)
console.log(cor)
    return (
        <>
        <button onClick={() => setLoja('riachuelo')}>Riachuelo</button>
        <button onClick={() => setLoja('americanas')}>Americanas</button>
        <button onClick={() => setLoja('magazine')}>Magazine Luiza</button>

        <button onClick={() => setCor('azul')}>Azul</button>
        <button onClick={() => setCor('amarelo')}>Amarelo</button>
        <button onClick={() => setCor('vermelho')}>Vermelho</button>

        <button onClick={() => setComodo('sala')}>Sala</button>
        <button onClick={() => setComodo('quarto')}>Quarto</button>
        <button onClick={() => setComodo('cozinha')}>Cozinha</button>

        <button onClick={() => setFornecedor('bonato')}>Bonato</button>
        <button onClick={() => setFornecedor('philco')}>Philco</button>
        <button onClick={() => setFornecedor('madeira-madeira')}>Madeira - Madeira</button>
            
                    <a href={`http://localhost:3000/resultado?loja=${loja}&cor=${cor}`}>Buscar</a>

                  
            


        </>
    )
}


