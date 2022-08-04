import React, {useState} from 'react';
import Cronometro from '../componentes/cronometro';
import Formulario from '../componentes/form';
import Lista from '../componentes/lista';
import { Itarefa } from '../componentes/tipos/tarefas';
import estilo from './estilo.module.scss';




function App() {
  const [tarefas, setTarefas] = useState<Itarefa[]>([])
  const [selecionado, setSelecionado] = useState<Itarefa>()

  const selecionaTarefa = (tarefaSelecionada: Itarefa) => {
    setSelecionado(tarefaSelecionada)
    setTarefas(tarefasAteriores => tarefasAteriores.map(tarefa => ({
      ...tarefa,
      selecionadoo: tarefa.id === tarefaSelecionada.id ? true : false
    })))
  }

  return (
    <div className={estilo.AppStyle}>
      <Formulario setTarefas={setTarefas}/>
      <Lista tarefas={tarefas} selecionaTarefa={selecionaTarefa  }/>
      <Cronometro selecionado={selecionado}/> 
    </div>
  );
}

export default App;
