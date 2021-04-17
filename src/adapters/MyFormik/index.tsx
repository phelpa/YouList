import { useFormik } from 'formik';

interface IProps {
  initialValues?: Object;
  onSubmit?: any;
  children: (values: any) => JSX.Element;
}

const MyFormik = ({ initialValues, onSubmit, children }: IProps) => {
  const formik = useFormik({
    initialValues: {
      initialValues
    },
    onSubmit: values => {
      // console.log(values, 'OIA VALUES NO MYFORMIK');
      onSubmit(values);
    }
  });

  return children({
    values: formik.values,
    handleSubmit: formik.handleSubmit,
    setFieldValue: formik.setFieldValue
  });
};

export default MyFormik;
