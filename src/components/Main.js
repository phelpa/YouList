import React from 'react';

const Main = (props) => {
  return (
    <React.Fragment>
          {React.cloneElement(props.children, props)}
    </React.Fragment>   
    );
};

export default Main;
