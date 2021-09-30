import { FormikProps } from 'formik'
import { useMyFormik as useMyFormikLib, IUseFormParams } from 'use-myformik'

function useMyFormik<T>(config: IUseFormParams<T>): FormikProps<T> {
  const formik = useMyFormikLib(config)

  return formik
}

export default useMyFormik
