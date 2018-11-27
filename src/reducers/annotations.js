const REQUEST_ANNOTATIONS_PENDING = 'REQUEST_ANNOTATIONS_PENDING';
const REQUEST_ANNOTATIONS_SUCCESS = 'REQUEST_ANNOTATIONS_SUCCESS';
const REQUEST_ANNOTATIONS_FAILED = 'REQUEST_ANNOTATIONS_FAILED';

const initialStateAnnotations =  {
  isPending: true,
  annotationsData: ['pending']
} 

const annotations = (state=initialStateAnnotations, action) => {
  switch(action.type){
    case REQUEST_ANNOTATIONS_PENDING:
      return {...state, isPending:true}
    case REQUEST_ANNOTATIONS_SUCCESS:
      console.log('REDUCER RECEBEU A INFORMAÇAO DAS ANNOTATIONS')
      return {...state, annotationsData:action.payload, isPending:false } 
    case REQUEST_ANNOTATIONS_FAILED:
      return {...state, error:action.payload} 
    default:
      return state;
  }
}


export default annotations;