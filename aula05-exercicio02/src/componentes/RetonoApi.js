import React from 'react';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyB87gO3vvLG9r-u_DUXOpW4OCL9as5nZmU';

export default class VideoListaItem extends React.Component{
  constructor(props){
    super(props);
  }
  
    returnData(chaveBusca){
    YTSearch({key: API_KEY, term: chaveBusca}, 
         function(data){console.log(data)});
}

  render(){
    return(
        <li onClick={() => this.props.onVideoSelect(this.props.video)}>
          <div>
            <div>
              <img src={this.props.video.snippet.thumbnails.default.url}/>
            </div>
            <div>
              <div>{this.props.video.snippet.title} </div>
            </div>
          </div>
        </li>
    );
  } // render

} // class VideoListaItem
