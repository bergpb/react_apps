import React from 'react';

export default class BarraBusca extends React.Component {
  constructor(props) {
    super(props);

    this.state = {termo : this.props.termo};
  }

  alterarTermoBusca(novoTermo){
    this.setState({novoTermo});
    // this.props.realizarPesquisa(novoTermo); // comentado para nao disparar a busca ao onchange
  }
  
  realizarBusca(){
    this.props.realizarPesquisa(this.state.novoTermo);
  }

  render(){
    return(
      <div className="p-3">
        <div className="input-group text-center">
          <input className="form-control col-sm-12" onChange={event => this.alterarTermoBusca(event.target.value)} />
            <span className="input-group-btn">
              <buttom onClick={this.realizarBusca.bind(this)} className="btn btn-warning">Buscar</buttom>
            </span>
        </div>
      </div>
    );
  }
}
