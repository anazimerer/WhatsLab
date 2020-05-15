import React from 'react';
//import './App.css';

class App extends React.Component {
  state ={
    usuario:[
      {
      nomeUsuario: "",
      mensagemUsuario: ""
    }   
    ],
    valorInputUsuario:"",
    valorInputMensagem:""
  };

  enviaMensagem = () => {  

    const mensagem={      
      usuario: this.state.valorInputUsuario,      
      mensagem: this.state.valorInputMensagem
    };

    const novaMensagem = [...this.state.usuario, mensagem];    
    this.setState({ usuario: novaMensagem, valorInputMensagem=""});
  };

  onChangeInputUsuario = (event) => {   
    this.setState({ valorInputUsuario: event.target.value });
  };

  onChangeInputMensagem = (event) => {   
    this.setState({ valorInputMensagem: event.target.value });
  };

  render () {
    const listaDeMensagens = this.state.usuario.map((mensagem) => {
      return (
        <p>
          {mensagem.nomeUsuario} : {mensagem.mensagemUsuario}
        </p>
      );
    });

  return (
    <div className="App">
      <div className= "container-de-conversa">
       {listaDeMensagens}
      </div>
      <form className= "formulario-de-mensagens">
       <input 
       placeholder="Usuário" 
       value={this.state.nomeUsuario}
       onChange= {this.onChangeInputUsuario}
       />
       <input placeholder="Mensagem" 
       value={this.state.mensagemUsuario}
       onChange= {this.onChangeInputMensagem}
       />
       <button 
       onClick= {this.enviaMensagem}
       >ENVIAR
       </button>

     </form>

    </div>
  );
} }

export default App;
