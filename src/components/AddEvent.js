import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import AddEventStyle from './AddEvent.module.css';
import pic1 from "./senior-party.jpg"


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
        <div className={AddEventStyle.container}>
          <div  className={AddEventStyle.row}>
            <div className={AddEventStyle.banner}>
            <img src={pic1} alt="" className={AddEventStyle.image}></img>   
            <div className={AddEventStyle.box}>
            <h1 className={AddEventStyle.heading}>lorem ipsum</h1>        
            </div>
             </div>
          </div>

        </div>
        

    )
}

export default AddEvent;