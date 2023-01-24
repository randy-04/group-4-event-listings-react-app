import React, { Fragment } from "react";
import _ from 'lodash'
import { Search, Grid, Header, Segment } from 'semantic-ui-react'

function SearchResults({ searchResults, setSearchResults }) {
    // function to run on search change event
    const onSearch = (e) => {
        setSearchResults(e.target.value);
    }
    
    return (
        <Fragment>
        <div class="ui search">
            <div class="ui icon input">
                <input className="prompt" 
                    type="text"
                    placeholder='Search Events...'
                    onChange={onSearch}
                    value={searchResults}
                />
                <i className="search icon"></i>
            </div>
            <div className="results"></div>
        </div>
        <br />
    </Fragment>
        
    )
    
    
}

export default SearchResults;