import React from 'react'

import { DialogTitle, DialogTitleProps } from '@material-ui/core'

const MyDialogTitle: React.FC<DialogTitleProps> = ({ ...props }) => {
  return <DialogTitle {...props} />
}

export default MyDialogTitle
