import * as React from 'react';
import { FormikProps } from 'formik';

import { makeStyles } from '@material-ui/core/styles';

export interface IFormProps {
  context: FormikProps<any>;
  children?: React.ReactNode;
}

const useStyles = makeStyles(() => ({
  form: {
    width: '100%'
  }
}));

export const FormFieldsContext = React.createContext<FormikProps<any>>(
  {} as FormikProps<any>
);

const MyForm = React.memo<IFormProps>(({ children, context }) => {
  const classes = useStyles();

  return (
    <FormFieldsContext.Provider value={context}>
      <form
        className={classes.form}
        onSubmit={context.handleSubmit}
        onReset={context.handleReset}
      >
        {children}
      </form>
    </FormFieldsContext.Provider>
  );
});

export default MyForm;
