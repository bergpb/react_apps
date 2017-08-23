import React from 'react';

import VideoListaItem from './VideoListaItem.js';

export default class VideoLista extends React.Component{
  constructor(props){
    super(props);

  }

  render(){
    return(
      <div>
          {this.props.videos.map((video) => {
              return <VideoListaItem onVideoSelect={this.props.onVideoSelect} key={video.etag} video={video} />
            }
            )}
      </div>
    );
  } // render
} // class VideoListaItem
