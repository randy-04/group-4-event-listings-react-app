import React from "react";
import { useState } from "react";

function AddEvent() {
    // event state
    const [Event,setEvent] = useState({
        nameof:"",
        location:"",
        descrption:"",
        date:"",
        time:"",
        price:""
    })

    function handleChange (e){
        setEvent({...DataTransfer,[e.target.name]:e.target.value,})
        // console.log(data)
    }
  
    return (
        
        <div>
            <label>Add Event</label>
            <div>
         <form className="align-items-centre">
            <div className="col-sm-6 offset-sm-3 d-flex justify-content-center">
                <br/>
                <input className="form-control " type="text" name="name" placeholder="name" /> <br />
                <input className="form-control" type="text" name="location" placeholder="location" /> <br />
                <input className="form-control" type="text" name="description" placeholder="description" /> <br />
                <input className="form-control" type="text" name="time" placeholder="time" /> <br />
                <input className="form-control" type="numeric" name="price" placeholder="price" /> <br />
                <input className="form-control" type="date" name="date" placeholder="date" /> <br />
            </div>
        </form>
            
            </div>
            <button type="submit" class="btn btn-primary">Add Event</button>
            

        </div>
       
        
    )
    
}

export default AddEvent;