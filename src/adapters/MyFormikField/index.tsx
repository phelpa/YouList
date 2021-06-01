import React from 'react';
import MyTextField from '../MyTextField';
import { TextFieldProps } from '@material-ui/core';
import { FormFieldsContext } from '../MyForm';

const MyFormikField: React.FC<TextFieldProps> = ({
  name,
  ...textFieldProps
}) => {
  const form = React.useContext(FormFieldsContext);

  const handleChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value ?? '';

      form.setFieldValue(name as string, value);
    },
    [form, name]
  );

  return <MyTextField onChange={handleChange} {...textFieldProps} />;
};

export default MyFormikField;
