import React, { useEffect, useState } from "react";
import Botao from "../botao";
import Relogio from "./relogio";
import estilo from './estilo.module.scss'
import { Itarefa } from "../tipos/tarefas";
import { converteParaSegundos } from '../../funcao/tempo/tempo'

interface Props{
    selecionado: Itarefa | undefined
}

export default function Cronometro({selecionado}: Props){

    const [tempo, setTempo] = useState<Number>()

    useEffect(()=>{
        if(selecionado?.tempo){
            setTempo(converteParaSegundos(selecionado.tempo))
        }
    }, [selecionado])


    const regressiva = (contador: Number = 0) => {
        setTimeout(() => {
            if(contador > 0) {
                setTempo(Number(contador) - 1);
                return regressiva(Number(contador) - 1);
            }
        }, 1000);}
    return(
        <div className={estilo.cronometro}>
            <p className={estilo.titulo}>Escolha um card e inicie o cronômetro</p>
            <div className={estilo.relogioWrapper}>
                <Relogio tempo={tempo}/>
            </div>
            <Botao texto="Começar!" click={() => regressiva(tempo)}/>
        </div>
    )
}