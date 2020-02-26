import { Overrides } from '@material-ui/core/styles/overrides';

const overrides: Overrides = {
  MuiDialogTitle: {
    root: {
      'padding': '5px 12px',
    },
    },
  MuiInput: {
    // input: { 
    //   'marginTop' : '12px',
    // },
    underline: {
      '&:after': {
        borderBottom: 'black'
      }
    },
  },
  MuiFormLabel: {
    root: {
      '&$focused': {
        color: 'black'
      }
    }
  },

};

export default overrides;
