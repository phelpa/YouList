import React from 'react';
import { Link } from 'react-router';
import { ICourse } from '../../../interfaces/ICourse';

interface IProps {
  course : ICourse
}

const Course = React.memo(({ course }: IProps) => {
 
  return (
     
    <article className="mainDiv br2 w5 ba dark-gray b--black-10 mh4 mv4 center">
       <img className='h5 db w-100 br2 br--top' 
       src={course.urlimage} alt="Meu cachorro lindo" />
       
        <div className="description pa2 ph3-ns pb3-ns">
          
          <Link to={`/course/${course.id}`} className ="no-underline black" >
            <h1 className="videotitle f5 f4-ns mv0">{course.title}</h1>
          </Link>
          
        <p className="descriptionText f6 lh-copy measure mt2 mid-gray">
        {course.description}
        </p>
          
        </div>
      </article>
    
      
      
  );
  
});

export default Course;

