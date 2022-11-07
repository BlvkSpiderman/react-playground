import { useEffect, useContext, useState } from "react";
import finnHub from "../apis/finnHub";
import { WatchListContext } from "../context/WatchListContext";

export const AutoComplete = () => {
    const { addStock } = useContext(WatchListContext);
    const [search, setSearch] = useState('');
    const [results, setResults] = useState([]);

    const renderDropdown = () => {
        const dropDownClass = search ? 'show' : null;
        return (
            <ul style={{
                height:'400px', 
                overflowY: 'scroll', 
                overflowX: 'hidden',
                cursor: 'pointer'
            }}className={`dropdown-menu ${dropDownClass}`}>
                {results.map((result) => {
                    return (
                        <li key={result.symbol} className="dropdown-item" 
                        onClick={() => {
                                        addStock(result.symbol)
                                        setSearch('')
                                    }} >
                            {result.description} ({result.symbol})
                        </li>
                    )
                })}
            </ul>
        )
    }

    useEffect(() => {
        const fetchData = async () => {
            let isMounted = true;
            try {
                const response = await finnHub.get('/search', {
                    params: {
                        q: search
                    }
                })
                console.log(response);
                if(isMounted) {
                    setResults(response.data.result);
                };
                return () => {isMounted = false}
            } catch (error) {
                
            }
        }
        if(search.length > 0) {
            fetchData()
        } else {
            setResults([]); //This clears the results state when search is empty
        }
    }, [search]);
    return (
        <div className="w-50 p-5 rounded mx-auto">
            <div className="form-floating dropdown">
                <input type="text" style={{backgroundColor: 'rgba(145, 150, 171, 0.04'}} id='search'
                className="form-control" placeholder="Search" autoComplete="off" value={search}
                onChange={(e) => setSearch(e.target.value)} />
                <label htmlFor="search">Search</label>
                <ul className="dropdown-menu">
                    <li>Stock1</li>
                    <li>Stock2</li>
                    <li>Stock3</li>
                </ul>
                {renderDropdown()}
            </div>
        </div>
    );
}