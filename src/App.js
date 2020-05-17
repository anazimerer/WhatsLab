import React from 'react';
import styled from 'styled-components';
import ReactDOM from 'react-dom';

const Container = styled.div`
  display: block;  
  width: 60%;
  height: 600px;
  background-color:#F7F2E0; 
  border: 1px solid black;     
  border-radius:5px; 
  margin: auto;
`
const Secao = styled.section`
  margin-top: 0px;
  background-color:#F7F2E0;
  height: 88%;
`
const Botao =styled.button`
  color: black;
  background-color: #F4FA58;
  border-radius: 10px;
`
const Form =styled.div`
  display: flex;
  flex-direction:row; 
  justify-content: space-around;
  height:30px;
  border-top: black;
  background-color:#F7F2E0; 
  
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
const CaixaDeMensagem =styled.div`
display: inline-flex;
flex-direction: column;
background-color: #F2F5A9;
border-radius: 10px;
margin: 10px;

`
const Usuario =styled.p`  
  font-weight: bold;
  padding: 5px; 
  margin: 1px;
`
const Mensagem =styled.p`
  padding: 5px;
  padding-top: 2px;   
  margin: 1px;
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

  apagaMensagem = (event) =>{
    ReactDOM.findDOMNode(event.target).parentNode.style.display = 'none'
  }

 render () {  
    const listaDeMensagens = this.state.dadosDaMensagem.map((objeto) => {
      return (
        <div> 
          <CaixaDeMensagem onDoubleClick={this.apagaMensagem}>
            <Usuario>{objeto.usuario}</Usuario>
            <Mensagem>{objeto.mensagem}</Mensagem>
          </CaixaDeMensagem>
        </div>
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
