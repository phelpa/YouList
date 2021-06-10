import { useFormik, FormikConfig, FormikProps } from 'formik';

export interface IUseFormParams<Values> extends FormikConfig<Values> {}

function useMyFormik<T>(config: IUseFormParams<T>): FormikProps<T> {
  const formik = useFormik(config);

  return formik;
}

export default useMyFormik;
