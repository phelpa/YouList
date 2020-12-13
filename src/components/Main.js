import React from 'react';
import Nav from './Nav';

const Main = props => (
  <React.Fragment>
    <Nav />
    {React.cloneElement(props.children, props)}
  </React.Fragment>
);

export default Main;
