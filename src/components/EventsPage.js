import EventsNavBar from "./EventsNavBar";
import React, { useState, useEffect, Fragment } from 'react';
import { Alert } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import AddEvent from "./AddEvent";
import EachEvent from "./EachEvent";
import { SearchResult } from "semantic-ui-react";
import SearchResults from "./SearchResults";
import FilterType from "./FilterType";



function EventsPage() {
    // create state for holding the events
    const [events, setEvents] = useState([]);

    // create state for holding search 
    // because this is a parent compoonent to Each event and Search
    const [searchResults, setSearchResults] = useState("");

    // state to hold search parameters for each event
    const [searchParam] = useState(["description", "name", "date", "price"]);

    // useState for filter parameters
    const [filterParam, setFilterParam] = useState(["All"]);

    // useEffect to fetch events from the server

    useEffect(() => {
        fetch("http://localhost:3000/Events")
        .then((response) => response.json())
        // using async method to add events
        .then((eventsData) => setEvents(() => eventsData));
    }, [])

    // when there is an event, it will be filtered to find a match from the search results based on the name event
    let oneEvent= "";
 
    // function to handle both search results and filtered results
    function search(events) {
        return events.filter((event) => {
            if (event.willAttend === filterParam) { 
                return searchParam.some((newEvent) => {
                    return (
                        event[newEvent]
                            .toString()
                            .toLowerCase()
                            .indexOf(searchResults.toLowerCase()) > -1
                    );
                });
            } else if (filterParam == "All") {
                return searchParam.some((newEvent) => {
                    return (
                        event[newEvent]
                            .toString()
                            .toLowerCase()
                            .indexOf(searchResults.toLowerCase()) > -1
                    );
                });
            }
        });
    }

        let evData = Object.values(events);
        // variable to loop through the searched/non-searched events and list them
        oneEvent = search(evData).map((event) => {
            return (
                <EachEvent key={event.id} event={event}/>
            )
        })
    //}
    
    return (
        <Fragment>

            <EventsNavBar />
            <Alert variant="dark">
                Welcome to EventHub! Go to the Events Page to see what we have for You 🥳
            </Alert>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/eventsavailable" element={<Fragment>
                    <div className="wrapper" style={{
                        display: "flex",
                        justifyContent: 'space-between', 
                        alignItems: 'center' 
                        }}>
                        <SearchResults searchResults={searchResults} setSearchResults={setSearchResults} />
                        <FilterType filterParam={filterParam} setFilterParam={setFilterParam} />
                    </div>
                    <br />
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