import { createTheme } from '@mui/material/styles';
import { teal, deepOrange, orange, cyan } from '@mui/material/colors';
import { ruRU } from '@mui/material/locale';

const theme = createTheme({
  palette: {
    primary: teal,
    secondary: deepOrange,
    background: {
      default: '#fff',
      paper: '#fff',
    },
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        // The props to change the default for.
        disableRipple: true, // No more ripple, on the whole application 💣!
      },
    }
  },
}, ruRU);


export default theme