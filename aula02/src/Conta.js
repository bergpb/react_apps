import React, { Component } from 'react';

class Conta extends React.Component {
  render() {
    return (
      <div className="App">
        <p>Agência: {this.props.agencia}</p>
        <p>Conta: {this.props.conta}</p>
        <p>Saldo: {this.props.saldo}</p>
      </div>
    );
  }
}

export default Conta;
