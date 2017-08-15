import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Transferencia from './componentes/Transferencia.js';

const origem = {
  agencia : '123',
  conta : '12345-6',
  saldo : 700.0
};

const destino = {
  agencia : '456',
  conta : '78900-1',
  saldo : 800.0
};

class App extends Component {
  render() {
    return (
      <div>        
        <Transferencia origem={origem} destino={destino}/>
      </div>
    );
  }
}

export default App;
