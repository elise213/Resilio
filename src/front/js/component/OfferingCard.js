import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const OfferingCard = (props) => {
  const { store, actions } = useContext(Context);
  const token = sessionStorage.getItem("token");
  const [isFavorite, setIsFavorite] = useState(false);
  const [item, setItem] = useState(props.title);

  useEffect(() => {
    store.favoriteOfferings.forEach((fave) => {
      if (fave.title == item) {
        setIsFavorite(true);
      }
      console.log("is favorite", isFavorite);
      console.log(fave.title, item);
    });
  }, [item]);

  return (
    <div className="resource-card mx-auto mb-3 row">
      <Link to={"/offering/" + props.id} className="text-decoration-none">
        <div className="card-header d-flex">
          <div className="col-10 card-title-div">
            <h4 className="resource-card-title-name col-9">{props.title}</h4>
          </div>
          <div className="col-2 card-icon"></div>
        </div>
        <div className="row card-body">
          <img className="card-img" src={props.image} alt="profile picture" />
        </div>
      </Link>
      <div className="d-flex favorite-button-container">
        {token && isFavorite == false ? (
          <button
            className="maras-button"
            onClick={() => {
              actions.addFavoriteOffering(props.title);
              setIsFavorite(true);
            }}
          >
            Add To My Favorites
          </button>
        ) : token ? (
          <button
            className="maras-button"
            onClick={() => {
              actions.removeFavoriteOffering(props.title);
              setIsFavorite(false);
            }}
          >
            Remove Favorite <i class="fas fa-heart-broken"></i>
          </button>
        ) : null}
      </div>
    </div>
  );
};
