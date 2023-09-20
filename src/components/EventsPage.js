import EventsNavBar from "./EventsNavBar";
import React, { useState, useEffect, Fragment } from "react";
import { Alert } from "react-bootstrap";
import { Route, Routes, Outlet } from "react-router-dom";
import Home from "./Home";
import AddEvent from "./AddEvent";
import EachEvent from "./EachEvent";
import { SearchResult } from "semantic-ui-react";
import SearchResults from "./SearchResults";
import FilterType from "./FilterType";
import RSVPFilter from "./RSVPFilter";
import { Button } from "semantic-ui-react";
import EventInfo from "./EventInfo";
import API_BASE_URL from "../library/env";

function EventsPage() {
  // create state for holding the events
  const [events, setEvents] = useState([]);

  // create state for holding search
  // because this is a parent compoonent to Each event and Search
  const [searchResults, setSearchResults] = useState("");

  // state to hold search parameters for each event
  const [searchParam] = useState([
    "description",
    "name",
    "date",
    "price",
    "location",
    "time",
  ]);

  // useState for filter parameters
  const [filterParam, setFilterParam] = useState(["All"]);

  // useState for willAttend filter parameter
  const [attendFilter, setAttendFilter] = useState(["All"]);

  // useState for pagination
  const [paginate, setPaginate] = useState(8);

  // load more button styling
  const loadBtn = {
    display: "block",
    marginTop: "2rem",
    marginBottom: "3rem",
    fontSize: "1.4rem",
    padding: "12px 32px",
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: "40px",
    backgroundColor: "#2d92de",
    border: "1px solid #2185d0",
    color: "#fff",
    cursor: "pointer",
  };

  // useEffect to fetch events from the server
  useEffect(() => {
    fetch(`${API_BASE_URL}`)
      .then((response) => response.json())
      // using async method to add events
      .then((eventsData) => {
        console.log(eventsData);
        return setEvents(() => eventsData);
      });
  }, []);

  // when there is an event, it will be filtered to find a match from the search results based on the name event
  let oneEvent = "";

  //const data = Object.values(events);

  // const search_parameters = Object.keys(Object.assign({}, ...data));
  // const filter_items = [...new Set(data.map((event) => event.type))];

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
    });
  }

  const load_more = (event) => {
    setPaginate((prevValue) => prevValue + 8);
  };

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
  };

  let evData = Object.values(events);
  // variable to loop through the searched/non-searched events and list them
  oneEvent = search(evData)
    .slice(0, paginate)
    .map((event) => {
      return (
        <EachEvent
          key={event.id}
          event={event}
          onUpdateEvent={updateAttend}
          onDeleteEvent={deleteEvent}
        />
      );
    });

  // function to add event to the page immediately after POST
  function handleAddEvent(newEvent) {
    console.log(newEvent);
    setEvents([...events, newEvent]);
  }

  // function to handle scroll to top button
  const top = () => {
    window.scrollTo(0, 0);
  };

  function sortEvents() {
    // let eventsSort = events.slice().sort((a, b) => {
    //     console.log(a)
    //     return new Date(b.date) - new Date(a.date)})

    let eventsSort = events.slice().sort((a, b) => {
      const timeA = new Date(a.date).getTime();
      const timeB = new Date(b.date).getTime();

      if (timeA < timeB) return -1;
      else if (timeA > timeB) return 1;
      else return 0;
    });

    setEvents(eventsSort);

    // let eventsCopy;

    // eventsCopy = [...events].sort((a, b) => {
    //     const timeA = (new Date(a.date)).getTime()
    //     console.log(timeA.toString);
    //     const timeB = (new Date(b.date)).getTime()

    //     if(timeA> timeB){
    //         return .date
    //     }else if(timeA < timeB){
    //         return sortStrategy.date * -1
    //     }else {
    //         return 0
    //     }
    // })

    console.log(eventsSort);
    console.log(events);
  }

  return (
    <Fragment>
      <EventsNavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/eventsavailable"
          element={
            <Fragment>
              <Alert variant="dark">
                Welcome to EventHub! Use the filter and search to find the Event
                for You 😎
              </Alert>
              <div
                className="wrapper"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                {/* components handling search and filters */}
                <SearchResults
                  searchResults={searchResults}
                  setSearchResults={setSearchResults}
                />
                <button onClick={sortEvents} className="sort-btn">
                  Sort by Date
                </button>

                <FilterType
                  filterParam={filterParam}
                  setFilterParam={setFilterParam}
                />
              </div>
              <br />
              <div style={{ position: "relative" }}>
                <Outlet />
              </div>
              <div
                className="ui three column grid container"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div className="row">{oneEvent}</div>
                <button onClick={load_more} style={loadBtn}>
                  Load More...
                </button>
              </div>
              {/*Back to top button */}
              <Button
                circular
                icon="arrow alternate circle up outline"
                onClick={top}
                className="topbtn"
                style={{ color: "red" }}
              />
            </Fragment>
          }
        >
          <Route path="attendance/:eventID" element={<EventInfo />} />
        </Route>

        <Route
          path="/addevent"
          element={
            <div className="add-ev-div">
              <AddEvent onAdd={handleAddEvent} />{" "}
            </div>
          }
        />
      </Routes>
    </Fragment>
  );
}

export default EventsPage;
