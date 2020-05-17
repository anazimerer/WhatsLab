import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  background-color: whitesmoke;
  border: 1px solid black;   
  height: 450px;
  border-radius:5px; 
`
const Secao = styled.section`
  margin-top: 0px;
  background-color:whitesmoke;
  height: 88%;
`
const Botao =styled.button`
  color: black;
  border-radius: 10px;
`
const Form =styled.div`
  display: flex;
  flex-direction:row; 
  justify-content: space-around;
  height:30px;
  border-top: black;
  background-color:whitesmoke;  
  
`
const InputUsuario =styled.input`
  width: 20%;
  border-radius: 10px;
  background-color:white;
  
`
const InputMensagem =styled.input`
  width:63%;
  border-radius: 10px;
  background-color:white;
`
class App extends React.Component {
 
  state ={
    dadosDaMensagem:[
      {
      nomeUsuario: "",
      mensagemUsuario: ""
    }  
  ],
    valorInputUsuario:"",
    valorInputMensagem:"",
  
  };

  enviaMensagem = (event) => {      
    const mensagem={      
      usuario: this.state.valorInputUsuario,      
      mensagem: this.state.valorInputMensagem
    };
    console.log("teste " + mensagem.usuario + mensagem.mensagem)//

    const novaMensagem = [...this.state.dadosDaMensagem, mensagem];    
    this.setState({ dadosDaMensagem: novaMensagem}); 
    this.setState({valorInputMensagem:""});
  };

  onChangeInputUsuario = (event) => {   
    this.setState({ valorInputUsuario: event.target.value });
    console.log(this.state.valorInputUsuario)
  };

  onChangeInputMensagem = (event) => {   
    this.setState({ valorInputMensagem: event.target.value });
   
  };

  onKeyDown = (event) =>{
    if (event.key === 'Enter') {
      event.preventDefault();
      this.enviaMensagem();
    }

  }
 render () {  

    const listaDeMensagens = this.state.dadosDaMensagem.map((objeto) => {
      return (
        <p>
          {objeto.usuario} : {objeto.mensagem}
        </p>
      );
    });

  return (    
    <Container>
      <Secao>
        <p>{listaDeMensagens}</p> 
      </Secao>
      <Form>
        <InputUsuario
        placeholder="Usuário" 
        value={this.state.valorInputUsuario}
        onChange= {this.onChangeInputUsuario}
        />

        <InputMensagem placeholder="Mensagem" 
        value={this.state.valorInputMensagem}
        onChange= {this.onChangeInputMensagem}
        onKeyDown={this.onKeyDown}
        />

        <Botao onClick= {this.enviaMensagem}>ENVIAR
        </Botao>
     </Form>
    </Container>
  );
} }

export default App;
