import React,{Component} from "react";

class Saudacao extends Component{
   
    constructor(props){
        super(props)
        this.setNome = this.setNome.bind(this)
    }
    //setando os atributos 
    state = {
        //recebe por padrão os dados passados na chamada do componente
        tipo : this.props.tipo,
        nome: this.props.nome
    }

    setTipo(event){
        this.setState({tipo: event.target.value})
        
    }
    setNome(event){
        this.setState({nome: event.target.value})
        
    }
   
    //metodo que renderiza o componente 
    render(){
        //operador destructuring- extrai os atributos do objeto passado
        //nesse caso o estado atual da classe
        const {tipo,nome} = this.state
        return(
            <div>
                <h1>{tipo} {nome}!!!</h1>
                <hr />
                <input type="text" placeholder="Tipo..." value={tipo} onChange={e=>this.setTipo(e)} />
                {/* usando a funcao bind associar a chamada de setNome ao objeto atual */}
                <input type="text" placeholder="Nome..." value={nome} onChange={this.setNome} />
            </div>

        )
    }
}

export {Saudacao}