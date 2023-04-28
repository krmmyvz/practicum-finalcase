import React, { useState } from "react";
import { MdSearch } from "react-icons/md";
import { Formik, Form, Field } from "formik";
import { useNavigate } from "react-router-dom";

import "./Home.css";

function Home() {
  // Setting up state for search input
  const [search, setSearch] = useState("");
  // Initializing react-router-dom navigate function
  const navigate = useNavigate();

  // Function to handle form submission
  const handleFormSubmit = (values) => {

    // Trimming the search input
    const trimmedSearch = values.search.trim();

    // Updating state with trimmed search input
    setSearch(trimmedSearch);

    // Navigating to the appropriate route based on search input
    if (trimmedSearch === "") {
      navigate(`/starships`);
    } else {
      navigate(`/starships?search=${values.search}`);
    }
  };

  // Rendering the Home component
  return (
    <div className="home">
      <div className="container">
        <h1>The Galaxy is in Your Hands </h1>
        <p>Here you can search for spacecraft from the Star Wars universe and get detailed information.</p>
        
        {/* Using Formik to handle form submission */}
        <Formik initialValues={{ search: "" }} onSubmit={handleFormSubmit}>
          {() => (
            <Form>
              <div className="search-bar">
                <Field
                  type="text"
                  className="search"
                  name="search"
                  placeholder="Search to get, enter for all"
                  autoComplete="off"
                />
                <button type="submit">
                  <MdSearch /> <span>Search</span>
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Home;
