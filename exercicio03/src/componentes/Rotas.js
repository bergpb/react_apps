import React, { Component } from 'react';
import {Router, Route, Redirect, hashHistory} from 'react-router';
import CadastroProduto from './CadastroProduto.js';
import ListarProdutos from './ListarProdutos.js';
import FaleConosco from './FaleConosco.js';
import Info from './Info.js';

export default class Rotas extends React.Component{
    
    render(){
        return(
            //hashHistory guarda a historia de navegacao do usuario
             <Router history='hashHistory'>
                <Route path='/lista' component={ListarProdutos} />
                <Route path='/novo' component={CadastroProduto} />
                <Route path='/info' component={Info} />
                <Route path='/fale' component={FaleConosco} />
            </Router>
        );
    }
    
}


   