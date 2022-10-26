import React from "react";

//Database for the application
const database = [
    {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
    {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
    {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
    {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
    {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
    {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
  ];

/**
 Here is the hierarchy for this component
 - FilterableProductTable
    - SearchBar
    - ProductTable 
        - ProductCategoryRow
        - ProductRow 
 */

// Filter table housing
function FilterableProductTable (props) {
    return (
        <div className="filter-table">
            {props.children}
        </div>
    );
}

// Search Component
function SearchDatabase(props) {
    const foundItems = [];
    props.dataBase.forEach(element => {
        if(element.name === props.searchKey) {
            foundItems.push(element);
        }
    });
    return foundItems;
}


class SearchBar extends React {
    constructor(props) {
        super(props);
        this.state = {
            searchKey: '',
            searchItems: [],
            isChecked: false
        } 
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    dataBase = this.props.database; // Database for searching through

    handleChange(e) {
       const checker = () => {
            if(this.state.isChecked === false) {
                return false;
            } else {
                return true;
            }
        }
        this.setState(
            {
                searchItem: e.target.value,
                isChecked: checker
            }
        );
    }
    
    handleSubmit(e) {
        return e.preventDefault;
    }
 
    
    render() {
        let searchKey = this.state.searchKey;
        let isChecked = this.state.isChecked;
        let searchItems = <SearchDatabase 
                        dataBase={this.dataBase}
                        searchKey={searchKey} />


        return(
            <form onSubmit={this.handleSubmit}>
                <input
                value={searchKey}
                onChange={this.handleChange} 
                placeholder='Search'/>
                <input 
                type="checkbox" 
                value= 'Only show products in stock' 
                checked={isChecked}
                onChange={this.handleChange}/>
            </form>
        );
    }
}

// Product Table
function ProductTable(props) {
    return (
        <div className="product-table">
            {props.children}
        </div>
    );
}

//