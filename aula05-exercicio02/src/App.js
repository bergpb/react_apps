import React, { Component } from 'react';
import './App.css';
import YTSearch from 'youtube-api-search';

import BarraBusca from './componentes/BarraBusca.js';
import VideoLista from './componentes/VideoLista.js';
import VideoDetalhe from './componentes/VideoDetalhe.js';

const API_KEY = 'suaapikeyaqui';

// YTSearch({key: API_KEY, term: 'Vozão'}, function(data){console.log(data)});

class App extends Component {

  constructor(props){
    super(props);
    
    this.state = {
      videos : [],
      videoSelecionado : null,
      termo : 'teste'
    };

    this.pesquisar(this.state.termo);

  }

  pesquisar(chaveBusca){
    YTSearch({key: API_KEY, term: chaveBusca},
      (videos) => {this.setState({
          videos : videos,
          videoSelecionado : videos[0]
          })}
    );
}

  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="col-sm-6">
              <BarraBusca termo={this.state.termo} realizarPesquisa={termo => this.pesquisar(termo)}/>
              <VideoDetalhe video={this.state.videoSelecionado} />
            </div>
          </div>
        <div class="row">
          <div class="col-sm-6">
              <VideoLista onVideoSelect={videoSelecionado => this.setState({videoSelecionado})}
               videos={this.state.videos} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;