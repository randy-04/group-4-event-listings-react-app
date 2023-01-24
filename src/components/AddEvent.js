import React from "react";
import { useState } from "react";



const heading = {
    fontSize: '30px',
    colour: 'red',
    alignItems: 'centre',
    
}

function AddEvent() {
    const [eventData,setEventdata] = useState("");
    const [name,setName] = useState("")
    const [location,setLocation] = useState("");
    const [description,setDescription] = useState("");
    const [date,setDate] = useState("");
    const [time,setTime] = useState("");
    const [price,setPrice] = useState("");


    function handleChange(e){
        setEventdata({
            ...eventData,[e.target.name]:e.target.value,
        },)
        console.log(eventData)
    }

    function addEvent(e){
        e.preventDefault();
        const newData = {name,location,description,date,time,price}

        // console.log(newData)
        fetch(" http://localhost:3500/Events",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body: JSON.stringify(newData)
        },[])
        .then((res)=>{
            console.log(newData)
        })
        .catch((e)=> console.log(e))
    }
  
    return (
        // Samuel add form here
         <div>
          {/* <img src="./images/plant.jpg" alt=""  style={{ width: '100%', height: '200%' }}  /> */}
            <h1 style={heading}>Add Event</h1>
            <div>
         <form  className="col-sm-6 offset-sm-3">
            <div className="col-sm-6 offset-sm-3">
                <br/>
                <input onChange={(e)=> setName(e.target.value)} className="form-control " 
                type="text" name="name" value={name} placeholder="name" /> <br />
                
                <input onChange={(e)=> setLocation(e.target.value)} className="form-control" 
                type="text" name="location" value={location} placeholder="location" /> <br />
                
                <input onChange={(e)=> setDescription(e.target.value)}className="form-control w-1/2 p-1" 
                type="text" name="description" value={description} placeholder="description" /> <br />
                
                <input onChange={(e)=> setTime(e.target.value)} className="form-control" 
                type="text" name="time" value={time} placeholder="time" /> <br />
               
                <input onChange={(e)=> setPrice(e.target.value)} className="form-control" 
                type="numeric" name="price" value={price} placeholder="price" /> <br />
                
                <input onChange={(e)=> setDate(e.target.value)}  className="form-control" 
                type="date" name="date" value={date} placeholder="date" /> <br />
               
                <button onClick={addEvent} type="submit" className="btn btn-primary">Add Event</button>
            </div>
        </form>  
            </div> 
        </div>
       
        
    )
    
}

export default AddEvent;
