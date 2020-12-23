import React from 'react';
import { DialogActions, DialogActionsProps } from '@material-ui/core';

const MyDialogActions: React.FC<DialogActionsProps> = ({ ...props }) => {
  return <DialogActions {...props} />;
};

export default MyDialogActions;
