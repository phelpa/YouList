import React, { useEffect, useState } from 'react';
import Nav from '../Nav';
import 'tachyons';
import Course from './Course';
import coursesApi from '../../services/coursesApi';

const pereira = 10;

const CourseGrid = () => {
  
  const [courses, setCourses] = useState([]);
 
  useEffect(() => {
    // Create an scoped async function in the hook
    async function anyNameFunction() {
      const courses: any = await coursesApi.list(pereira);
      setCourses(courses);
    }
    // Execute the created function directly
    anyNameFunction();
  }, []);

  
 
  console.log(courses, 'olha o courses ai');
 //  const [user] = useApiCall<IProfile>(() => usersService.getProfile(), []); 
  return (
    <div className="w-100 sans-serif bg-white "> 
      <Nav/> 
      <div className="flex flex-wrap">  
        {courses && courses.map((course,i) => 
        <Course key={i} course={course} />)
        }
      </div>
    </div>  
  );
};

export default CourseGrid;