import React from 'react';
import { Button, ButtonProps } from '@material-ui/core';

const MyButton: React.FC<ButtonProps> = ({ ...props }) => {
  return <Button {...props} />;
};

export default MyButton;
