import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './Components/components.css';
import './Components/stocksearch.css';
import reportWebVitals from './reportWebVitals';
import Calculator from './Components/TempCalculator';
import LoginControl from './Components/LoginControl';
import FilterApp from './Components/StockSearch';


const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(
    <div className='main'>
        <LoginControl />
       <div className='temp-container'>
        <Calculator />
        </div>
        <div className="filter-container">
            <FilterApp />
        </div>
    </div>
);

reportWebVitals();