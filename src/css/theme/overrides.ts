import { Overrides } from '@material-ui/core/styles/overrides'

export const overrides: Overrides = {
  MuiDialogTitle: {
    root: {
      padding: '5px 12px',
    },
  },
  MuiInput: {
    underline: {
      '&:after': {
        borderBottom: 'black',
      },
    },
  },
  MuiFormLabel: {
    root: {
      '&$focused': {
        color: 'black',
      },
    },
  },
  MuiFormHelperText: {
    contained: {
      marginLeft: '6px',
    },
  },
}
