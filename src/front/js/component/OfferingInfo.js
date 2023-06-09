import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import imgLogo from "../../images/HDLOGOTRANSP.png";
import { Context } from "../store/appContext";
import AddFave from "./AddFave";

export const OfferingInfo = (props) => {
  const { store, actions } = useContext(Context);

  return (
    <div className="card offering-card" style={{ border: "none" }}>
      {/* __________________________________________________________________CAROUSEL */}
      {/* <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      > */}
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
          <div className="carousel-item active">
            <img
              src={props.image == "" ? imgLogo : props.image}
              className="d-block w-100 carousel-image"
              onError={({ currentTarget }) => {
                currentTarget.onerror = null;
                currentTarget.src = { imgLogo };
              }}
            />
          </div>
          {props.image2 != "" && (
            <div className="carousel-item">
              <img
                src={props.image2}
                className="d-block w-100 carousel-image"
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
      <div className="resource-card-body text-secondary ">
        <div className="resource-name-description">
          <h3 className="resource-card-title">{props.title}</h3>
        </div>
        <div className="d-flex justify-content-center">
          <AddFave name={props.title} type="offering" />
        </div>
        <p className="resource-card-text">{props.description}</p>
        <div className="float-end">
          <Link to={"/offerings"}>
            <button
              type="button"
              className="btn map-button my-5 back-to-results"
              data-toggle="tooltip"
              data-placement="bottom"
              title="Back to
              Search"
            >
              <i
                className="fa-solid fa-magnifying-glass-location me-2"
                style={{ opacity: ".6" }}
              ></i>
              Back to Free Stuff
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
};
