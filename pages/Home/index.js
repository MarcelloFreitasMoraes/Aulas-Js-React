import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Container, Title, Status } from './styles';

export default function Home() {
    const [resposta, setResposta] = useState()

    useEffect(() => {
        axios.get('https://teste-aula-12----firebase-default-rtdb.firebaseio.com/jogador.json')
            .then(function (response) {
                setResposta(response.data)
            }
            )
    }, [])

    console.log(resposta, 'response')


    return (

        <Container>
            {resposta &&
                <>
                    <Title>Salarios Status</Title>
                    {Object.values(resposta?.passe).map(item => {
                        return (
                            <Status>{item.pais}</Status>
                        )
                    })}
                </>
            }
        </Container>

    )
}