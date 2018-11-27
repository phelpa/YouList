import React from 'react';
import VideoSingle from './VideoSingle';
import Annotations from './Annotations';


const Single = (props) => {
  
  const { params, videos } = props; 

  const { videoId } = params; 

  /*locating the index on the Array related to the videoId
  const index = videos.videosData[courseId].findIndex((post) =>
  post.code === params.videoId);
  
  const youtubeURL = videos.videosData[courseId][index].display_src
  console.log(youtubeURL, 'oia a youtube Url ai')

  */
  return (

    <div className="flex flex-wrap justify-center ">
      <VideoSingle {...props}  /> 
    { /* <Annotations {...props}/>*/ }
    </div>
      
    );
};

export default Single;
