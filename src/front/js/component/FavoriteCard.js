import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import imgLogo from "../../images/HDLOGOTRANSP.png";
import { Context } from "../store/appContext";

export const FavoriteCard = (props) => {
  const { store, actions } = useContext(Context);
  // console.log("props:", props);
  const token = sessionStorage.getItem("token");
  const [item, setItem] = useState(props.title);

  let isFavorite = false;
  if (props.type == "offering") {
    store.favoriteOfferings.forEach((fave) => {
      if (fave.title == item) {
        isFavorite = true;
      }
    });
  } else {
    store.favorites.forEach((fave) => {
      if (fave.name == item) {
        isFavorite = true;
      }
    });
  }

  let icon = "";
  if (props.category == "health") {
    icon = "fa-solid fa-stethoscope";
  } else if (props.category == "food") {
    icon = "fa-solid fa-bowl-rice";
  } else if (props.category == "hygiene") {
    icon = "fa-solid fa-soap";
  } else {
    icon = "fa-solid fa-person-shelter";
  }

  return (
    <div className="resource-card mx-auto mb-3 row">
      <Link to={props.link} className="text-decoration-none">
        <div className="card-header d-flex">
          <div className="col-10 card-title-div">
            <h4 className="resource-card-title-name col-9">{props.title}</h4>
          </div>
          <div className="col-2 card-icon">
            <i className={icon} />
          </div>
        </div>
        <div className="row card-body">
          <img className="card-img" src={props.image} alt="profile picture" />
        </div>
      </Link>
      <div className="d-flex favorite-button-container">
        {props.type == "resource" ? (
          <button
            type="button"
            className="btn-sm maras-button"
            onClick={() => {
              actions.removeFavorite(item);
              isFavorite = false;
            }}
          >
            Remove Favorite <i class="fas fa-heart-broken"></i>
          </button>
        ) : (
          <button
            type="button"
            className="btn-sm maras-button"
            onClick={() => {
              actions.removeFavoriteOffering(item);
              isFavorite = false;
            }}
          >
            Remove Favorite <i class="fas fa-heart-broken"></i>
          </button>
        )}
      </div>
    </div>
  );
};
