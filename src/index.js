import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import 'semantic-ui-css/semantic.min.css'
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      
    </BrowserRouter>
    
    
  </React.StrictMode>
);

// function for scrolling to top
function scrollTop() {
  const scroll = document.querySelector('.scroll-top');
  window.addEventListener('scroll', function() {
      scroll.classList.toggle("active", window.scrollY > 500)
  })

  scroll.addEventListener("click", () => {
      window.scrollTo({
          top: 0,
          behavior:"smooth"
      })
  })
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
