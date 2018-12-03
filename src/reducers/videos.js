const REQUEST_VIDEOS_PENDING = 'REQUEST_VIDEOS_PENDING';
const REQUEST_VIDEOS_SUCCESS = 'REQUEST_VIDEOS_SUCCESS';
const REQUEST_VIDEOS_FAILED = 'REQUEST_VIDEOS_FAILED';


const initialStateVideos =  {
  isPending: true,
  
} 

const videos = (state=initialStateVideos, action) => {
  switch(action.type){
    case REQUEST_VIDEOS_PENDING:
      return {...state, isPending:true}
    case REQUEST_VIDEOS_SUCCESS:
      return {...state, videosData:action.payload, isPending:false } 
    case REQUEST_VIDEOS_FAILED:
      return {...state, error:action.payload} 
    default:
      return state;
  }
}


export default videos;