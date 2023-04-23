import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import imgLogo from "../../images/HDLOGOTRANSP.png";
import { Context } from "../store/appContext";

export const ResourceInfo = (props) => {
  const { store, actions } = useContext(Context);
  console.log("props:", props);
  const token = sessionStorage.getItem("token");
  const [item, setItem] = useState(props.name);

  let isFavorite = false;
  {
    store.favorites.forEach((fave) => {
      if (fave.name == props.name) {
        isFavorite = true;
      }
    });

    return (
      <div className="card w-100 " style={{ border: "none" }}>
        {/* __________________________________________________________________CAROUSEL */}
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="carousel"
        >
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
            <h3 className="resource-card-title">{item}</h3>
          </div>
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
            <Link to={"/"}>
              <button
                type="button"
                className="btn btn-sm btn-secondary text-white"
                data-toggle="tooltip"
                data-placement="bottom"
                title="Back to
              Search"
              >
                <i
                  className="fa-solid fa-magnifying-glass-location me-2"
                  style={{ opacity: ".6" }}
                ></i>
                Back to Search Results
              </button>
            </Link>
          </div>
          <div>
            {token && isFavorite == false ? (
              <button
                className="maras-button"
                onClick={() => {
                  actions.addFavorite(props.name);
                  isFavorite = true;
                }}
              >
                Add To Favorites
                <i className="ps-2 far fa-heart"></i>
              </button>
            ) : token ? (
              <button
                className="maras-button"
                onClick={() => {
                  actions.removeFavorite(props.name);
                  isFavorite = false;
                }}
              >
                Remove Favorite <i class="fas fa-heart-broken"></i>
              </button>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
};
