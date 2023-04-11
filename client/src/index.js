import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';//Conecta app global con store
import { store } from './redux';
import App from './App';
import './index.css'

createRoot(document.getElementById('root')).render(
  <Provider store={store} >
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);
