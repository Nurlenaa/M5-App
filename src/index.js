import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './Home';
import Navigation from './Navigation'
import reportWebVitals from './reportWebVitals';
import About from './Views/About';
// import Services from './Views/Services';
// import Partners from './Views/Partners';
// import Team from './Views/Team';
// import Contact from './Views/Contact';
// import Footer from './Footer'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   
    <App />
    
    
    {/*<About /> */}
    {/* <Services />
    <Partners />
    <Team />
    <Contact />
    <Footer /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
