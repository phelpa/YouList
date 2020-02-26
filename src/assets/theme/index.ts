import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

import overrides from './overrides';

export const theme = createMuiTheme({
  overrides,
});

export const defaultFont = createMuiTheme({
  typography: {
    fontFamily: [
      '-apple-system', 'BlinkMacSystemFont',
      'avenir next', 'avenir',
      'helvetica neue', 'helvetica',
      'ubuntu',
      'roboto', 'noto',
      'segoe ui', 'arial',
      'sans-serif'
    ].join(','),
  }
});