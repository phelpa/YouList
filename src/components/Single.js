import React from 'react';
import VideoSingle from './VideoSingle';
import Annotations from './Annotations';

class Single extends React.Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  componentDidMount() {
    
    const { videoId } = this.props.params;
    this.props.requestVideo(videoId)

    /*const userId = 10*/
    /*this.props.requestAnnotations(userId, videoId)*/
    
  }

  render(){

    const { isPending } = this.props.video;

    return (
    
      <div className="flex flex-wrap justify-center ">

      { isPending ? <h1>Waiting request</h1> :
      <React.Fragment>
        <VideoSingle {...this.props}/> 
        <Annotations {...this.props}/>
      </React.Fragment> }
      
      </div>
        
    );
  }
};

export default Single;
