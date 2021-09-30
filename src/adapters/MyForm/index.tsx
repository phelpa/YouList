import * as React from 'react'

import { FormikProps } from 'formik'
import { MyForm as MyFormLib } from 'use-myformik'

export interface IFormProps {
  context: FormikProps<any>
  children?: React.ReactNode
}

const MyForm = React.memo<IFormProps>(({ children, context }) => {
  return <MyFormLib context={context}>{children}</MyFormLib>
})

export default MyForm
