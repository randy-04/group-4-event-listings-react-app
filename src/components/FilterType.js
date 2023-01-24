import React, { Fragment } from "react";
import Form from 'react-bootstrap/Form';

function FilterType({ filterParam, setFilterParam }) {
    
    return (
        <Fragment>   
       
            <Form.Select 
                style={{width: "30%"}}
                
                aria-label="Default select example"
                // new value of selection becomes the filterParam
                onChange={(e) => {
                    setFilterParam(e.target.value);
                }}
            >
                <option value="All">Filter by Type of Event</option>
                <option value="true">true</option>
                <option value="false">false</option>
                
            </Form.Select>
        </Fragment>
    )

}

export default FilterType;