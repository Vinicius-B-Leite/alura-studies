import React from "react";
import estilo from './estilo.module.scss'


class Botao extends React.Component<{texto: string, click?: () => void}>{
    render(){
        return(
            <button className={estilo.botao} onClick={this.props.click}>
                {this.props.texto}
            </button>
        )
    }
}

export default Botao