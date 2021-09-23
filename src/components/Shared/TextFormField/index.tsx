import React from 'react';

import { TextField } from '@material-ui/core';
import { FieldProps, getIn } from 'formik';

const TextFormField: React.FC<FieldProps> = ({ field, form, ...props }) => {
  const errorText =
    getIn(form.touched, field.name) && getIn(form.errors, field.name);

  return (
    <TextField
      helperText={errorText}
      error={!!errorText}
      {...field}
      {...props}
    />
  );
};

export default TextFormField;
