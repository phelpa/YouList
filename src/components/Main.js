import React from 'react';
/*import { Link } from 'react-router';*/

const Main = (props) => {
 
  return (
    <React.Fragment>
          {React.cloneElement(props.children, props)}
    </React.Fragment>   
    );
};

export default Main;
