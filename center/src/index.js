import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './Components/components.css';
import './Components/stocksearch.css';
import reportWebVitals from './reportWebVitals';
import Calculator from './Components/TempCalculator';
import LoginControl from './Components/LoginControl';


const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(
    <div className='main'>
        <LoginControl />
       <div className='temp-container'>
        <Calculator />
        </div>
    </div>
);

reportWebVitals();