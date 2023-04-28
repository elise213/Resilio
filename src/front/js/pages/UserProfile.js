import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { ResourceCard } from "../component/ResourceCard";

const userProfile = () => {
  const { store, actions } = useContext(Context);
  let avatar = store.avatarImages[parseInt(store.avatarID)];

  let newArray = [];

  store.favorites.forEach((fav, i) => {
    store.searchResults.filter((elm) => {
      if (elm.name == fav.name) {
        newArray.push(elm);
      }
    });
  });

  let newArray2 = [];

  store.favoriteOfferings.forEach((fav, i) => {
    store.offerings.filter((elm) => {
      if (elm.title == fav.title) {
        newArray2.push(elm);
      }
    });
  });
  return (
    <div className="profile-container">
      <span className={`${avatar} user-profile-avatar`}></span>
      <div className="user-profile-container">
        <div className="favorites-container">
          <p className="your-favorite-resources text-center">
            Your Favorite Resources
          </p>
          <div className="favorites-col">
            <ul className="favorites-list" style={{ listStyleType: "none" }}>
              {newArray.map((fav, i) => {
                return (
                  <li key={i}>
                    <ResourceCard
                      name={fav.name}
                      link={"/resource/" + fav.name}
                      category={fav.category}
                      image={fav.image}
                      type="resource"
                    />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="favorites-container">
          <p className="your-favorite-resources text-center">
            Your Favorite Free Stuff
          </p>
          <div className="favorites-col">
            <ul className="favorites-list" style={{ listStyleType: "none" }}>
              {newArray2.map((fav, i) => {
                return (
                  <li key={i}>
                    <ResourceCard
                      name={fav.title}
                      link={"/offering/" + fav.id}
                      category={fav.category}
                      image={fav.image}
                      type="offering"
                    />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default userProfile;
