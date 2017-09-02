import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import BemVindos from './BemVindos.js';
import CadastroProduto from './CadastroProduto.js';
import ListarProdutos from './ListarProdutos.js';
import FaleConosco from './FaleConosco.js';
import Info from './Info.js';

export default class Rotas extends React.Component{
    
    render(){
        return(
        <Router>
            <div>
                <nav className="navbar navbar-default">
                      <div className="container-fluid">
                        <div className="navbar-header">
                          <span className="navbar-brand"><Link to="/">Bem Vindos</Link></span>
                        </div>
                        <ul className="nav navbar-nav">
                          <li><Link to="/novo">Cadastrar</Link></li>
                          <li><Link to="/lista">Listar</Link></li>
                          <li><Link to="/info">Informações</Link></li>
                          <li><Link to="/fale">Fale Conosco</Link></li>
                        </ul>
                      </div>
                    </nav>
                <div id="container wall">
                    <Route exact path="/" component={BemVindos} />
                    <Route path="/lista" component={ListarProdutos} />
                    <Route path="/novo" component={CadastroProduto} />
                    <Route path="/info" component={Info} />
                    <Route path="/fale" component={FaleConosco} />
                </div>
            </div>
        </Router>
        );
    }
}


   