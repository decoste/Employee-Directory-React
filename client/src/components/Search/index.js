import React, { Component } from "react";
import './style.css';

class Search extends Component{
    render() {
        return (
            <>
                   <input
                    id='filterName'
                  type="text"
                  onChange={this.props.handleInputChange}
                />
                <button type="button" onClick={this.props.handleSearchClick}>Filter by gender</button>

                <input
                  type="text" id='filterGender'
                  onChange={this.props.handleInputChange}
                  className="filter"
                />
                <button type="button" onClick={this.props.handleFilterClick}>Filter by first name</button>
            </>
        );
    }
   
}

export default Search;