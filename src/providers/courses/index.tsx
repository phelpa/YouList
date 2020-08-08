import React, {createContext, useContext, useState, } from 'react';
import { get } from '../../utils/agent';
import { coursesPath } from '../../constants/endpoint';
import { ICourse } from '../../interfaces/ICourse';

export interface ICoursesContext {
  courses: Array<ICourse>
  isLoading: boolean
  error: any
  getCourses: () => void;
}

function Courses(user: number): ICoursesContext {
  const [courses, setCourses] = useState(undefined!);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(undefined);

  const getCourses = async () => {
    setError(undefined);
    setCourses(undefined!);
    setIsLoading(true);
    try {
      const courses = await get(`${coursesPath}/user/${user}`);
      setCourses(courses);
    } catch (e) {
      setError(e);
      setCourses(undefined!);
    } finally {
      setIsLoading(false);
    }
  };

  return { courses, isLoading, error, getCourses };
}

const CoursesContext = createContext<ICoursesContext>({} as ICoursesContext)
export const useCourses = () => useContext(CoursesContext)

type IProviderProps = {
  children: React.ReactNode
};

const CoursesProvider = ({children}: IProviderProps) => {
  return (
    <CoursesContext.Provider value={Courses(10)}>
        {children}
    </CoursesContext.Provider>
  )
}

export default CoursesProvider;