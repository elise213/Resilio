import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { ResourceCard } from "../component/ResourceCard";

const UserProfile = () => {
  const { store } = useContext(Context);
  const avatarId = sessionStorage.getItem("avatar");
  const avatar = store.avatarImages[avatarId];

  const [favoriteResources, setFavoriteResources] = useState([]);
  const [favoriteOfferings, setFavoriteOfferings] = useState([]);

  console.log("HI!", favoriteResources, favoriteOfferings)

  useEffect(() => {
    let favoriteResources2 = store.searchResults.filter((elm) =>
      store.favorites.some((fav) => fav.name === elm.name)
    );
    let favoriteOfferings2 = store.offerings.filter((elm) =>
      store.favoriteOfferings.some((fav) => fav.title === elm.title)
    )
    setFavoriteResources(favoriteResources2);
    setFavoriteOfferings(favoriteOfferings2);
    console.log("store", store.favorites);

  }, [store.favorites, store.favoriteOfferings])


  return (
    <div className="profile-container">
      <div>{contextValue}</div>
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
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="favorites-container">
          <p className="your-favorite-resources text-center">
            Your Favorite Free Stuff
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
