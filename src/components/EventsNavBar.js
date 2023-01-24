import { Fragment } from "react";
import { Nav, Navbar } from 'react-bootstrap';

function EventsNavBar() {

    return (
        <Fragment>
        {/* className="flex-column"  */}
        <Nav defaultActiveKey="/home" variant="pills"> 
          <Nav.Link href="/home">EventsHub</Nav.Link>
          <Nav.Link eventKey="link-1" href="/eventsavailable">Events Page</Nav.Link>
          <Nav.Link href="/addevent">Add Event</Nav.Link>
          
        </Nav>
        </Fragment>
      );
}

export default EventsNavBar;