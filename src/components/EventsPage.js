import EventsNavBar from "./EventsNavBar";
import React, { useState, useEffect, Fragment } from 'react';
import { Alert } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import AddEvent from "./AddEvent";
import EachEvent from "./EachEvent";
import { SearchResult } from "semantic-ui-react";
import SearchResults from "./SearchResults";



function EventsPage() {
    // create state for holding the events
    const [events, setEvents] = useState([]);

    // create state for holding search 
    // because this is a parent compoonent to Each event and Search
    const [searchResults, setSearchResults] = useState("");

    // useState for filter parameters
    const [filterType, setFilterType] = useState(["All"]);

    // useEffect to fetch events from the server

    useEffect(() => {
        fetch("http://localhost:3000/Events")
        .then((response) => response.json())
        // using async method to add events
        .then((eventsData) => setEvents(() => eventsData));
    }, [])

    // when there is an event, it will be filtered to find a match from the search results based on the name event
    let oneEvent= "";
    if(events) {
        let matchedEvent = events.filter((event) =>{
            return (
                event.name.toLowerCase().includes(searchResults.toLowerCase()) ||
                event.description.toLowerCase().includes(searchResults.toLowerCase())
            )
        })

        // variable to loop through the searched/non-searched events and list them
        oneEvent = matchedEvent.map((event) => {
            return (
                <EachEvent key={event.id} event={event}/>
            )
        })
    }
    
    return (
        <Fragment>

            <EventsNavBar />
            <Alert variant="dark">
                Welcome to EventHub! Go to the Events Page to see what we have for You 🥳
            </Alert>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/eventsavailable" element={<Fragment>
                    <SearchResults events={events} searchResults={searchResults} setSearchResults={setSearchResults} />
                        <div className="ui three column grid container" style={{
                            
                            display: 'flex',
                            justifyContent: 'space-between', 
                            alignItems: 'center' 
                            }}>
                            <div className="row">
                                {oneEvent}
                            </div>
                        </div>
                    </Fragment> } />
                <Route path="/addevent" element={<AddEvent />} />

            </Routes>
            
        </Fragment>
    )
}

export default EventsPage;