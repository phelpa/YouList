import React from 'react';
import VideoSingle from './VideoSingle';
/*import Annotations from './Annotations';*/


class Single extends React.Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  componentDidMount() {
    
    const { videoId } = this.props.params;
    this.props.requestVideo(videoId)
    
  }

  render(){

    const { isPending } = this.props.video;

    return (
    

      <div className="flex flex-wrap justify-center ">

      { isPending ? <h1>Waiting request</h1> :
       <VideoSingle {...this.props} /> }
      
      { /* <Annotations {...props}/>*/ }


      </div>
        
    );
  }
};

export default Single;
