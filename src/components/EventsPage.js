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
import RSVPFilter from "./RSVPFilter";
import { Button } from 'semantic-ui-react'


function EventsPage() {
    // create state for holding the events
    const [events, setEvents] = useState([]);

    // create state for holding search 
    // because this is a parent compoonent to Each event and Search
    const [searchResults, setSearchResults] = useState("");

    // state to hold search parameters for each event
    const [searchParam] = useState(["description", "name", "date", "price", "location", "time"]);

    // useState for filter parameters
    const [filterParam, setFilterParam] = useState(["All"]);

    // useState for willAttend filter parameter
    const [attendFilter, setAttendFilter] = useState(["All"]);

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
            // filter by type
            if (event.type === filterParam) { 
                // default search based on parameters
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
            //else if (event.willAttend == attendFilter) {
            //     return searchParam.some((newEvent) => {
            //         return (
            //             event[newEvent]
            //                 .toString()
            //                 .toLowerCase()
            //                 .indexOf(searchResults.toLowerCase()) > -1
            //         );
            //     });
            // } else if (attendFilter == "All") {
            //     return searchParam.some((newEvent) => {
            //         return (
            //             event[newEvent]
            //                 .toString()
            //                 .toLowerCase()
            //                 .indexOf(searchResults.toLowerCase()) > -1
            //         );
            //     });
            // }
        });
    }

        // function to update willAttend value to reflect on DOM
        function updateAttend(updatedEvent) {
            const updatedEvents = events.map((event) => {
                if (event.id === updatedEvent.id) {
                    return updatedEvent;
                } else return event;
            });
            setEvents(updatedEvents);
        }

        // function to delete event and update state accordingly
        const deleteEvent = (delEv) => {
            const updatedState = events.filter((event) => event.id !== delEv.id);
            setEvents(updatedState);
        }

        let evData = Object.values(events);
        // variable to loop through the searched/non-searched events and list them
        oneEvent = search(evData).map((event) => {
            return (
                <EachEvent key={event.id} event={event} onUpdateEvent={updateAttend} onDeleteEvent={deleteEvent}/>
            )
        })
    
    
    // function to add event to the page immediately after POST
        function handleAddEvent(newEvent) {
            console.log(newEvent)
            setEvents([...events, newEvent])
        }

        // function to handle scroll to top button 
        const top = () => {
            window.scrollTo(0, 0);
          }

    return (
        <Fragment>
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
                            {/* components handling search and filters */}
                        <SearchResults searchResults={searchResults} setSearchResults={setSearchResults} />
                        {/* <RSVPFilter attendFilter={attendFilter} setAttendFilter={setAttendFilter} /> */}
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
                        {/*Back to top button */}
                            <Button circular icon="arrow alternate circle up outline" onClick={top} className="topbtn" style={{color:"red"}}/>
                    </Fragment> } />
                <Route path="/addevent" element={<AddEvent onAdd={handleAddEvent}/>} />

                

            </Routes>
            
        </Fragment>
    )
}

export default EventsPage;


