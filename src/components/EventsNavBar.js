import { Fragment } from "react";
import { Nav, Navbar } from 'react-bootstrap';

function EventsNavBar() {

    return (
        <Fragment>
        {/* className="flex-column"  */}
        <Nav defaultActiveKey="/" variant="pills" className="Nav" style={{ background: "black"}}> 
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link eventKey="link-1" href="/eventsavailable">View Events</Nav.Link>
          <Nav.Link eventKey="link-2" href="/addevent">Add Event</Nav.Link>
          
        </Nav>
        </Fragment>
      );
}

export default EventsNavBar;