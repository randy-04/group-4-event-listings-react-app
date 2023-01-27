import { Fragment } from "react";
import { Nav, Navbar, Container } from 'react-bootstrap';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';

function EventsNavBar() {

    return (
        <Fragment>
        


        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">EventsHub</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/eventsavailable">View Events</Nav.Link>
            <Nav.Link href="/addevent">Add Event</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        </Fragment>
      );
}

export default EventsNavBar;