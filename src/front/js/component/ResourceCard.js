import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import AliveLogo from "../../images/HDLOGOTRANSP2.png";
import AddFave from "./AddFave";

export const ResourceCard = (props) => {
  const { store, actions } = useContext(Context);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    if (props.type === "offering") {
      setIsFavorite(store.favoriteOfferings.some(fave => fave.title === props.name));
    } else {
      setIsFavorite(store.favorites.some(fave => fave.name === props.name));
    }
  }, [props.name, props.type]);

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
    <div className="resource-card mx-auto row">
      <Link to={props.link} className="text-decoration-none">
        <div className="card-header d-flex justify-content-between">
          <div className="card-title-div">
            <h4 className="resource-card-title-name">{props.name}</h4>
          </div>
          <div className="card-icon">
            <i className={icon} />
          </div>
        </div>
        <div className="card-body">
          <img className="card-img" src={image} alt="profile picture" />
        </div>
      </Link>
      <div className="d-flex favorite-button-container">
        <AddFave
          name={props.name}
          type={props.type}
        />
      </div>
    </div>
  );
}


