import { Route, Routes } from "react-router-dom"; // Import Route and Routes components from the react-router-dom library
import NotFound from "./content/NotFound/NotFound"; // Import the NotFound component
import "./App.css"; // Import CSS stylesheet
import Home from "./content/Home/Home"; // Import the Home component
import Header from "./content/Header/Header"; // Import the Header component
import Results from "./content/Results/Results"; // Import the Results component
import Details from "./content/Details/Details"; // Import the Details component
import { useEffect } from "react"; // Import the useEffect hook from the react library
import Footer from "./content/Footer/Footer"; // Import the Footer component

function App() {
  // Define the appHeight() function to set the height of the list component
  const appHeight = () => {
    const doc = document.documentElement;
    doc.style.setProperty("--app-height", `${window.innerHeight}px`);
  };
  
  // Call the appHeight() function when the component first renders using the useEffect hook
  useEffect(() => {
    window.addEventListener("resize", appHeight);
    appHeight();
    return () => {
      window.removeEventListener("resize", appHeight);
    };
  }, []); // Only call useEffect once when the component first renders

  return (
    <>
      <div className="App">
        <Header /> {/* Render the Header component */}
        <Routes> {/* Use the Routes component to define the routes for the app */}
          <Route exact path="/" Component={Home} /> {/* Render the Home component at the root path */}
          <Route exact path="/starships" Component={Results} /> {/* Render the Results component at the /starships path */}
          <Route exact path="/404" Component={NotFound} /> {/* Render the NotFound component at the /404 path */} 
          <Route exact path="/starships/:slug" Component={Details} /> {/* Render the Details component at the /starships/:slug path */} 
          <Route exact path="*" Component={NotFound} />  {/* Render the NotFound component for all other paths */} 
        </Routes>
      </div>
      <Footer/> {/* Render the Footer component */} 
    </>
  );
}

export default App;
