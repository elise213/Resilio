import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { ResourceCard } from "../component/ResourceCard";

const UserProfile = () => {
  const { store, actions } = useContext(Context);
  const avatarId = sessionStorage.getItem("avatar");
  const avatar = store.avatarImages[avatarId];

  const [favoriteResources, setFavoriteResources] = useState([]);
  const [favoriteOfferings, setFavoriteOfferings] = useState([]);

  useEffect(() => {
    actions.setOfferings();
  }, []);

  useEffect(() => {
  }, [favoriteOfferings, favoriteResources])

  return (
    <div className="profile-container">
      {/* <span className={`${avatar} user-profile-avatar`}></span> */}
      <div className="user-profile-container">
        <div className="favorites-container">
          <p className="your-favorite-resources text-center">
            Your Favorite Resources
          </p>
          <div className="favorites-col">
            <ul className="favorites-list" style={{ listStyleType: "none" }}>
              {/* {console.log("favorites", store.favorites)} */}
              {store.favorites.map((result, i) => (
                <li key={i}>
                  <ResourceCard
                    category={result.category}
                    key={result.id}
                    name={result.name}
                    logo={result.logo}
                    image={result.image}
                    description={result.description}
                    id={result.id}
                    link={"/resource/" + result.resource_id}
                    type="resource"
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
              {/* {console.log("favoriteOfferings", store.favoriteOfferings)} */}
              {store.favoriteOfferings.map((result, i) => (
                <li key={i}>
                  <ResourceCard
                    category={result.category}
                    name={result.title}
                    image={result.image}
                    link={"/offering/" + result.offering_id}
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
