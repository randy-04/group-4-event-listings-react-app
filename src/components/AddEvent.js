import React from "react";
import { useState } from "react";

function AddEvent() {
    const [Event,setEvent] = useState({
        nameof:"",
        location:"",
        descrption:"",
        date:"",
        time:"",
        price:""
    })
  
    return (
        // Samuel add form here
        <div>
            <label>Add Event</label>
            <div>
         <form className="align-items-centre">
            <div className="col-sm-6 offset-sm-3 d-flex justify-content-center">
                <br/>
                <input className="form-control " type="text" placeholder="name" /> <br />
                <input className="form-control" type="text" placeholder="location" /> <br />
                <input className="form-control" type="text" placeholder="description" /> <br />
                <input className="form-control" type="text" placeholder="time" /> <br />
                <input className="form-control" type="numeric" placeholder="price" /> <br />
                <input className="form-control" type="date" placeholder="date" /> <br />
            </div>
        </form>
            
            </div>
            <button type="submit" class="btn btn-primary">Add Event</button>
            

        </div>
       
        
    )
    
}

export default AddEvent;