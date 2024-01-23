import React from 'react' //react
import ReactDOM from 'react-dom/client' //React’s library to talk to web browsers (React DOM) 
import App from './App.jsx' //the component you created in App.js
//import { BrowserRouter} from 'react-router-dom'
import './index.css' //the styles for your components

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);


