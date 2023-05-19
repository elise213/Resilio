import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import imgLogo from "../../images/HDLOGOTRANSP.png";
import { Context } from "../store/appContext";
import AddFave from "./AddFave";
import { SimpleMap2 } from "./SimpleMap2";

export const ResourceInfo = (props) => {
  const { store, actions } = useContext(Context);

  console.log("props", props)


  function filterNonNullValues(schedule) {
    const result = {};
    Object.keys(schedule).forEach(key => {
      if (schedule[key] !== null && key !== "id" && key !== "resource_id") {
        result[key] = schedule[key];
      }
    });
    return result;
  }

  const schedule2 = filterNonNullValues(props.schedule);
  console.log("schedule 2", schedule2);

  const scheduleArray = Object.entries(schedule2).map(([day, time]) => ({ day, ...time }));

  return (
    <div className="card offering-card ">
      {/* <Link to={"/"}>
        <p className="forgot-password" style={{ "color": "grey" }}>
          <i className="fa-solid fa-arrow-left-long me-2"></i>
          Back to Search Results
        </p>
      </Link> */}

      {/* <img className="resource-image" src={props.image}></img> */}
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-interval="false">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item carousel-frame active">
            <img
              src={props.image}
              className="d-block w-100 carousel-image"
              onError={(e) => {
                e.target.src = 'https://starwars-visualguide.com/assets/img/placeholder.jpg'
              }}
            // onError={({ currentTarget }) => {
            //   currentTarget.onerror = null;
            //   currentTarget.src = { imgLogo };
            // }}
            />
          </div>
          {props.image2 != "" && (
            <div className="carousel-item carousel-frame">
              <img
                src={props.image2}
                className="d-block w-100 carousel-image"
                onError={(e) => {
                  e.target.src = 'https://starwars-visualguide.com/assets/img/placeholder.jpg'
                }}
              />
            </div>
          )}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* _____________________________________________________________________CARD */}
      <div className="rez-info">
        <div className="resource-name-description">
          <h1 className="resource-title">{props.name}</h1>
        </div>
        <p className="resource-card-text description">{props.description}</p>
        <div className="d-flex w-100 deets">
          <div className="details-column">
            <div>
              <i className="fa-solid fa-map-location-dot me-2"></i>
              <span className="resource-card-text">{props.address}</span>
            </div>
            <div>
              <i className="fa-solid fa-phone me-2 mt-4"></i>
              <span className="resource-card-text">{props.phone}</span>
            </div>
            <div>
              <i className="fa-solid fa-calendar-days me-2 mt-4"></i>
              <span className="resource-card-text">Schedule:</span>
              {Object.entries(schedule2).map(([key, value]) => (
                <div key={key}>
                  <span className="resource-card-text">{key}: {value}</span>
                </div>
              ))}
            </div>
            <div>
              <i className="fa-solid fa-wifi me-2 mt-4"></i>
              <a href={"https://www." + props.website} className="resource-card-text">{props.website}</a>
            </div>

            <div className="mt-3">
              <AddFave name={props.name} type="resource" />
            </div>
          </div>

          <div className="details-column">
            <SimpleMap2 latitude={props.latitude} longitude={props.longitude} />
          </div>
        </div>
      </div>
    </div>
  );
}
