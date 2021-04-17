import React from 'react';
import { useField } from 'formik';

function MyFormikField(props: any) {
  // this will return field exactly like <Field>{({ field }) => ... }</Field>
  const [field, meta] = useField(props);
  return (
    <>
      <input {...field} {...props} />
      {meta.error && meta.touched && <div>{meta.error}</div>}
    </>
  );
}

export default MyFormikField;
