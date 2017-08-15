//implementar
// caso menor que 0 mostrar msg
// caso maior retirar a msg

import React from 'react';

export default class Contador extends React.Component {
  constructor() {
    super();

    this.state = {
      contador : 0,
    };
  }

  decrementar(){
    if (this.setState.valor > 0){
      this.setState({
        contador : this.state.contador - 1,
        
      });
    }
      
  }

  incrementar(){
      this.setState({
        contador : this.state.contador + 1,
        
    });
  }

  render(){
    return(
      <div>
        <h1>{this.state.contador}</h1>
          <button onClick={this.decrementar.bind(this)}>-</button>
          <button onClick={this.incrementar.bind(this)}>+</button>
          <h2 id="teste"></h2>
      </div>
    );
  }
}
