import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { ResourceCard } from "../component/ResourceCard";

const Offerings = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.setOfferings();
  }, []);

  console.log("offerings", store.offerings)
  return (
    <div className="row">
      {/* Link to donate something */}
      <div className="alert alert-danger ps-5" role="alert">
        Do you have something you'd like to give to someone in need? Post an
        offering <Link to="/offeringPost"> here.</Link>
      </div>

      {/* Link to register as a drop-off pick-up location */}
      <div className="alert alert-danger ps-5" role="alert">
        Register a drop-off/pick-up location{" "}
        <Link to="/registerAsDrop"> here.</Link>
      </div>

      <div className="col-6">
        <ul style={{ listStyleType: "none" }}>
          {store.offerings.map((result, index) => {
            return (
              <li key={index}>
                <ResourceCard
                  category={result.offering_type}
                  id={index}
                  name={result.title}
                  image={result.image}
                  link={"/offering/" + result.id}
                />
              </li>
            );
          })}
        </ul>
      </div>
      <div className="col-6 offering-map"></div>
    </div>
  );
};

export default Offerings;
