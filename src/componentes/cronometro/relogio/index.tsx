import React from "react";
import estilos from './estilo.module.scss'

interface  Props{
    tempo:  Number | undefined
}

export default function Relogio({tempo = 0}:  Props) {
    const minutos = Math.floor(Number(tempo) / 60)
    const segundos = Number(tempo) % 60

    const [dezenaMinuto, unidadeMinuto] = String(minutos).padStart(2, '0')
    const [dezenaSegundo, unidadeSegundo] = String(segundos).padStart(2, '0')

    return (
        <>
            <span className={estilos.relogioNumero}>{dezenaMinuto}</span>
            <span className={estilos.relogioNumero}>{unidadeMinuto}</span>
            <span className={estilos.relogioDivisao}>:</span>
            <span className={estilos.relogioNumero}>{dezenaSegundo}</span>
            <span className={estilos.relogioNumero}>{unidadeSegundo}</span>
        </>
    )
}