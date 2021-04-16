import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import config from './config';
import { Provider } from 'react-redux';

const store= config();

ReactDOM.render(
    <Provider store= {store}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
    </Provider>
    , document.getElementById('root')
);
