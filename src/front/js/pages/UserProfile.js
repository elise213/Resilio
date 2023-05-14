import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { ResourceCard } from "../component/ResourceCard";

const UserProfile = () => {
  const { store, actions } = useContext(Context);
  const avatarId = sessionStorage.getItem("avatar");
  const avatar = store.avatarImages[avatarId];

  const [favoriteResources, setFavoriteResources] = useState([]);
  const [favoriteOfferings, setFavoriteOfferings] = useState([]);

  // console.log("HI!", favoriteResources, favoriteOfferings)

  useEffect(() => {
    const currentBackUrl = store.current_back_url;
    const token = sessionStorage.getItem("token");
    if (token) {
      const requestOptions = {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
        method: "GET",
      };
      fetch(currentBackUrl + "/api/getFavoriteOfferings", requestOptions)
        .then((response) => response.json())
        .then((data) => {
          console.log("from UP", data.favoriteOfferings);
          setFavoriteOfferings(data.favoriteOfferings);
          actions.popFavorites([], data.favoriteOfferings);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });

      fetch(currentBackUrl + "/api/getFavorites", requestOptions)
        .then((response) => response.json())
        .then((data) => {
          console.log("from UP", data.favorites);
          setFavoriteResources(data.favorites);
          actions.popFavorites(data.favorites);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, []);



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
              {favoriteResources.map((fav, i) => (
                <li key={i}>
                  <ResourceCard
                    name={fav.name}
                    link={`/resource/${fav.name}`}
                    category={fav.category}
                    image={fav.image}
                    type="resource"
                    description={fav.description}
                    id={fav.id}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="favorites-container">
          <p className="your-favorite-resources text-center">
            Your Favorite Free Things
          </p>
          <div className="favorites-col">
            <ul className="favorites-list" style={{ listStyleType: "none" }}>
              {favoriteOfferings.map((fav, i) => (
                <li key={i}>
                  <ResourceCard
                    name={fav.title}
                    link={`/offering/${fav.id}`}
                    category={fav.category}
                    image={fav.image}
                    type="offering"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
