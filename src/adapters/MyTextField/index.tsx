import React from 'react';

import { TextField, TextFieldProps } from '@material-ui/core';

const MyTextField: React.FC<TextFieldProps> = ({ ...textFieldProps }) => {
  return <TextField {...textFieldProps} />;
};

export default MyTextField;
