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
    console.log (courseId, 'oiaaa aiii o courseId')
    this.props.requestVideos(courseId);
    
  }

  render(){

  const { isPending } = this.props.videos;
  const { courseId } = this.props.params;


    return (

      <div className="w-100 sans-serif bg-white "> 
        <Nav/> 
        <div className="flex flex-wrap">  
        VideoGrid
        {/*faz a pagina de videos de acordo com o courseId*/}
     
          { /* isPending ? <h1>Waiting request</h1> :
            
            
           this.props.videos.videosData[courseId].map((video,i) => 
          <Video key={i} i={i} video={video} />)*/}
        </div>
      </div>  
    );
  }
};

/*console.log(this.props.videos.videosData[courseId], 'oia ai os videos')*/
export default VideoGrid;
