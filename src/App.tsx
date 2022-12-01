import { Provider } from 'react-redux';
import AppRoutes from './routes/AppRoutes';
import { store } from './store';
import theme from './config/theme/Default';
import { ThemeProvider } from '@mui/material';

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
