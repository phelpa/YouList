import React from 'react';
import { Dialog, DialogProps } from '@material-ui/core';

const MyDialog: React.FC<DialogProps> = ({ ...props }) => {
  return <Dialog {...props} />;
};

export default MyDialog;
