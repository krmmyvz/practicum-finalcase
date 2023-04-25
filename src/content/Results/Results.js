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

  const { jsonData, loadMoreJsonData, fetchData, loading } =
    useContext(ApiContext);

  useEffect(() => {
    fetchData(search);
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
                  <div class="product-img">
                    <img src={Starship} alt="star wars" />
                  </div>
                  <div className="card" key={data.name}>
                    <h4>{data.name}</h4>
                    <p>Model: {data.model}</p>
                    <p>Manufacturer: {data.manufacturer}</p>
                    <p>Hyperdrive Rating: {data.hyperdrive_rating}</p>
                    <button
                      className="more-info"
                      onClick={() => {
                        navigate(`/starships/${data.slug}`);
                      }}
                    >
                      Daha Fazla Bilgi
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        // <div className="container2">
        //   <div className="card-grid">
        //     {jsonData.map((data) => (
        //       <div className="card" key={data.name}>
        //         <h4>{data.name}</h4>
        //         <p>Model: {data.model}</p>
        //         <p>Manufacturer: {data.manufacturer}</p>
        //         <p>Hyperdrive Rating: {data.hyperdrive_rating}</p>
        //         <button
        //           className="more-info"
        //           onClick={() => {
        //             navigate(`/starships/${data.slug}`);
        //           }}
        //         >
        //           Daha Fazla Bilgi
        //         </button>
        //       </div>
        //     ))}
        //   </div>
        // </div>
      )}
      {jsonData.length > 0 && jsonData.length % 10 === 0 && (
        <button onClick={loadMoreJsonData}>Daha Fazla Yükle</button>
      )}
    </>
  );
};

export default Results;
