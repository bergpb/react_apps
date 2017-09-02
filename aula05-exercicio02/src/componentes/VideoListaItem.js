import React from 'react';

export default class VideoListaItem extends React.Component{
  constructor(props){
    super(props);
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
