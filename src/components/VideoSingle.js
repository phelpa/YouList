import React from 'react';

class VideoSingle extends React.Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  componentWillMount() {

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

  render(){
    
  return (
    <React.Fragment>
    <iframe title='iframe' id="videoplayer"
        width="640" height="360"
        src="https://www.youtube.com/embed/M7lc1UVf-VE?enablejsapi=1"
        frameBorder="0"
    ></iframe>

    </React.Fragment>
    );
  }
};


export default VideoSingle;