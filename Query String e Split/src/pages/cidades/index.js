import React from "react";
import { Banner } from "../../components/Banner";
import { useState, useEffect } from "react";

export default function Cidades() {

    const url = window.location.href
    const params = new URLSearchParams(window.location.search);
    let urlParams = undefined;
    params.forEach((value, key) => {
        urlParams = Object.assign({}, urlParams, {
            [key]: value.toString()
        });
    });

    console.log(urlParams)

    const [cidade, setCidade] = useState()
    const [continente, setContinente] = useState()
    const [pais, setPais] = useState()
    const [time, setTime] = useState()
    const [turismo, setTurismo] = useState()

    useEffect(() => {
        if (urlParams === 'paris') {
            setCidade(
                <div className='box'>
                    <img src="https://f7j8i5n9.stackpathcdn.com/wp-content/uploads/2016/07/onde-ficar-em-paris-10.jpeg" />
                </div>
            )
        }
        else if (urlParams === 'italia') {
            setCidade(
                <div className='box'>
                    <img src="https://thumbs.dreamstime.com/z/indicadores-velhos-bonitos-em-roma-italy-o-colosseum-ou-coliseu-no-nascer-do-sol-144201572.jpg" />
                </div>
            )
        }
        else if (urlParams === 'sucia') {
            setCidade(
                <div className='box'>
                    <img src="https://www.costacruzeiros.com/content/dam/costa/costa-magazine/articles-magazine/travel/o-que-fazer-na-suecia/stoccolma_d.jpg.image.648.487.high.jpg" />
                </div>
            )
        }
        else if (urlParams === 'inglaterra') {
            setCidade(
                <div className='box'>
                    <img src="https://www.visitbritain.com/sites/default/files/styles/consumer_vertical_hero__1920x1080/public/paragraphs_bundles/hero/victoria-tower-london-england.jpg?itok=-SCnpFU9" />
                </div>
            )
        }
        else if (urlParams === 'catar') {
            setCidade(
                <div className='box'>
                    <img src="https://brasiliainfoco.com/wp-content/uploads/2021/03/Doha-5.jpg" />
                </div>
            )
        }
        else {
            setCidade(<p>Não existe</p>)
        }
    }, [])

    useEffect(() => {
        if (urlParams === 'europeu', 'franca', 'italia', 'suecia', 'inglaterra') {
            setContinente(
                <p className='lugares'>
                    Europeu
                </p>
            )
        }
        else if (urlParams === 'asia', 'catar') {
            setContinente(
                <p className='lugares'>
                    Asia
                </p>
            )
        }

        else {
            setContinente(<p>Não existe</p>)
        }
    }, [])

    useEffect(() => {
        if (urlParams === 'franca') {
            setPais(
                <h1>
                    França
                </h1>
            )
        }
        else if (urlParams === 'italia') {
            setPais(
                <h1>
                   Itália
                </h1>
            )
        }
        else if (urlParams === 'suecia') {
            setPais(
                <h1>
                    Suécia
                </h1>
            )
        }
        else if (urlParams === 'inglaterra') {
            setPais(
                <h1>
                    Inglaterra
                </h1>
            )
        }
        else if (urlParams === 'catar') {
            setPais(
                <h1>
                    Catar
                </h1>
            )
        }
        else {
            setPais(<p>Não existe</p>)
        }
    },[])

    useEffect(() => {
        if (urlParams === 'psg') {
            setTime(
                <h1>
                    PSG
                </h1>
            )
        }
        else if (urlParams === 'fiorentina') {
            setTime(
                <h1>
                  Fiorentina
                </h1>
            )
        }
        else if (urlParams === 'gais') {
            setTime(
                <h1>
                    GAIS.
                </h1>
            )
        }
        else if (urlParams === 'liverpool') {
            setTime(
                <h1>
                    Liverpool
                </h1>
            )
        }
        else if (urlParams === 'qatar') {
            setTime(
                <h1>
                    Qatar SC
                </h1>
            )
        }
        else {
            setTime(<p>Não existe</p>)
        }
    },[])

    return (
        <>
            <Banner />
            {cidade}
            {continente}
            {pais}
            {time}
            {turismo}
        </>
    )
}