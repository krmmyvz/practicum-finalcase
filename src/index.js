import React from "react"; // Import React library
import ReactDOM from "react-dom/client"; // Import ReactDOM library
import "./index.css"; // Import CSS stylesheet
import App from "./App"; // Import the main App component
import { BrowserRouter } from "react-router-dom"; // Import the BrowserRouter component from the react-router-dom library
import { ApiProvider } from "./context/ApiContext"; // Import the ApiProvider component from the ApiContext file

// Create a root element using ReactDOM.createRoot and target the HTML element with the ID "root"
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the root element with the App component wrapped inside React.StrictMode, BrowserRouter, and ApiProvider components
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ApiProvider>
        <App />
      </ApiProvider>
    </BrowserRouter>
  </React.StrictMode>
);
