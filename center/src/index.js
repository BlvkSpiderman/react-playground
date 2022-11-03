import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './Components/components.css';
import './Components/stocksearch.css';
import reportWebVitals from './reportWebVitals';
import Calculator from './Components/TempCalculator';
import LoginControl from './Components/LoginControl';
import FilterApp from './Components/StockSearch';
import { FetchData } from './Components/DataFetch';


const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(
    <main className='main'>
            <LoginControl />
        <div className="cont-secondary">
            <div className='temp-container'>
                <Calculator />
            </div>
            <div className="filter-app-container">
                <FilterApp />
            </div>
        </div>
        <div className="tertiary">
            <FetchData />
        </div>
    </main>
);

reportWebVitals();