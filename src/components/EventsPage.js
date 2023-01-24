import EventsNavBar from "./EventsNavBar";
import React, { useState, useEffect, Fragment } from 'react';
import { Alert } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import AddEvent from "./AddEvent";
import EachEvent from "./EachEvent";



function EventsPage() {
    // create state for holding the events
    const [events, setEvents] = useState([]);

    // useEffect to fetch events from the server

    useEffect(() => {
        fetch("http://localhost:3000/Events")
        .then((response) => response.json())
        // using async method to add events
        .then((eventsData) => setEvents(() => eventsData));
    }, [])

    // variable to loop through and list events
    const eventsList = events.map((event) => {
        return (
            <EachEvent key={event.id} event={event} />
        )
    })
    return (
        <Fragment>

            <EventsNavBar />
            <Alert variant="dark">
                Welcome to EventHub! Go to the Events Page to see what we have for You 🥳
            </Alert>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/eventsavailable" element={<Fragment>

                        <div className="ui three column grid container" style={{
                            
                            display: 'flex',
                            justifyContent: 'space-between', 
                            alignItems: 'center' 
                            }}>
                            <div className="row">
                                {eventsList}
                            </div>
                        </div>
                    </Fragment> } />
                <Route path="/addevent" element={<AddEvent />} />

            </Routes>
        </Fragment>
    )
}

export default EventsPage;