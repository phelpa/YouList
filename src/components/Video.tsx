import React from 'react';

import { Link } from 'react-router-dom';

const Video = (props: any) => {
  const video = props.video;
  return (
    <article className="mainDiv w5 br2 ba dark-gray b--black-10 mh4 mv4 center">
      <iframe
        title="iframeYoutube"
        className="h5 db w-100 br2 br--top"
        src={`https://www.youtube.com/embed/${video.youtube_id}`}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
      <div className="description pa2 ph3-ns pb3-ns">
        <Link
          to={`/list/${video.list_id}/video/${video.id}`}
          className="no-underline black"
        >
          <h1 className="videotitle f5 f4-ns mv0">{video.title}</h1>
        </Link>

        <p className="descriptionText f6 lh-copy measure mt2 mid-gray">
          {video.description}
        </p>
      </div>
    </article>
  );
};

export default Video;
