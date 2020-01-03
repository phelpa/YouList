import React from 'react';
import VideoSingle from './VideoSingle';
import Annotations from './Annotations';
import Nav from './Nav';

class Single extends React.Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  
  render(){

    return (
      <div>
        <Nav/>
          <div className="flex flex-wrap justify-center ">
            <VideoSingle {...this.props}/> 
            <Annotations {...this.props}/>
          </div>
      </div> 
    );
  }
};

export default Single;
//<h1 className="mt2 mb0 baskerville i fw1 f1">YouList</h1>