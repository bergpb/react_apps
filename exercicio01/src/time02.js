//implementar
// caso menor que 0 mostrar msg
// caso maior retirar a msg

import React from 'react';

export default class Contador2 extends React.Component {
  constructor() {
    super();

    this.state = {
      contador2 : 0,
    };
  }

  decrementar(){
    if (this.state.contador2 <=0 ){
      this.setState({
        contador2 : 0,
      });
    }
    else{
      this.setState({
        contador2 : this.state.contador2 - 1,
      });
    }
  }

  incrementar(){
      this.setState({
        contador2 : this.state.contador2 + 1,
      });
  }

  render(){
    return(
      <div>
        <h1>{this.state.contador2}</h1>
          <button onClick={this.decrementar.bind(this)}>-</button>
          <button onClick={this.incrementar.bind(this)}>+</button>
      </div>
    );
  }
}
