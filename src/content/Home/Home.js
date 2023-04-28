import React, { useState } from "react";
import { MdSearch } from "react-icons/md";
import { Formik, Form, Field } from "formik";
import { useNavigate } from "react-router-dom";

import "./Home.css";

function Home() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleFormSubmit = (values) => {
    const trimmedSearch = values.search.trim();
    setSearch(trimmedSearch);
    if (trimmedSearch === "") {
      navigate(`/starships`);
    } else {
      navigate(`/starships?search=${values.search}`);
    }
  };

  return (
    <div className="home">
      <div className="container">
        <h1>The Galaxy is in Your Hands </h1>
        <p>Here you can search for spacecraft from the Star Wars universe and get detailed information.</p>
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
