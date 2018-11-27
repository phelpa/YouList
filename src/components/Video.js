import React from 'react';
import { Link } from 'react-router';

const Video = ({courseId, video, i, annotations, params }) => {
 
  return (
    
  <article className="w5 mainDiv br2 ba dark-gray b--black-10 mh4 mv4 center">
    <iframe title = 'iframeYoutube' className="h5 db w-100 br2 br--top"
    src={video.display_src} frameBorder="0" allow="autoplay; encrypted-media"
    allowFullScreen></iframe>
    <div className="description pa2 ph3-ns pb3-ns">
      
      <Link to={'a'/*`/${courseId}/${'aldair'}`*/} className ="no-underline black" >
        <h1 className="videotitle f5 f4-ns mv0">{/*post.code*/}</h1>
      </Link>
      
      <p className="descriptionText f6 lh-copy measure mt2 mid-gray">
      {/*post.caption*/}
      </p>
      
    </div>
  </article>

  );
};

export default Video;
