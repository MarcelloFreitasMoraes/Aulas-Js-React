import React from "react";

export const Banner = () => {

    return (
        <>
        <ul>
          <li>
            <a href='http://localhost:3000/lojas?loja=mercadolivre&cor=amarelo&estado=sp'>
              Split
            </a>
          </li>
          <li>
            <a href='http://localhost:3000/cidades?cidade=paris&pais=franca&continente=europeu&turismo=torre-eiffel&time=psg'>Query String</a>
          </li>
          <li>
            <a href='/'>Home</a>
          </li>
        </ul>
        </>
    )
}