import React, { useContext, useEffect } from "react";
import { ApiContext } from "../../context/ApiContext";
import "./Details.css";
import Loading from "../Loading/Loading";
import { useParams, useNavigate  } from "react-router-dom";
import Starship from "../../assets/galactic.png"
import NotFound from "../NotFound/NotFound";

const Details = () => {
  const { slug } = useParams();
  let navigate = useNavigate();
  const { jsonData, fetchData, loading } = useContext(ApiContext);
  const converted = slug
    .replace(/^[a-z]|(-[a-z])/g, (match) => match.replace("-", " "))
    .split("-")
    .join(" ");

  useEffect(() => {
    if (jsonData.length === 0) {
      fetchData(converted);
    }
    // eslint-disable-next-line
  }, [converted]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="details-container">
          {jsonData && jsonData.length > 0 ? (
            <>
            <div className="wrapper">
            <div className="content">
              <div className="bg-shape">
                <div className="title">{jsonData[0].name}</div>
              </div>
            
              <div className="card" key={jsonData[0].name}>
              <img src={Starship} alt="star wars" />
              <p>Model: {jsonData[0].model}</p>
              <p>Manufacturer: {jsonData[0].manufacturer}</p>
              <p>Hyperdrive Rating: {jsonData[0].hyperdrive_rating}</p>
              <p>Passengers: {jsonData[0].passengers}</p>
              <p>Maximum Atmosphering Speed: {jsonData[0].max_atmosphering_speed}</p>
              <p>Cargo Capacity: {jsonData[0].cargo_capacity}</p>
              <p>Crew: {jsonData[0].crew}</p>       
              </div>
              <button className="load-more" onClick={() => navigate(-1)}>Go Back</button>
            </div>
            
         </div>
         
            </>
          ) : (
            <NotFound/>
          )}
        </div>
      )}
    </>
  );
};

export default Details;
