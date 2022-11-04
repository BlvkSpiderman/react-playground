import { useEffect } from "react";
import { useState } from "react";
import finnHub from "../apis/finnHub";

export const AutoComplete = () => {
    const [search, setSearch] = useState('');
    const [results, setResults] = useState([]);
    let isMounted = true;

    useEffect(() => {
        const fetchData = async () => {
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
            } catch (error) {
                
            }
        }
        if(search.length > 0) {
            fetchData()
        };
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
            </div>
        </div>
    );
}