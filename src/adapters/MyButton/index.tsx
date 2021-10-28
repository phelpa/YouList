import React from 'react'

import { Button, ButtonProps, CircularProgress } from '@material-ui/core'
export interface IButtonProps extends ButtonProps {
  loading?: boolean
}

const MyButton: React.FC<IButtonProps> = ({
  loading = false,
  startIcon,
  ...props
}) => {
  return (
    <Button
      {...props}
      startIcon={
        loading ? <CircularProgress size={18} color="inherit" /> : startIcon
      }
    />
  )
}

export default MyButton
