import React, { useEffect, useState } from 'react';
import Nav from '../Nav';
import Course from './Course';
import coursesApi from '../../services/coursesApi';
import { ICourse } from '../../interfaces/ICourse'
import CreateCourseModal from './CreateCourseModal';
import ActionIcon from '../Shared/ActionIcon/';
import { useModalDispatch } from '../../providers/modal';
import {  mergeMap } from 'rxjs/operators';
import { from, BehaviorSubject } from 'rxjs';

interface ICourses {
  courses: Array<ICourse>
}
//HOOKS DE OBSERVABLE//
const useObservable = (observable: any, setter: any) =>  {
  useEffect( () => {
    let subscription = observable.subscribe((result: any) =>  {
      setter(result);
    });
    return () => subscription.unsubscribe();

  }, [observable, setter]);
}

//CHAMADA NA API//
const courseList = async (id: number) => {
  const courses : any = await coursesApi.list(id);
  return courses;
}

let searchSubject = new BehaviorSubject(10);

//O OBSERVABLE
let searchResultObservable = searchSubject.pipe(
  mergeMap(val => from(courseList(val)))
);

// O COMPONENTE //
const CourseGrid = () => {
  const dispatch = useModalDispatch();
  
  const [courses, setCourses] = useState([]);

  useObservable(searchResultObservable, setCourses);
 
  return (
    <div className="w-100 bg-white "> 
      <Nav/> 
      <div className="flex flex-wrap">  
        {courses && courses.map((course,i) => 
        <Course key={i} course={course} />)}
        <ActionIcon
          callback={() => dispatch({type: 'OPEN_CREATE_COURSE'})}
          icon='videocam'
        />
        <CreateCourseModal/>
      </div>
    </div>  
  );
};

export default CourseGrid;