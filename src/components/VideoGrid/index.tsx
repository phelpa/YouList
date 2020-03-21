import React, { useEffect, useState } from 'react';
import Video from '../Video';
import Nav from '../Nav';
import videosApi from '../../services/videosApi';
//import { IVideo } from '../../interfaces/Ivideo'
import ActionIcon from '../Shared/ActionIcon';
import { useModalDispatch } from '../../providers/modal';


// interface IVideos {
//   videos: Array<IVideo>
// }

const VideoGrid = (props: any) => {
  
  const dispatch = useModalDispatch();
  const [videos, setVideos] = useState([]);

  console.log(props.params, 'props.params');
  useEffect(() => {
    // Create an scoped async function in the hook
    const videoList = async () => {
     const videos : any = await videosApi.list(props.params.courseId);
      setVideos(videos);
    }
    // Execute the created function directly
    videoList();
  }, []);


    return (
      <div className="w-100 bg-white "> 
        <Nav/> 
        <div className="flex flex-wrap">  

          {videos && videos.map((video,i) => 
           <Video key={i} i={i} video={video} />)}
          <ActionIcon
            callback={() => dispatch({type: 'OPEN_CREATE_VIDEO'})}
            icon='ondemand_video'
          /> }
        </div>
      </div>  
    );
};

export default VideoGrid;
