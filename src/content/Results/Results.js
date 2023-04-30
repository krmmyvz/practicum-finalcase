import React, { useContext, useEffect } from "react";
import { ApiContext } from "../../context/ApiContext";
import "./Results.css";
import Loading from "../Loading/Loading";
import { useNavigate } from "react-router-dom";
import Starship from "../../assets/galactic.png";

const Results = () => {
  
  // Extract search query parameter from the URL
  const searchParams = new URLSearchParams(window.location.search);
  const search = searchParams.get("search") || "";

  // useNavigate hook to navigate to the starship details page
  const navigate = useNavigate();

  // Retrieve jsonData, loadMoreJsonData, fetchData and loading from the ApiContext
  const { jsonData, loadMoreJsonData, fetchData, loading} =
    useContext(ApiContext);

  // Call fetchData to fetch starship data on initial load and only on initial load
  useEffect(() => {
    fetchData(search);
    // eslint-disable-next-line
  }, []);
  return (
    <>
      {/* Display the Loading component if the data is being loaded */}
      {loading ? (
        <Loading />
      ) : (
        
        // Otherwise, display the starship data in cards
        <div className="container2">
          <div className="card-grid">
          {jsonData.length === 0 && (
          <div className="bg-shape"> No results found matching with "{search}"</div>
        )}
            {jsonData.map((data) => (
              <div className="wrapper">
                <div className="content">
                  <div className="bg-shape">
                    <div className="title">{data.name}</div>
                  </div>

                  <div className="card" key={data.name}>
                    <img src={Starship} alt="star wars" />
                    <p>
                      <span>Model: </span>
                      {data.model}
                    </p>
                    <p>
                      <span>Manufacturer: </span>
                      {data.manufacturer}
                    </p>
                    <p>
                      <span>Hyperdrive Rating: </span>
                      {data.hyperdrive_rating}
                    </p>
                    <div className="button-wrapper">
                      {/*allows the user to navigate to a specific starship's details page when clicked. */}
                      <button
                        className="more-info"
                        onClick={() => {
                          navigate(`/starships/${data.slug}`);
                        }}
                      >
                        Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Display the load more button if there is more data available to load */}
          {jsonData.length > 0 && jsonData.length % 10 === 0 && (
            <button className="load-more" onClick={loadMoreJsonData}>
              Load More
            </button>
          )}
        </div>
      )}
    </>
  );
};


export default Results;
