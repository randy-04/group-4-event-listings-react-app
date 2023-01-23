import { Fragment } from "react";
import Nav from 'react-bootstrap/Nav';

function EventsNavBar() {

    return (
        <Nav defaultActiveKey="/home" className="flex-column" variant="pills">
          <Nav.Link href="/home">EventsHub</Nav.Link>
          <Nav.Link eventKey="/eventspage">Events Page</Nav.Link>
          <Nav.Link eventKey="/addevent">Add Event</Nav.Link>
          
        </Nav>
      );
}

export default EventsNavBar;