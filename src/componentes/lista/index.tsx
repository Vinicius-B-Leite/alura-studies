import React, { useState } from "react";
import { Itarefa } from "../tipos/tarefas";
import estilo from './estilo.module.scss'


interface Props{
    tarefas: Itarefa[],
    selecionaTarefa: (tarefaSelecionada: Itarefa) => void
}

export default function Lista({tarefas, selecionaTarefa}: Props){
    return(
        <aside className={estilo.listaTarefas}>
            <h2> Estudos do dia</h2>
            <ul>
                {tarefas.map(item => (
                    <li key={item.id} className={`${estilo.item} ${item.selecionadoo ? estilo.itemSelecionado : ''}`} onClick={() => selecionaTarefa(item)}>
                        <h3> {item.tarefa} </h3>
                        <span> {item.tempo}</span>
                    </li>
                ))}
                {/* 
                <li>
                    <h3>React</h3>
                    <span>02:00:00</span>
                </li>
                <li>
                    <h3>JavaScript</h3>
                    <span>01:00:00</span>
                </li>*/}
            </ul>
        </aside>
    )
}