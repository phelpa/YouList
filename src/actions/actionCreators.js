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

  console.log(course_id, '1 - dispatching request videos action, tambem course_id')

  dispatch({type:REQUEST_VIDEOS_PENDING})

  console.log('2 - enviou o dispatch pending ')

  fetch(`http://localhost:3000/course/${course_id}/videos`)
  .then(response => response.json())
  .then(data => dispatch ({type:REQUEST_VIDEOS_SUCCESS,payload:data}))
  .catch(error => dispatch({type:REQUEST_VIDEOS_FAILED,payload:error}) )

}


//-----------------------------------------------------

const REQUEST_ANNOTATIONS_PENDING = 'REQUEST_ANNOTATIONS_PENDING';
const REQUEST_ANNOTATIONS_SUCCESS = 'REQUEST_ANNOTATIONS_SUCCESS';
const REQUEST_ANNOTATIONS_FAILED = 'REQUEST_ANNOTATIONS_FAILED';

export const requestAnnotations = () => (dispatch) => {
  console.log('dispatching request annotations action')
  dispatch({type:REQUEST_ANNOTATIONS_PENDING})
  fetch('http://localhost:3000/annotations')
  .then(response => response.json())
  .then(data => dispatch ({type:REQUEST_ANNOTATIONS_SUCCESS,payload:data}))
  .catch(error => dispatch({type:REQUEST_ANNOTATIONS_FAILED,payload:error}) )
}