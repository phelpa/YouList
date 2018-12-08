const REQUEST_ANNOTATIONS_PENDING = 'REQUEST_ANNOTATIONS_PENDING';
const REQUEST_ANNOTATIONS_SUCCESS = 'REQUEST_ANNOTATIONS_SUCCESS';
const REQUEST_ANNOTATIONS_FAILED = 'REQUEST_ANNOTATIONS_FAILED';

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
    default:
      return state;
  }
}


export default annotations;