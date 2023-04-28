import React, { useContext, useEffect } from "react";
import { ApiContext } from "../../context/ApiContext";
import "./Results.css";
import Loading from "../Loading/Loading";
import { useNavigate } from "react-router-dom";
import Starship from "../../assets/galactic.png";

const Results = () => {
  const searchParams = new URLSearchParams(window.location.search);
  const search = searchParams.get("search") || "";
  const navigate = useNavigate();

  const { jsonData, loadMoreJsonData, fetchData, loading} =
    useContext(ApiContext);

  useEffect(() => {
    fetchData(search);
    // eslint-disable-next-line
  }, []);
  return (
    
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="container2">
          <div className="card-grid">
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
