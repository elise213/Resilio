import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import AliveLogo from "../../images/HDLOGOTRANSP2.png";

export const ResourceCard = (props) => {
  const { store, actions } = useContext(Context);
  // console.log("props:", props);
  const token = sessionStorage.getItem("token");
  // const [isFavorite, setIsFavorite] = useState(false);
  const [item, setItem] = useState(props.name);

  let isFavorite = false;
  {
    store.favorites.forEach((fave) => {
      if (fave.name == props.name) {
        isFavorite = true;
      }
    });

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

    let image = "";
    if (props.image == "") {
      image = { AliveLogo };
    } else {
      image = props.image;
    }

    return (
      <div className="resource-card mx-auto mb-3 row">
        <Link to={"/resource/" + props.name} className="text-decoration-none">
          <div className="card-header d-flex">
            <div className="col-10 card-title-div">
              <h4 className="resource-card-title-name col-9">{props.name}</h4>
            </div>
            <div className="col-2 card-icon">
              <i className={icon} />
            </div>
          </div>
          <div className="row card-body">
            <img className="card-img" src={image} alt="profile picture" />
          </div>
        </Link>
        <div className="d-flex favorite-button-container">
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
              Remove From Favorites
            </button>
          ) : null}
        </div>
      </div>
    );
  }
};
