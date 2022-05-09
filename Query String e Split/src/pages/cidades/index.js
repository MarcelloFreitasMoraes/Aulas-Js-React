import React from "react";
import { Banner } from "../../components/Banner";
import { useState, useEffect } from "react";
import * as S from './styles'
import '../../App.css'

export default function Cidades() {

    const params = new URLSearchParams(window.location.search);
    let urlParams = undefined;
    params.forEach((value, key) => {
        urlParams = Object.assign({}, urlParams, {

            [key]: value.toString()
        });
    });


    const [cidade, setCidade] = useState()
    const [continente, setContinente] = useState()
    const [pais, setPais] = useState()
    const [time, setTime] = useState()
    const [turismo, setTurismo] = useState()

    useEffect(() => {
        if(urlParams.cidade === 'paris') {
            setCidade(
                
                <div className='box'>
                    <img src="https://f7j8i5n9.stackpathcdn.com/wp-content/uploads/2016/07/onde-ficar-em-paris-10.jpeg" />
                </div>
            )
        }
        else if (urlParams.cidade === 'roma') {
            setCidade(
                <div className='box'>
                    <img src="https://thumbs.dreamstime.com/z/indicadores-velhos-bonitos-em-roma-italy-o-colosseum-ou-coliseu-no-nascer-do-sol-144201572.jpg" />
                </div>
            )
        }
        else if (urlParams.cidade === 'stoccolma') {
            setCidade(
                <div className='box'>
                    <img src="https://www.costacruzeiros.com/content/dam/costa/costa-magazine/articles-magazine/travel/o-que-fazer-na-suecia/stoccolma_d.jpg.image.648.487.high.jpg" />
                </div>
            )
        }
        else if (urlParams.cidade === 'london') {
            setCidade(
                <div className='box'>
                    <img src="https://www.visitbritain.com/sites/default/files/styles/consumer_vertical_hero__1920x1080/public/paragraphs_bundles/hero/victoria-tower-london-england.jpg?itok=-SCnpFU9" />
                </div>
            )
        }
        else if (urlParams.cidade === 'doha') {
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
        if (urlParams.continente === 'europeu') {
            setContinente(
                <p className='lugares'>
                    Europeu
                </p>
            )
        }
        else if (urlParams.continente === 'asia') {
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
        if (urlParams.pais === 'franca') {
            setPais(
                <h1>
                    França
                </h1>
            )
        }
        else if (urlParams.pais === 'italia') {
            setPais(
                <h1>
                    Itália
                </h1>
            )
        }
        else if (urlParams.pais === 'suecia') {
            setPais(
                <h1>
                    Suécia
                </h1>
            )
        }
        else if (urlParams.pais === 'inglaterra') {
            setPais(
                <h1>
                    Inglaterra
                </h1>
            )
        }
        else if (urlParams.pais === 'catar') {
            setPais(
                <h1>
                    Catar
                </h1>
            )
        }
        else {
            setPais(<p>Não existe</p>)
        }
    }, [])

    useEffect(() => {
        if (urlParams.time === 'psg') {
            setTime(
                <h1>
                    PSG
                </h1>
            )
        }
        else if (urlParams.time === 'fiorentina') {
            setTime(
                <h1>
                    Fiorentina
                </h1>
            )
        }
        else if (urlParams.time === 'gais') {
            setTime(
                <h1>
                    GAIS.
                </h1>
            )
        }
        else if (urlParams.time=== 'liverpool') {
            setTime(
                <h1>
                    Liverpool
                </h1>
            )
        }
        else if (urlParams.time === 'qatar sc') {
            setTime(
                <h1>
                    Qatar SC
                </h1>
            )
        }
        else {
            setTime(<p>Não existe</p>)
        }
    }, [])

    useEffect(() => {
        if (urlParams.turismo === 'torre-eiffel') {
            setTurismo(
                <h1>
                    Torre Eiffel
                </h1>
            )
        }
        else if (urlParams.turismo === 'Coliseu') {
            setTurismo(
                <h1>
                    Coliseu
                </h1>
            )
        }
        else if (urlParams.turismo === 'Sodermalm') {
            setTurismo(
                <h1>
                    Södermalm
                </h1>
            )
        }
        else if (urlParams.turismo === 'Castelo-de-Windsor-e-Bath') {
            setTurismo(
                <h1>
                    Castelo de Windsor e Bath
                </h1>
            )
        }
        else if (urlParams.turismo === 'Museu-de-Arte-Islamica') {
            setTurismo(
                <h1>
                    Museu de Arte Islâmica
                </h1>
            )
        }
        else {
            setTurismo(<p>Não existe</p>)
        }
    }, [])

    return (
        <>
            <S.Section>
            <Banner />
            <S.Card>
            {cidade}
            {continente}
            {pais}
            {time}
            {turismo}
            </S.Card>
            </S.Section>
        </>
    )
}