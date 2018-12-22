const REQUEST_ANNOTATIONS_PENDING = 'REQUEST_ANNOTATIONS_PENDING';
const REQUEST_ANNOTATIONS_SUCCESS = 'REQUEST_ANNOTATIONS_SUCCESS';
const REQUEST_ANNOTATIONS_FAILED = 'REQUEST_ANNOTATIONS_FAILED';
const ADD_ANNOTATION = 'ADD_ANNOTATION';

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

    case ADD_ANNOTATION:
    console.log('to dentro do reducer no ADD_ANNOTATION')
      
      return {
        ...state, 
        ['annotationsData']:postAnnotations(state['annotationsData'],action)
      };
    default:
      return state;
  }
}

//sub-reducer to add Annotations
const postAnnotations = (state=[],action) => {
  
  const {user_id, video_id, annotation,videotime} = action.payload[0]
  
  return [
    ...state, {
    user_id: user_id,
    video_id: video_id,
    annotation: annotation,
    videotime: videotime
    }]
 
}   

export default annotations;

/*
videotime:action.payload.videotime,
annotation:action.payload.annotation
*/