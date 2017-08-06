import React from 'react';

export default class Contador extends React.Component {
  constructor() {
    super();

    this.state = {
      contador : 0,
    };
  }

  decrementar(){
    this.setState({
        contador : this.state.contador - 1,
    });
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
          <button bsStyle="primary" onClick={this.decrementar.bind(this)}>-</button>
          <button bsStyle="primary" onClick={this.incrementar.bind(this)}>+</button>
      </div>
    );
  }
}
