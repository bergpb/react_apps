import React from 'react';

export default class Conta extends React.Component {

  render(){
    return(
      <div>
        <h3>{this.props.tipo}</h3>
        <h4>Agência: {this.props.agencia}</h4>
        <h4>Número: {this.props.conta}</h4>
        <h4>Saldo: {this.props.saldo}</h4>
      </div>
    );
  }
}
