const REQUEST_COURSES_PENDING = 'REQUEST_COURSES_PENDING';
const REQUEST_COURSES_SUCCESS = 'REQUEST_COURSES_SUCCESS'
const REQUEST_COURSES_FAILED = 'REQUEST_COURSES_FAILED'

export const requestCourses = (user_id) => (dispatch) => {

  dispatch({type:REQUEST_COURSES_PENDING})

  fetch(`http://localhost:3000/courses/user/${user_id}`)
  .then(response => response.json())
  .then(data => dispatch ({type:REQUEST_COURSES_SUCCESS,payload:data}))
  .catch(error => dispatch({type:REQUEST_COURSES_FAILED,payload:error}) )

}
//------------------------------------------------------


const REQUEST_VIDEOS_PENDING = 'REQUEST_VIDEOS_PENDING';
const REQUEST_VIDEOS_SUCCESS = 'REQUEST_VIDEOS_SUCCESS';
const REQUEST_VIDEOS_FAILED = 'REQUEST_VIDEOS_FAILED';

export const requestVideos = (course_id) => (dispatch) => {

  dispatch({type:REQUEST_VIDEOS_PENDING})

  fetch(`http://localhost:3000/course/${course_id}/videos`)
  .then(response => response.json())
  .then(data => dispatch ({type:REQUEST_VIDEOS_SUCCESS,payload:data}))
  .catch(error => dispatch({type:REQUEST_VIDEOS_FAILED,payload:error}) )

}
//---------------------------------------------------------------


const REQUEST_VIDEO_PENDING = 'REQUEST_VIDEO_PENDING';
const REQUEST_VIDEO_SUCCESS = 'REQUEST_VIDEO_SUCCESS';
const REQUEST_VIDEO_FAILED = 'REQUEST_VIDEO_FAILED';

export const requestVideo = (video_id) => (dispatch) => {

  dispatch({type:REQUEST_VIDEO_PENDING})

  fetch(`http://localhost:3000/video/${video_id}`)
  .then(response => response.json())
  .then(data => dispatch ({type:REQUEST_VIDEO_SUCCESS,payload:data}))
  .catch(error => dispatch({type:REQUEST_VIDEO_FAILED,payload:error}) )

}

//--------------------------------------------------------------

const REQUEST_ANNOTATIONS_PENDING = 'REQUEST_ANNOTATIONS_PENDING';
const REQUEST_ANNOTATIONS_SUCCESS = 'REQUEST_ANNOTATIONS_SUCCESS';
const REQUEST_ANNOTATIONS_FAILED = 'REQUEST_ANNOTATIONS_FAILED';

export const requestAnnotations = (user_id, video_id) => (dispatch) => {

  dispatch({type:REQUEST_ANNOTATIONS_PENDING})
  fetch(`http://localhost:3000/annotations/user/${user_id}/video/${video_id}`) 
  .then(response => response.json())
  .then(data => dispatch ({type:REQUEST_ANNOTATIONS_SUCCESS,payload:data}))
  .catch(error => dispatch({type:REQUEST_ANNOTATIONS_FAILED,payload:error}) )
}

//--------------------------------------------------------------
//submit da annotation
const ADD_ANNOTATION = 'ADD_ANNOTATION';
//TO DO
export const submitAnnotation = (user_id, video_id, videotime, annotation) => (dispatch) => {
  
  console.log('dentro da função action creator')
  fetch('http://localhost:3000/annotations',{
    method: 'post',
    headers: {'Content-Type': 'application/json'},
    body:JSON.stringify({
      user_id: user_id,
      video_id: video_id,
      videotime: videotime,
      annotation: annotation
    })
  })
  .then(response => response.json())
  .then(response2 => dispatch ({type:ADD_ANNOTATION,payload:response2})) 
  
};
