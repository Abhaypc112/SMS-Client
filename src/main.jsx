import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createTheme, ThemeProvider } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store.js';
import { ToastContainer } from 'react-toastify'

const theam = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main : "#1B3B2E",
    },
    secondary : {
      main : "#2A6047",
    },
  }
})


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theam}>
        <BrowserRouter>
          <App />
         <ToastContainer position="top-right"/> 
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </StrictMode>,
)
