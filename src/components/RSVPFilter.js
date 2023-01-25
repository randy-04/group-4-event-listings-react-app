import React, { Fragment } from "react";
import Form from 'react-bootstrap/Form';

function RSVPFilter({ attendFilter, setAttendFilter }) {
    return (
        <Fragment>   
       
            <Form.Select 
                style={{width: "30%"}}
                
                aria-label="Default select example"
                // new value of selection becomes the filterParam
                onChange={(e) => {
                    setAttendFilter(e.target.value);
                    console.log(e.target.value);
                }}
            >
                <option value="All">Filter by Attendance</option>
                <option value="true">RSVP'd</option>
                <option value="false">Not Attending</option>
                                
            </Form.Select>
        </Fragment>
    )

}

export default RSVPFilter;