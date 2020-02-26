import React, { useEffect, useState } from 'react';
import Nav from '../Nav';
import 'tachyons';
import Course from './Course';
import coursesApi from '../../services/coursesApi';
import { ICourse } from '../../interfaces/ICourse'
import CreateCourse from './CreateCourse/';
import CreateCourseModal from './CreateCourseModal';

interface ICourses {
  courses: Array<ICourse>
}

const pereira = 10;

const CourseGrid = () => {
  
  const [courses, setCourses] = useState([]);
  
  useEffect(() => {
    // Create an scoped async function in the hook
    const courseList = async () => {
      const courses : any = await coursesApi.list(pereira);
      setCourses(courses);
    }
    // Execute the created function directly
    courseList();
  }, []);

 
  return (
    <div className="w-100 bg-white "> 
      <Nav/> 
      <div className="flex flex-wrap">  
        {courses && courses.map((course,i) => 
        <Course key={i} course={course} />)
        }
        <CreateCourse/>
        <CreateCourseModal/>
      </div>
    </div>  
  );
};

export default CourseGrid;