require('file-loader?name=[name].[ext]!./index.html');      // Connects to the index.html

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './utils/styles/index.css'
import './utils/styles/movies.css'
import './utils/styles/contactUs.css'
import './utils/styles/notifications.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);