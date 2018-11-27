import React from 'react';
import Course from './Course';
import Nav from './Nav';
import 'tachyons';

const Aldair = 10;

class CourseGrid extends React.Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  componentDidMount() {
    this.props.requestCourses(Aldair);
  }

  render() {
    
    return ( 
      <div className="w-100 sans-serif bg-white "> 
      COURSE GRID 
        <Nav/> 
        <div className="flex flex-wrap">  
          {this.props.courses.coursesData.map((course,i) => 
          <Course key={i} i={i} course={course} />)}
        </div>
       

      </div>  
    );
  }
};

export default CourseGrid;
