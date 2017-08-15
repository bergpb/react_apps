import React from 'react';
import Conta from './Conta.js';

const contaorigem = {agencia: 123, conta: 456-6, saldo: 600};
const contadestino = {agencia: 456, conta: 789-9, saldo: 400};

class Transferencia extends React.Component {
    
//metodo construtor
constructor(){
    super();
    this.state = {
        saldoorigem : contaorigem.saldo,
        saldodestino : contadestino.saldo,
    };
}

//método que realiza a transferencia entre contas 
transferir(){
    //altera estado (objeto)
    this.setState({
          saldoorigem : this.state.saldoorigem - 50,
          saldodestino : this.state.saldodestino + 50,
        });
        
    // condição se valor < 0  façao isso:    

}
    
render() {
    return (
            <div>
                <table>
                    <tr>
                        <td>
                            <Conta tipo='Origem' agencia={contaorigem.agencia} conta={contaorigem.conta} saldo={this.state.saldoorigem}/>
                        </td>
                    <tr>
                        <td></td>
                    </tr>
                        <td>
                            <Conta tipo='Destino' agencia={contadestino.agencia} conta={contadestino.conta} saldo={this.state.saldodestino}/>
                        </td>
                    </tr>
                </table>
            </div>
            <div>
                <button type="button" className="btn btn-primary" onClick={this.transferir.bind(this)} >Transferir</button>
                <span class="input-group-addon">$</span>
                <input type="number" class="form-control" aria-label="Amount (to the nearest dollar)" placeholder="Digite Valor" ></input>
                <span class="input-group-addon">.00</span>
            </div>
        );
    }
}

export default Transferencia;
