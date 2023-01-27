import React, { Fragment } from "react";
import Form from 'react-bootstrap/Form';

function FilterType({ filterParam, setFilterParam, filter_items }) {
    
    return (
        <Fragment>   
       
            <Form.Select 
                style={{width: "30%"}}
                
                aria-label="Default select example"
                // new value of selection becomes the filterParam
                onChange={(e) => {
                    setFilterParam(e.target.value);
                    console.log(e.target.value);
                }}
            >
                <option value="">Filter by Type of Event</option>
                {/* {filter_items.map((item) => (
                        <option value={item}>{item}</option>
                ))} */}
                <option value="Sherehe">Sherehe</option>
                <option value="Food">Food</option>
                <option value="Wedding">Wedding</option>
                <option value="Romance">Romance</option>
                <option value="Education">Education</option>
                <option value="Fashion">Fashion</option>
                <option value="Religious">Religious</option>
                <option value="Art">Art</option>
                <option value="Sports">Sports</option>
                
            </Form.Select>
        </Fragment>
    )

}

export default FilterType;