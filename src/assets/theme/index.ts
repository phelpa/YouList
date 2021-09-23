import createTheme from '@material-ui/core/styles/createTheme';

import overrides from './overrides';

export const theme = createTheme({
  overrides
});

export const defaultFont = createTheme({
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      'avenir next',
      'avenir',
      'helvetica neue',
      'helvetica',
      'ubuntu',
      'roboto',
      'noto',
      'segoe ui',
      'arial',
      'sans-serif'
    ].join(',')
  }
});
