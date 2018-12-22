
/* OLD FUNCTIONAL VERSION OF THE VIDEOSINGLE COMPONENT


import React from 'react';


class VideoSingle extends React.Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  componentDidMount() {
    let pereira = document.getElementById("movie_player")
    console.log(pereira, 'oia ai o pereira')
  }

  render(){

  const { description, title , youtubeurl } = this.props.video.videoData[0];

  return (

    <article className="mainDiv vh-75 w-40  br2 ba dark-gray b--black-10 mh1 mv5">

      <iframe id = 'movie_player' title = 'iframeYoutube' className="h-100 w-100 db  br2 br--top"
      src={youtubeurl} frameBorder="0" allow="autoplay; encrypted-media"
      allowFullScreen="allowFullScreen"></iframe>

      <div className="description ba b--light-gray br2 pa2 ph3-ns pb3-ns">
        
        <h1 className="videotitle f5 f4-ns mv0">{title}</h1>
      
        <p className="descriptionText f6 lh-copy measure mt2 mid-gray">
        {description}
        </p>
        
      </div>
    </article>
    );
  }
};

export default VideoSingle;

*/



/* OLD SEMI-FUNCTIONAL VERSION OF THE ANNOTATIONS REDUCER


const REQUEST_ANNOTATIONS_PENDING = 'REQUEST_ANNOTATIONS_PENDING';
const REQUEST_ANNOTATIONS_SUCCESS = 'REQUEST_ANNOTATIONS_SUCCESS';
const REQUEST_ANNOTATIONS_FAILED = 'REQUEST_ANNOTATIONS_FAILED';
const ADD = 'ADD';

const initialStateAnnotations =  {
  isPending: true
} 

const annotations = (state=initialStateAnnotations, action) => {
  switch(action.type){

    case REQUEST_ANNOTATIONS_PENDING:
      return {...state, isPending:true}
    case REQUEST_ANNOTATIONS_SUCCESS:
      return {...state, annotationsData:action.payload, isPending:false } 
    case REQUEST_ANNOTATIONS_FAILED:
      return {...state, error:action.payload}



    case ADD:
      
      return {...state, 
        annotationsData:[action.annotation]
      };
    default:
      return state;
  }
}




export default annotations;

*/

