import React, { useEffect } from 'react';

import { useParams } from 'react-router-dom';

import { useVideo } from '../../providers/videosingle';

const VideoSingle = () => {
  const { video, isLoading, getVideo } = useVideo();
  const params = useParams();

  useEffect(() => {
    getVideo(params.videoId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadYoutubeAPI = () => {
    if (!window['player']) {
      // 2. This code loads the IFrame Player API code asynchronously.
      let tag = document.createElement('script');

      tag.src = 'https://www.youtube.com/iframe_api';
      let firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag?.parentNode!.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      let YT; //declaring outside the function to avoid 'not defined'
      window['onYouTubeIframeAPIReady'] = function() {
        YT = window['YT']; //youtube API expects the YT object to be
        //assigned to the window object
        window['player'] = new YT.Player('videoplayer', {});
      };
    }
  };

  return isLoading ? (
    <h1>Waiting request</h1>
  ) : (
    <div className="vh-50">
      <iframe
        className="w-100 h-100"
        title="iframe"
        id="videoplayer"
        src={
          'https://www.youtube.com/embed/' +
          video?.[0].youtube_id +
          '?enablejsapi=1'
        }
        frameBorder="0"
        allowFullScreen
      ></iframe>
      {!window['player'] && video?.[0].youtube_id && loadYoutubeAPI()}
    </div>
  );
};

export default VideoSingle;
