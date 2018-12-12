import React from 'react';

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
     window.player = new YT.Player('videoplayer', {
       height: '390',
       width: '640',
       videoId: 'M7lc1UVf-VE',
       origin:'http://localhost:3001',
       events: {
         
       }

     });
    
   }
 
  }

  componentDidUpdate() {

    console.log(window.player,'logging window.player at componentDidUpdate')
  }
  render(){
   
    console.log(window.player,'logging window.player at render')

    
  return (
   //1. The <iframe> (and video player) will replace this <div> tag. 
    <div id="videoplayer"></div>
    
    );
  }
};

//let xunda = window.player.getCurrentTime()

//console.log(xunda)

export default VideoSingle;