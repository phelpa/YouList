import React from 'react';
/*import { Link } from 'react-router';*/


class VideoSingle extends React.Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  componentDidMount() {
   // 2. This code loads the IFrame Player API code asynchronously.
   var tag = document.createElement('script');

   tag.src = "https://www.youtube.com/iframe_api";
   var firstScriptTag = document.getElementsByTagName('script')[0];
   firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

   // 3. This function creates an <iframe> (and YouTube player)
   //    after the API code downloads.
   
   var YT;
   window.onYouTubeIframeAPIReady = function() {
     YT = window.YT;
     window.player = new YT.Player('player', {
       height: '390',
       width: '640',
       videoId: 'M7lc1UVf-VE',
       events: {
         
       }

     });
    
   }

  }


  render(){

  return (
   //1. The <iframe> (and video player) will replace this <div> tag. 
    <div id="player"></div>
    );
  }
};

export default VideoSingle;