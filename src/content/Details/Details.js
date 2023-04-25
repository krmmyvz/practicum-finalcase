import React, { useContext, useEffect, useState } from "react";
import { ApiContext } from "../../context/ApiContext";
import "./Details.css";
import Loading from "../Loading/Loading";
import { useParams } from "react-router-dom";

const Details = () => {
  const { slug } = useParams();
  const { jsonData, fetchData, loading } = useContext(ApiContext);
  const converted = slug
    .replace(/^[a-z]|(-[a-z])/g, (match) => match.replace("-", " "))
    .split("-")
    .join(" ");

  useEffect(() => {
    if (jsonData.length === 0) {
      fetchData(converted);
    }
  }, [converted]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="details-container">
          {jsonData && jsonData.length > 0 ? (
            <>
              <h2>{jsonData[0].name}</h2>
              <p>Model: {jsonData[0].model}</p>
              <p>Manufacturer: {jsonData[0].manufacturer}</p>
              <p>Hyperdrive Rating: {jsonData[0].hyperdrive_rating}</p>
            </>
          ) : (
            <p>No data available.</p>
          )}
        </div>
      )}
    </>
  );
};

export default Details;
