import React from 'react'

import { InputAdornment, InputAdornmentProps } from '@material-ui/core'

const MyInputAdornment: React.FC<InputAdornmentProps> = ({
  children,
  ...InputAdornmentProps
}) => {
  return <InputAdornment {...InputAdornmentProps}>{children}</InputAdornment>
}

export default MyInputAdornment
