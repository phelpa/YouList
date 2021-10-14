import createTheme from '@material-ui/core/styles/createTheme'

import { fontFamily } from './font-family'
import { overrides } from './overrides'

export const theme = createTheme({
  typography: {
    fontFamily,
  },
  overrides,
})
