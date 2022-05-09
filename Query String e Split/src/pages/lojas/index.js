import React, { useEffect, useState } from "react";
import { Banner } from "../../components/Banner";

export default function Lojas() {


    //Split
    const url = window.location.href
    const exerSplit = url.split('&')
    const splitLoja = exerSplit[0].split('loja=')[1]
    const splitCor = exerSplit[1].split('cor=')[1]
    const splitEstado = exerSplit[2].split('estado=')[1]

    const [loja, setLoja] = useState()
    const [cor, setCor] = useState()
    const [estado, setEstado] = useState()

    useEffect(() => {
        if (splitLoja === 'mercadolivre') {
            setLoja(
                <div className='box'>
                    <img src="https://s2.glbimg.com/Bu6upvmSg6SRv0za635uXphThKo=/620x430/e.glbimg.com/og/ed/f/original/2020/03/28/mercado-livre.jpg" />
                </div>
            )
        }
        else if (splitLoja === 'shopee') {
            setLoja(
                <div className='box'>
                    <img src="https://braziljournal.s3.amazonaws.com/covers/b6fee53a-abac-dced-b483-aca2b5fc2df0.jpg?v=1638917937" />
                </div>
            )
        }
        else if (splitLoja === 'wish') {
            setLoja(
                <div className='box'>
                    <img src="https://www.meliuz.com.br/blog/wp-content/uploads/2020/12/Capa-post-Blog.png" />
                </div>
            )
        }
        else {
            setLoja(<p>Não existe</p>)
        }
    },[])

    useEffect(() => {
        if (splitCor === 'amarelo') {
            setCor(
                <p className='amarelo'>
                    Amarelo
                </p>
            )
        }
        else if (splitCor === 'vermelho') {
            setCor(
                <p className='vermelho'>
                    Vermelho
                </p>
            )
        }
        else if (splitCor === 'azul') {
            setCor(
                <p className='azul'>
                    Azul
                </p>
            )
        }
        else {
            setCor(<p>Não existe</p>)
        }
    },[])

    useEffect(() => {
        if (splitEstado === 'sp') {
            setEstado(
                <h1>
                    São Paulo
                </h1>
            )
        }
        else if (splitEstado === 'rj') {
            setEstado(
                <h1>
                    Rio de Janeiro
                </h1>
            )
        }
        else if (splitEstado === 'sc') {
            setEstado(
                <h1>
                    Santa Catarina
                </h1>
            )
        }
        else {
            setEstado(<p>Não existe</p>)
        }
    },[])

    return (
        <>
        <Banner />
            {loja}
            {cor}
            {estado}
        </>
    )
}