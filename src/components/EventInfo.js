import React, { Fragment, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
// import Card from 'react-bootstrap/Card';
import { Card, Icon } from 'semantic-ui-react'


function EventInfo() {
    let params = useParams();
    // useState to hold data for the nested event info
    const [eventData, setEventData] = useState({});
    console.log(params.eventID);

    // useEffect to fetch and store data in eventData
    useEffect(() => {
        fetch(`https://events-moringa-api.herokuapp.com/Events/${params.eventID}`)
        .then((r)=>r.json())
        .then((evData)=>setEventData(evData))
    }, [params.eventID])

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'space-between', 
            alignItems: 'center',
            backgroundColor: "#2185d0",
            color: "white"
        }}>
            {/* <Card className="bg-dark text-white">
            <Card.Img src={eventData.image} alt="Card image" />
            <Card.ImgOverlay>
                <Card.Title>{eventData.name}</Card.Title>
                <Card.Text>
                {eventData.description}
                </Card.Text>
                <Card.Text>Location: {eventData.location}</Card.Text>
                <Card.Text>Date & Time: {eventData.date} || {eventData.time}</Card.Text>
                <Card.Text>Price: {eventData.price}</Card.Text>
            </Card.ImgOverlay>
            </Card> */}

            <Card style={{
                // color:"black",
                // backgroundColor:"whitesmoke"
            }}>
                <Card.Content header={eventData.name} />
                <Card.Content description={eventData.description} />
                <Card.Content extra>
                Price: {eventData.price} || Location: {eventData.location}

                <br />
                <Icon name='meetup' />
                    Date & Time: {eventData.date} || {eventData.time}
                </Card.Content>
            </Card>

            <h2 class="ui icon header">
            <Icon name="mail" />
            <div class="content">
                Attending? {eventData.willAttend ? "I AM": "No"}
                <div class="sub header">Toggle the RSVP/Attend button to confirm attendance</div>
            </div>
            </h2>

        </div>

    )

}

export default EventInfo;