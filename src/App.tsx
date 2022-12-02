import { ThemeProvider } from '@mui/material';
import { Provider } from 'react-redux';
import theme from './config/theme/Default';
import AppRoutes from './routes/AppRoutes';
import { store } from './store';

function App(): JSX.Element {
    return (
        <ThemeProvider theme={theme}>
            <Provider store={store}>
                <AppRoutes />
            </Provider>
        </ThemeProvider>
    );
}

export default App;
