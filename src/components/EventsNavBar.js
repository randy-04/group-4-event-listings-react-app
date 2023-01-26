import { Fragment } from "react";
import { Nav, Navbar } from 'react-bootstrap';

function EventsNavBar() {

    return (
        <Fragment>
        {/* className="flex-column"  */}
        <ul>
        <Nav  className="nav" style={{ width: "100%", position: "absolute", marginTop: "5%", marginLeft: "65%", fontSize: "25px", color: "whitesmoke"}}> 
        <li style={{marginRight: "10px"}}><Nav.Link style ={{color: "whitesmoke"}} href="/">Home</Nav.Link></li>
         <li style={{marginRight: "10px"}}><Nav.Link style ={{color: "whitesmoke"}}eventKey="link-0" href="/contact">Contact us</Nav.Link></li>
         <li style={{marginRight: "10px"}}><Nav.Link style ={{color: "whitesmoke"}}eventKey="link-1" href="/eventsavailable">View Events</Nav.Link></li>
         <li style={{marginRight: "10px"}}><Nav.Link style ={{color: "whitesmoke"}}eventKey="link-2" href="/addevent">Add Event</Nav.Link></li>
          
        </Nav>
        </ul>
        </Fragment>
      );
}

export default EventsNavBar;