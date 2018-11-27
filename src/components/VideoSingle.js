import React from 'react';
/*import { Link } from 'react-router';*/

const VideoSingle = ({ post, i, video, annotations, params, youtubeURL }) => {
 
  return (
  
    <article className="mainDiv vh-75 w-40  br2 ba dark-gray b--black-10 mh1 mv5">
      <iframe title = 'iframeYoutube' className="h-100 w-100 db  br2 br--top"
      src={'a'/*video.youtubeurl*/} frameBorder="0" allow="autoplay; encrypted-media"
      allowFullScreen="allowFullScreen"></iframe>
      <div className="description ba b--light-gray br2 pa2 ph3-ns pb3-ns">
        
        <h1 className="videotitle f5 f4-ns mv0">{/*video.title*/}</h1>
       
        <p className="descriptionText f6 lh-copy measure mt2 mid-gray">
        {/*video.description*/}
        </p>
        
      </div>
    </article>
    
    
  );
  
};

export default VideoSingle;