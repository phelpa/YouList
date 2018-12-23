import React from 'react';
import VideoSingle from './VideoSingle';
import Annotations from './Annotations';

class Single extends React.Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  
  render(){

    return (
    
      <div className="flex flex-wrap justify-center">

      <React.Fragment>
        <VideoSingle {...this.props}/> 
        <Annotations {...this.props}/>
      </React.Fragment> 
      
      </div>
        
    );
  }
};

export default Single;
