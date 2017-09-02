import React, { Component } from 'react';
import Rotas from './componentes/Rotas.js';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  render() {
    return(
      <div className="App">
        <h2>Início</h2>
        <Rotas />
      </div>
    );
  }
}

export default App;
