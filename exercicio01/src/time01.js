//implementar
// caso menor que 0 mostrar msg
// caso maior retirar a msg

import React from 'react';

export default class Contador1 extends React.Component {
  constructor() {
    super();

    this.state = {
      contador1 : 0,
    };
  }

  decrementar(){
    if (this.state.contador1 <=0 ){
      this.setState({
        contador1 : 0,
      });
    }
    else{
      this.setState({
        contador1 : this.state.contador1 - 1,
      });
    }
  }

  incrementar(){
      this.setState({
        contador1 : this.state.contador1 + 1,
      });
  }

  render(){
    return(
      <div>
        <h1>{this.state.contador1}</h1>
          <button onClick={this.decrementar.bind(this)}>-</button>
          <button onClick={this.incrementar.bind(this)}>+</button>
      </div>
    );
  }
}
