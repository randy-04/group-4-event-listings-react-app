import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';


const heading = {
    fontSize: '30px',
    color: 'red',
    textAlign: 'center',
    display: 'flex',
    
}

function AddEvent({onAdd}) {
    // navigator 
    let navigator = useNavigate();

    // useState to hold new event data from the user
    const [eventData,setEventData] = useState({
        name: "",
        image: "",
        location:"",
        description:"",
        type:"",
        price:"",
        date:"",
        time:"",
        willAttend: false,
    });
   

    // function to capture values
    function handleChange(e){
        setEventData({
            ...eventData,
            [e.target.name]: e.target.value,
          });
        
        console.log(eventData)
    }
    
    // post method to send new data to server
    function addEvent(e){
        e.preventDefault();
        const newData = {
            name: eventData.name,
            image: eventData.image,
            location: eventData.location,
            description: eventData.description,
            type: eventData.type,
            price: eventData.price,
            date: eventData.date,
            time: eventData.time,
            willAttend: false
        }
        
        fetch(" http://localhost:3000/Events",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body: JSON.stringify(newData)
        })
        .then((res)=> res.json())
        .then((newEv) => onAdd(newEv))
        alert("Event Added Successfully!")
        navigator("/eventsavailable")
    }
  
    return (
        
         <div>
          {/* <img src="./images/plant.jpg" alt=""  style={{ width: '100%', height: '200%' }}  /> */}
            <h1 style={heading}>Add Event</h1>
            <div>
         <form  className="col-sm-6 offset-sm-3" onSubmit={addEvent}>
            <div className="col-sm-6 offset-sm-3">
                <br/>
                <label>
                    Event Name:
                    <input onChange={(e)=> handleChange(e)} className="form-control " 
                    type="text" name="name" value={eventData.name} placeholder="name" />
                </label> <br />
                
                <label>
                    Image:
                    <input onChange={(e)=> handleChange(e)}  className="form-control" 
                    type="text" name="image" value={eventData.image} placeholder="image" />
                </label> <br />

                <label>
                    Location:                
                    <input onChange={(e)=> handleChange(e)}  className="form-control" 
                    type="text" name="location" value={eventData.location} placeholder="location" /> 
                </label> <br />

                <label>
                    Date:
                    <input onChange={(e)=> handleChange(e)}   className="form-control" 
                    type="date" name="date" value={eventData.date} placeholder="dd-mm-yyyy" /> 
                </label> <br />
                
                <label>
                    Time:
                    <input onChange={(e)=> handleChange(e)} className="form-control" 
                    type="time" name="time" value={eventData.time} /> 
                </label> <br />

                <label>
                    Price:
                    <input onChange={(e)=> handleChange(e)} className="form-control" 
                    type="text" name="price" value={eventData.price} placeholder="price" /> 
                </label> <br />
               
                <label>
                    Description:
                    <textarea onChange={(e)=> handleChange(e)} className="form-control w-1/2 p-1" 
                    type="text" name="description" value={eventData.description} placeholder="description" /> 
                </label> <br />

                <label>
                    Type of Event:
                    <Form.Select 
                        style={{width: "100%"}}
                        name="type"
                        value={eventData.type}
                        
                        aria-label="Default select example"
                        
                        onChange={(e) => {handleChange(e)}}
                    >
                        {/* <option value="All">Filter by Type of Event</option> */}
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
                </label> <br />
                <br />
                
               
                <button type="submit" className="btn btn-primary">Add Event</button>
            </div>
        </form>  
            </div> 
        </div>
       
        
    )
    
}

export default AddEvent;
