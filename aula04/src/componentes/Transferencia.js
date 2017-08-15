import React from 'react';
import Conta from './Conta.js';

export default class Transferencia extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      saldoorigem : this.props.origem.saldo,
      saldodestino : this.props.destino.saldo,
      valor : 0
    };
  }

  transferir(){
    if(this.state.saldoorigem >= this.state.valor)
    {
      this.setState(
        {
          saldoorigem : this.state.saldoorigem - this.state.valor,
          saldodestino : this.state.saldodestino + this.state.valor
        }
      );
    }
    else {
      alert('Saldo insuficiente!');
    }
  }

  definirValor(event){
    this.setState(
      {
        valor : Number(event.target.value)
      }
    );
  }

  render(){
    return(
      <div>
        <table>
        <tr>
          <td>
            <Conta tipo='Origem' agencia={this.props.origem.agencia} conta={this.props.origem.conta} saldo={this.state.saldoorigem}/>
          </td>
          <td>
            <Conta tipo='Destino' agencia={this.props.destino.agencia} conta={this.props.destino.conta} saldo={this.state.saldodestino}/>
          </td>
        </tr>
        <tr>
          <td>
            <input type="number"  value={this.state.valor} onChange={this.definirValor.bind(this)}/>
          </td>
        </tr>
        <tr>
          <td>
            <button type="button" onClick={this.transferir.bind(this)}>Transferir</button>
          </td>
        </tr>
        </table>
      </div>
    );
  }
}
