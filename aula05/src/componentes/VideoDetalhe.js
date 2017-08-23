import React from 'react';

export default class VideoDetalhe extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    if( !this.props.video ) {
      return <div className="text-center"><h5>Realize uma pesquisa no campo acima.</h5></div>;
    }
    
    const videoId = this.props.video.id.videoId;
    const url = 'https://www.youtube.com/embed/' + videoId;

    return(
        <div className="container">
          <div className="row">
            <div className="embed-responsive embed-responsive-4by3 text-center col-sm-12">
              <iframe src={url}></iframe>
            </div>
          </div>
          <div className="container">
           <div className="row">
              <div>{this.props.video.snippet.title}</div>
              <div>{this.props.video.snippet.description}</div>
            </div>
          </div>
        </div>
    );
  } 

}
