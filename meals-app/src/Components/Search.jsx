import { useGlobalContext } from "../Context";
import { useState } from "react";

const Search = () => {
    const {setSearchTerm, fetchRandomMeal} = useGlobalContext();
    const [query, setQuery] = useState('');

    function handleSubmit(e) {
        e.preventDefault();

        if(query) {
            setSearchTerm(query);
        } 
    }

    function handleChange(e) {
        setQuery(e.target.value);
    } 

    function handleRandomMeal() {
        setQuery('');
        setSearchTerm('');
        fetchRandomMeal();
    }

    return(
        <header className="search-container">
            <form onSubmit={handleSubmit}>
                <input type="text" 
                value={query}
                className="form-input" 
                placeholder="Search favorite meal..."
                onChange={handleChange} />
                <button className="btn" type='submit'>Search</button>
                <button className="btn btn-hipster" onClick={handleRandomMeal}>Surprise Me!</button>
            </form>
        </header>
    );
}

export default Search;