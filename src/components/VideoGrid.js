import React from 'react';
import Video from './Video';
import Nav from './Nav';
import 'tachyons';


class VideoGrid extends React.Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  
  componentDidMount() {
    const { courseId } = this.props.params;
    this.props.requestVideos(courseId);
    
  }

  render(){

  const { isPending } = this.props.videos;

    return (

      <div className="w-100 sans-serif bg-white "> 
        <Nav/> 
        <div className="flex flex-wrap">  

          {  isPending ? <h1>Waiting request</h1> :
           
          //maps the data received from the reducer to the <Video/> component
           this.props.videos.videosData.map((video,i) => 
          <Video key={i} i={i} video={video} />)}

        </div>
      </div>  
    );
  }
};

export default VideoGrid;
