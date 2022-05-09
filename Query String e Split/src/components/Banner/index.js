import React from "react";
import * as S from './styles'
import '../../App.css'

export const Banner = () => {

    return (
        <>
          <S.Menu>
            <S.Lista href='http://localhost:3000/lojas?loja=mercadolivre&cor=amarelo&estado=sp'>
              Split
            </S.Lista>
          
            <S.Lista href='http://localhost:3000/cidades?cidade=paris&pais=franca&continente=europeu&turismo=torre-eiffel&time=psg'>Query String</S.Lista>
          
            <S.Lista href='/'>Home</S.Lista>
            </S.Menu>
        
        </>
        
    )
}