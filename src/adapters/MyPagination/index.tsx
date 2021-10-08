import React from 'react'

import { Pagination, PaginationProps } from '@material-ui/lab'

const MyPagination: React.FC<PaginationProps> = ({ ...PaginationProps }) => {
  return <Pagination {...PaginationProps} />
}

export default MyPagination
