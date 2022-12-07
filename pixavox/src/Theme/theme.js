import { createMuiTheme, responsiveFontSizes } 
from '@mui/material/styles'
import './theme.css'
const theme = responsiveFontSizes(createMuiTheme({
  spacing: 4,
  typography: {
    fontFamily: [
      'DaysOne',
      'Raleway',
      'Open Sans',
    ].join(','),
    h1: {
      fontSize: '48px',
      fontFamily: 'DaysOne',
    },
    h2: {
      fontSize: '20px',
      fontFamily: 'DaysOne',
    },
    h3: {
      fontSize: '2.5rem',
      fontFamily: 'Roboto',
    },
  },
  palette: {
    background: {
      default: '#009900'//green
    },
    primary: {
      main: '#020818',//indigo
    }
,
    secondary: {
      main: '#E769A6',//pink
    },
    error: {
      main: '#D72A2A',//red
    },
    warning: {
      main: '#FC7B09',//orange
    },
    info: {
      main: '#6B7D6A',//gray
    },
    success: {
      main: '#09FE00',//green
    },
    text: {
      primary: '#000000',//black
      secondary: '#FFFFFF',//white
    },
  },
}));

export default theme;