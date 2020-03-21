import React, { memo } from 'react';
import Icon from '@material-ui/core/Icon';
import { useModalDispatch } from '../../../providers/modal';
 
const CreateCourseIcon = memo(() => {

  const hoverEffect = 'link dim black mw5 dt hide-child b--black-20 pa4 br2 pointer';
  const dispatch = useModalDispatch();

  return (
  
    <article onClick={() => dispatch({type: 'OPEN_CREATE_COURSE'})} className='br2 w4 dark-gray mh4 mv4 center'>
      <div className={`${hoverEffect} pa2 ph3-ns pb3-ns`}>
      <div className="bg-light-gray h3 w3 flex justify-center items-center center br3">
      <Icon fontSize='large'>videocam</Icon>
      </div>
      
        <p className="f6 lh-copy measure mt2 mid-gray flex justify-center tc">
        <b>Criar novo curso</b>
        </p>
          
      </div>
      </article>
  );
  
});

export default CreateCourseIcon;

