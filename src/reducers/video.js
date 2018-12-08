const REQUEST_VIDEO_PENDING = 'REQUEST_VIDEO_PENDING';
const REQUEST_VIDEO_SUCCESS = 'REQUEST_VIDEO_SUCCESS';
const REQUEST_VIDEO_FAILED = 'REQUEST_VIDEO_FAILED';


const initialStateVideo =  {
  isPending: true
} 

const video = (state=initialStateVideo, action) => {
  switch(action.type){
    case REQUEST_VIDEO_PENDING:
      return {...state, isPending:true}
    case REQUEST_VIDEO_SUCCESS:
      console.log('REDUCER RECEBEU A INFORMAÇAO DO VIDEO')
      return {...state, videoData:action.payload, isPending:false } 
    case REQUEST_VIDEO_FAILED:
      return {...state, error:action.payload} 
    default:
      return state;
  }
}


export default video;