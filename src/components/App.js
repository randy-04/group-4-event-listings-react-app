import logo from '../logo.svg';
import '../App.css';
import EventsPage from './EventsPage';
import React from 'react'
import ReactGA from 'react-ga';

function App() {
  const TRACKING_ID = "G-4DC5MJHGSF";
  ReactGA.initialize(TRACKING_ID);
    
  return (
    <div>
      <EventsPage />         
    </div>
  );
}

export default App;
