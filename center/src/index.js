import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import LoginControl from './Components/LoginControl';

const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(<LoginControl />);

reportWebVitals();