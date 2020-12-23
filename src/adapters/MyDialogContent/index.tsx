import React from 'react';
import { DialogContent, DialogContentProps } from '@material-ui/core';

const MyDialogContent: React.FC<DialogContentProps> = ({ ...props }) => {
  return <DialogContent {...props} />;
};

export default MyDialogContent;
