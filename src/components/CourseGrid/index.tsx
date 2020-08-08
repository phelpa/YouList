import React, { useEffect, useState } from 'react';
import Nav from '../Nav';
import Course from './Course';
import { ICourse } from '../../interfaces/ICourse'
import CreateCourseModal from './CreateCourseModal';
import ActionIcon from '../Shared/ActionIcon/';
import { useModalDispatch } from '../../providers/modal';
import { useCourses } from '../../providers/courses/';


interface ICourses {
  courses: Array<ICourse>
}

const CourseGrid = () => {
  const dispatch = useModalDispatch();
  const { courses, isLoading, getCourses} = useCourses();

  useEffect(()=> {
    getCourses();
  }, [])

  return (
    <div className="w-100 bg-white ">
      <Nav/>
      <div className="flex flex-wrap">
        {isLoading && <div>Carregando...</div>}
        {courses && courses.map((course: ICourse, i: number) =>
        <Course key={i} course={course} />)}
        <ActionIcon
          description='Criar uma lista'
          callback={() => dispatch({type: 'OPEN_CREATE_COURSE'})}
          icon='videocam'
        />
        <CreateCourseModal/>
      </div>
    </div>
  );
};

export default CourseGrid;