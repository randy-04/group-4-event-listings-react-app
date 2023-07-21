import React, { Fragment } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import Form from 'react-bootstrap/Form';
// import { Form } from 'semantic-ui-react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import API_BASE_URL from "../library/env";


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
        
        fetch(`${API_BASE_URL}`,{
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

        {/* <Form onSubmit={addEvent}>
        <Form.Group widths='equal'>
          <Form.Input fluid label='Event name' type="text" name="name" value={eventData.name} placeholder="name" onChange={(e)=> handleChange(e)} />
          <Form.Input fluid label='Image' type="text" name="image" value={eventData.image} placeholder="image" onChange={(e)=> handleChange(e)}/>
          <Form.Select
            fluid
            label='Type'
            
            placeholder='Type'
            name="type"
            value={eventData.type}
                                    
            onChange={(e) => {handleChange(e)}}
          />
          <option value="Sherehe">Sherehe</option>
            <option value="Food">Food</option>
            <option value="Wedding">Wedding</option>
            <option value="Romance">Romance</option>
            <option value="Education">Education</option>
            <option value="Fashion">Fashion</option>
            <option value="Religious">Religious</option>
            <option value="Art">Art</option>
            <option value="Sports">Sports</option>
        </Form.Group>
        <Form.Group inline>
            <Form.Input fluid label='Location' type="text"name="location" value={eventData.location} placeholder="Location" onChange={(e)=> handleChange(e)} />
            <Form.Input fluid label='Price' type="text" name="price" value={eventData.price} placeholder="Price" onChange={(e)=> handleChange(e)}/>
            <Form.Input fluid label='Date' type="date" name="date" value={eventData.date} placeholder="yyyy-mm-dd" onChange={(e)=> handleChange(e)}/>
            <Form.Input fluid label='Time' type="time" name="time" value={eventData.time} placeholder="Time" onChange={(e)=> handleChange(e)}/>
        </Form.Group>
        <Form.TextArea label='Description' placeholder='Description...' onChange={(e)=> handleChange(e)} type="text" name="description" value={eventData.description} />
        
        <Form.Button type="submit">Submit</Form.Button>
      </Form> */}

    <Form onSubmit={addEvent} className="form-add">
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Event Name</Form.Label>
          <Form.Control type="text" name="name" placeholder="Event Name" value={eventData.name} onChange={(e)=> handleChange(e)}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Image</Form.Label>
          <Form.Control type="text" name="image" placeholder="Image" value={eventData.image} onChange={(e)=> handleChange(e)}/>
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Location</Form.Label>
        <Form.Control type="location" name="location" placeholder="Location" value={eventData.location} onChange={(e)=> handleChange(e)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" style={{height:"100px"}}name="description" placeholder="Description..." value={eventData.description} onChange={(e)=> handleChange(e)}/>
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>Date</Form.Label>
          <Form.Control type="date" name="date" placeholder="yyyy-mm-dd" value={eventData.date} onChange={(e)=> handleChange(e)}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Type of Event</Form.Label>
          <Form.Select defaultValue="Choose..." 
            name="type"
            value={eventData.type}                                    
            onChange={(e) => {handleChange(e)}}>

            <option>Choose...</option>
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
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Time</Form.Label>
          <Form.Control type="time" name="time" placeholder="time" value={eventData.time} onChange={(e)=> handleChange(e)}/>
        </Form.Group>
      </Row>

      

      <Button variant="primary" type="submit">
        Add Event
      </Button>
    </Form>
    </div>

      
    )
    
}

export default AddEvent;
