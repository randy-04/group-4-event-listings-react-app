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

    return (
        <Fragment>

            <EventsNavBar />
            <Alert variant="info dark">
                Welcome to EventHub! Go to the Events Page to see what we have for You 🥳
            </Alert>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/eventsavailable" element={<EachEvent />} />
                <Route path="/addevent" element={<AddEvent />} />

            </Routes>
        </Fragment>
    )
}

export default EventsPage;