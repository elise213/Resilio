import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import imgLogo from "../../images/HDLOGOTRANSP.png";
import { Context } from "../store/appContext";
import AddFave from "./AddFave";

export const ResourceInfo = (props) => {
  const { store, actions } = useContext(Context);

  return (
    <div className="card offering-card ">
      <Link to={"/"}>
        <p className="forgot-password" style={{ "color": "grey" }}>

          <i className="fa-solid fa-arrow-left-long me-2"></i>
          Back to Search Results
        </p>
      </Link>
      <div className="resource-name-description">
        <h1 className="resource-card-title">{props.name}</h1>
      </div>
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
          <div className="carousel-item carousel-frame active">
            <img
              src={props.image == "" ? imgLogo : props.image}
              className="d-block carousel-image"
              onError={({ currentTarget }) => {
                currentTarget.onerror = null;
                currentTarget.src = { imgLogo };
              }}
            />
          </div>
          {props.image2 != "" && (
            <div className="carousel-item carousel-frame">
              <img
                src={props.image2}
                className="d-block carousel-image"
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
        <p className="resource-card-text">{props.description}</p>
        <i className="fa-solid fa-map-location-dot me-2"></i>
        <span className="resource-card-text">{props.address}</span>
        <p className="resource-card-text">
          <i className="fa-solid fa-phone me-2 mt-4"></i>
          {" " + props.phone}
        </p>
        <div className="resource-card-text mt-1">
          <i className="fa-solid fa-calendar-days me-3"></i>
        </div>
        <div className="float-end">

        </div>
        <div className="mt-3">
          <AddFave name={props.name} type="resource" />
        </div>
      </div>
    </div>
  );
}
