import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { Provider } from 'react-redux'
import {store} from '../src/store/store'
import './style.css';
import './assets/styles/navbar.css';
import './assets/styles/footer.css';
import './assets/styles/components.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/table.css'
import './assets/styles/login.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);