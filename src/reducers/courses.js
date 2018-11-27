const REQUEST_COURSES_PENDING = 'REQUEST_COURSES_PENDING';
const REQUEST_COURSES_SUCCESS = 'REQUEST_COURSES_SUCCESS'
const REQUEST_COURSES_FAILED = 'REQUEST_COURSES_FAILED'


const initialStateCourses =  {
  isPending: true,
  coursesData: ['pending']
} 

const courses = (state=initialStateCourses, action) => {
  switch(action.type){
    case REQUEST_COURSES_PENDING:
      return {...state, isPending:true}
    case REQUEST_COURSES_SUCCESS:
      console.log('REDUCER RECEBEU A INFORMAÇAO DOS CURSOS')
      return {...state, coursesData:action.payload, isPending:false } 
    case REQUEST_COURSES_FAILED:
      return {...state, error:action.payload} 
    default:
      return state;
  }
}


export default courses;