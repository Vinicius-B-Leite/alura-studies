import React from "react";
import Botao from "../botao";
import { Itarefa } from "../tipos/tarefas";
import estilo from './estilo.module.scss'
import {v4 as uuidv4 } from 'uuid' 

class Formulario extends React.Component<{setTarefas: React.Dispatch<React.SetStateAction<Itarefa[]>>}>{
    state = {
        tarefa: "",
        tempo: "00:00"
    }

    adicionarTarefa(evento: React.FormEvent){
        evento.preventDefault()
        this.props.setTarefas(tarefasAntigas => [...tarefasAntigas, {...this.state, selecionadoo: false, completo: false, id: uuidv4()}])
        this.setState({tarefa: "", tempo: "00:00"})
    }
    render(){
        return(

            <form className={estilo.novaTarefa} onSubmit={this.adicionarTarefa.bind(this)}>
                <div className={estilo.inputContainer}>
                    <label htmlFor="tarefa">Adicione um novo estudo</label>
                    <input type="text" name="tarefa" id="tarefa" placeholder="O que você quer estudar" onChange={evento => this.setState({...this.state, tarefa: evento.target.value})} required/>
                </div>

                <div className={estilo.inputContainer}>
                    <label htmlFor="tempo">Tempo</label>
                    <input type="time" step="1" name="tempo" id="tempo" min="00.00.00" max="01:30:00" value={this.state.tempo} onChange={evento => this.setState({...this.state, tempo: evento.target.value})} required/>
                </div>

                <Botao texto="adicionar"/>
            </form>

        )
    }
}


export default Formulario