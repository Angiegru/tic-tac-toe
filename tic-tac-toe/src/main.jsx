import React from 'react' //react
import ReactDOM from 'react-dom/client' //React’s library to talk to web browsers (React DOM) 
import App from './App.jsx' //the component you created in App.js
import './index.css' //the styles for your components

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)


