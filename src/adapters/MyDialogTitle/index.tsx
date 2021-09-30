import React from 'react'

import { DialogTitle, DialogTitleProps } from '@material-ui/core'
import { styled } from '@material-ui/core/styles'

const StyledDialogTitle = styled(DialogTitle)({})

const MyDialogTitle: React.FC<DialogTitleProps> = ({ ...props }) => {
  return <StyledDialogTitle {...props} />
}

export default MyDialogTitle
