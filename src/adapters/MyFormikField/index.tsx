import React from 'react'

import { TextFieldProps } from '@material-ui/core'
import { MyFormikField as MyFormikFieldLib } from 'use-myformik'

const MyFormikField: React.FC<TextFieldProps> = ({ ...textFieldProps }) => {
  return <MyFormikFieldLib {...textFieldProps} />
}

export default MyFormikField
