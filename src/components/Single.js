import React from 'react';
import VideoSingle from './VideoSingle';
/*import Annotations from './Annotations';*/


class Single extends React.Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  componentDidMount() {
    console.log(this.props.params,'params value')
    
  }

  render(){

    return (

      <div className="flex flex-wrap justify-center ">
        <VideoSingle {...this.props}  /> 
      { /* <Annotations {...props}/>*/ }
      </div>
        
    );
  }
};

export default Single;
