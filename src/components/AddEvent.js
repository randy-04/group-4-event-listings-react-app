import React from "react";
import { useState } from "react";



const heading = {
    fontSize: '30px',
    colour: 'red',
    alignItems: 'centre',
    
}

function AddEvent() {
    const [eventData,setEventdata] = useState({
        name: "",
        location:"",
        description:"",
        time:"",
        price:"",
        date:""
    });
   


    function handleChange(e){
        const newData = {...eventData}
        newData[e.target.id] = e.target.value
        setEventdata(newData)
        console.log(eventData)
    }
    

    function addEvent(e){
        const newData = {...eventData}
        e.preventDefault();

        fetch(" http://localhost:3500/Events",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body: JSON.stringify(newData)
        },[])
        .then((res)=>{
            console.log(res.json)})
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
                <input onChange={(e)=> handleChange(e)} className="form-control " 
                type="text" id="name" value={eventData.name} placeholder="name" /> <br />
                
                <input onChange={(e)=> handleChange(e)}  className="form-control" 
                type="text" id="location" value={eventData.location} placeholder="location" /> <br />
                
                <input onChange={(e)=> handleChange(e)} className="form-control w-1/2 p-1" 
                type="text" id="description" value={eventData.description} placeholder="description" /> <br />
                
                <input onChange={(e)=> handleChange(e)} className="form-control" 
                type="text" id="time" value={eventData.time} placeholder="time" /> <br />
               
                <input onChange={(e)=> handleChange(e)} className="form-control" 
                type="numeric" id="price" value={eventData.price} placeholder="price" /> <br />
                
                <input onChange={(e)=> handleChange(e)}   className="form-control" 
                type="date" id="date" value={eventData.date} placeholder="date" /> <br />
               
                <button onClick={addEvent} type="submit" className="btn btn-primary">Add Event</button>
            </div>
        </form>  
            </div> 
        </div>
       
        
    )
    
}

export default AddEvent;
