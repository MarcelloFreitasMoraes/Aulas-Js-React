import React, { useState, useEffect } from "react";
import axios from 'axios'


function Aula() {
    const [resposta, setResposta] = useState()
    const [tipo, setTipo] = useState()
    const [valor, setValor] = useState()
    const [cor, setCor] = useState()
    const [Editando, setEditando] = useState()
    const [mapas, setMapas] = useState()


    useEffect(() => {
        fetch('https://teste-aula-metodos-3b964-default-rtdb.firebaseio.com/roupas.json')
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
            <h2>Lista de Roupas</h2>
            {resposta && Object.entries(resposta.femininas).map(roupa => {
                console.log(roupa, 'roupa')
                return (
                    <div className="box">
                        {roupa[1].tipo}
                        <input onChange={(e) => setEditando(e.target.value)} />
                        <button onClick={() => deletar(roupa[0])}>Excluir</button>
                        <button onClick={() => editar(roupa[0])}>Editar</button>
                        {/* <p>{roupa.valor}</p>
                    <p>{roupa.cor}</p> */}
                    </div>
                )
            })}
            <h2>Cadastrar nova roupa</h2>
            <form>
                <label>Tipo:</label><input onChange={(e) => setTipo(e.target.value)} /><br />
                <label>Valor:</label><input onChange={(e) => setValor(e.target.value)} /><br />
                <label>Cor:</label><input onChange={(e) => setCor(e.target.value)} /><br />
                <button onClick={(e) => { e.preventDefault(); cadastro() }}>Cadastrar</button>
            </form>
        </>
    );
}

export default Aula;