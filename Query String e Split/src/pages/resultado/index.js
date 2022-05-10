import React, { useEffect, useState } from "react";

export default function Resultado() {

    const params = new URLSearchParams(window.location.search);
    let urlParams = undefined;
    params.forEach((value, key) => {
        urlParams = Object.assign({}, urlParams, {

            [key]: value.toString()
        });
    });

    console.log(urlParams)

    function loja() {
        if (urlParams.loja === 'riachuelo') {
            return (
                <img src="https://f7j8i5n9.stackpathcdn.com/wp-content/uploads/2016/07/onde-ficar-em-paris-10.jpeg" />
            )
        }
    }

    function cor(backgraund) {
        if (backgraund === 'vermelho') {
            return "red"
        }
    }

    return (
        <div style={{ background: cor(urlParams.cor) }}>
            {loja()}
        </div>
    )
}