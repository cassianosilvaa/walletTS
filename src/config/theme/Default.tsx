import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            // light: will be calculated from palette.primary.main,
            main: '#000000'
            // dark: will be calculated from palette.primary.main,
            // contrastText: will be calculated to contrast with palette.primary.main
        },
        secondary: {
            main: '#0044ff'
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
