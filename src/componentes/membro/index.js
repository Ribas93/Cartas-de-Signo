import React, {Component} from 'react';



class Membro extends Component{
    constructor(props){
        super(props);
        this.state = {nome: 'Usuario'}
        this.entrar = this.entrar.bind(this)
        this.sair = this.sair.bind(this)
        
    }

    
    entrar(name){
        this.setState({nome:name})
    }
     sair(){
    this.setState({nome: ""})
     }

    render(){
         
        return(
            <div>
               <h1>Ola {this.state.nome}, Seja Bem-Vindo</h1>
               <button onClick={() => this.entrar('Renato')}>Entrar como Renato</button>
               <button onClick={() => this.entrar('Fernanda')}>Entrar como Fernanada</button>
               <button onClick={this.sair}>Sair</button>
            </div>
        )
    }
}

export default Membro;