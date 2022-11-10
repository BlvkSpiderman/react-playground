import { useParams } from "react-router-dom";
import { useEffect } from "react";
import finnHub from "../apis/finnHub";
import { useState } from "react";
import { StockChart } from "../components/StockChart";
import { StockData } from "../components/StockData";

const formatData = (data) => {
    //The 't' is specifying the property in the data object
    return data.t.map((el, index) => {
        return {
            x: el * 1000,
            y: Math.floor(data.c[index])
        }
    })
}

export const StockDetailPage = () => {
    const { symbol } = useParams();
    const [ chartData, setChartData] = useState([]);
    const [ display, setDisplay ] = useState(false);
    const [ showData, setShowData ] = useState(false); 

    useEffect(() => {
        const fetchData = async () => {
            const date = new Date();
            
            //It gets the current time in milliseconds and then converts to seconds by division of 1000
            const currentTime = Math.floor(date.getTime()/1000);
            
            // Time from one day ago.
            let oneDay;   
            if(date.getDay() === 6) { // '6' is Saturday
                oneDay = currentTime - 2*24*60*60;
            } else if(date.getDay() === 0) { // '0' is Sunday
                oneDay = currentTime - 3*24*60*60;
            } else {
                oneDay = currentTime - 24*60*60;
            }
            const oneWeek = currentTime - 7*24*60*60; // Time from one week ago
            const oneYear = currentTime - 365*24*60*60; // Time from one year ago

            // Fetching the data for the different time periods
            try {    
                 const responses = await Promise.all([
                    finnHub.get('/stock/candle', {
                        params: {
                            symbol, 
                            from : oneDay,
                            to : currentTime,
                            resolution : 30
                        }
                    }),
                    finnHub.get('/stock/candle', {
                            params: {
                                symbol, 
                                from : oneWeek,
                                to : currentTime,
                                resolution : 60
                            }
                        }),
                    finnHub.get('/stock/candle', {
                            params: {
                                symbol, 
                                from : oneYear,
                                to : currentTime,
                                resolution : 'W'
                        }
                    })
            ])
            // Setting the chart data
            setChartData({
                    day: formatData(responses[0].data),
                    week: formatData(responses[1].data),
                    year: formatData(responses[2].data)
                })
             }    
            catch(error) {
                console.log(error);
            }                          
        }
        fetchData();
    }, [symbol])

    useEffect(() => {
        if(chartData) {
            setTimeout(() => setDisplay(true), 1);    
        }
    }, [chartData]);

    useEffect(() => {
        setTimeout(() => setShowData(true), 1000);
    }, [])
    

    return display ? (
        <div>
            <div>
                <StockChart 
                chartData={chartData}
                symbol={symbol}/>
                {showData && <StockData symbol={symbol}/>}
            </div>
        </div>
    ) : (
        <div></div>
    );
}