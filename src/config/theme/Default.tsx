import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            // light: will be calculated from palette.primary.main,
            main: '#0052bd'
            // dark: will be calculated from palette.primary.main,
            // contrastText: will be calculated to contrast with palette.primary.main
        },
        secondary: {
            main: '#1e2c53'
            // dark: will be calculated from palette.secondary.main,
        },
        contrastThreshold: 3,
        tonalOffset: 0.2
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '20px'
                }
            }
        }
    }
});

export default theme;
