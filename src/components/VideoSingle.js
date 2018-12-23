import React from 'react';

class VideoSingle extends React.Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  componentDidMount() {

    const { videoId } = this.props.params;
    this.props.requestVideo(videoId)

  }  
    
  loadYoutubeAPI() {
  
  // 2. This code loads the IFrame Player API code asynchronously.
   var tag = document.createElement('script');

   tag.src = "https://www.youtube.com/iframe_api"; 
   var firstScriptTag = document.getElementsByTagName('script')[0];
   firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

   // 3. This function creates an <iframe> (and YouTube player)
   //    after the API code downloads.
   
   var YT; //declaring outside the function to avoid 'not defined'
   window.onYouTubeIframeAPIReady = function() {
     YT = window.YT; //youtube API expects the YT object to be 
                     //assigned to the window object
     window.player = new YT.Player('videoplayer2', {});
   }
  }
  

  render(){

  const { isPending } = this.props.video;

  return (

    isPending  ? <h1>Waiting request</h1> :


    <React.Fragment>
      <iframe title='iframe' id="videoplayer2"
          src={this.props.video.videoData[0].youtubeurl+'?enablejsapi=1'}
          frameBorder="0"
          height='390'
          width= '640'
      ></iframe>
      {/*calling the youtubeAPI only after the iframe has the urlsource */}
      {this.loadYoutubeAPI()}
    </React.Fragment>
    );
  }
};



export default VideoSingle;