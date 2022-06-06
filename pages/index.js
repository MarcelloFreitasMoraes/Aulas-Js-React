import React, { useState, useEffect } from "react";
import axios from 'axios'
import * as S from '../styles/styles'

function Aula() {
    const [resposta, setResposta] = useState()
    const [tipo, setTipo] = useState()
    const [valor, setValor] = useState()
    const [cor, setCor] = useState()
    const [Editando, setEditando] = useState()
    const [mapas, setMapas] = useState()


    useEffect(() => {
        fetch('https://clothing-store2022-default-rtdb.firebaseio.com/roupa.json')
            .then(response => response.json())
            .then(data => setResposta(data))
    }, [mapas]);


    const cadastro = () => {
        axios.post('https://clothing-store2022-default-rtdb.firebaseio.com/roupa/.json', {
            cor: cor,
            tipo: tipo,
            valor: valor
        })
            .then(() => {
                alert('sua roupa foi cadastrada')
                setMapas(!mapas)
            })
            .catch(() => alert('não conseguiu cadastrar'))
    }

    const deletar = (id) => {
        axios.delete(`https://clothing-store2022-default-rtdb.firebaseio.com/roupa/${id}.json/`, {})
            .then(() => {
                alert('roupa excluida')
                setMapas(!mapas)
            })
            .catch(() => alert('roupa não excluida'))
    }

    const editar = (id) => {
        axios.patch(`https://clothing-store2022-default-rtdb.firebaseio.com/roupa/${id}.json/`, {
            tipo: Editando
        })
            .then(() => {
                alert('roupa editada')
                setMapas(!mapas)
            })
            .catch(() => alert('roupa não editada'))
    }


    return (
        <>
        <S.Container>
            <h2>Lista de Roupas</h2>
            {resposta && Object.entries(resposta).map((roupa, index) => {
                
                return (
                    <div key={index}>
                       <p> {roupa[1].tipo}</p>
                       <p>{roupa[1].valor}</p> 
                       <p>{roupa[1].cor}</p>
                        <input onChange={(e) => setEditando(e.target.value)} />
                        <button onClick={() => deletar(roupa[0])}>Excluir</button>
                        <button onClick={() => editar(roupa[0])}>Editar</button>
                    </div>
                )
            })}
            <h2>Cadastrar nova roupa</h2>
            <S.Form>
                <label>Tipo:</label><input onChange={(e) => setTipo(e.target.value)} /><br />
                <label>Valor:</label><input onChange={(e) => setValor(e.target.value)} /><br />
                <label>Cor:</label><input onChange={(e) => setCor(e.target.value)} /><br />
                <button onClick={(e) => { e.preventDefault(); cadastro() }}>Cadastrar</button>
            </S.Form>
            </S.Container>
        </>
    );
}

export default Aula;