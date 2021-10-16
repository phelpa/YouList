import React from 'react'

import { Icon, IconProps } from '@material-ui/core'

const MyIcon: React.FC<IconProps> = ({ children, ...IconProps }) => {
  return <Icon {...IconProps}>{children}</Icon>
}

export default MyIcon
