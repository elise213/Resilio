import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { ResourceCard } from "../component/ResourceCard";
import { OfferingMap } from "../component/OfferingMap";

const Offerings = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.setOfferings();
  }, []);



  return (
    <div className="grand-container">
      {/* Link to donate something */}
      <div className="alert alert-danger ps-5 w-100" role="alert">
        Do you have something you'd like to give to someone in need? Post an
        offering <Link to="/offeringPost"> here.</Link>
      </div>
      {/* Link to register as a drop-off pick-up location */}
      <div className="alert alert-danger ps-5 w-100" role="alert">
        Register a drop-off/pick-up location{" "}
        <Link to="/registerAsDrop"> here.</Link>
      </div>
      <div className="search-results-full">
        <div className="scroll-search-results">
          <ul style={{ listStyleType: "none" }}>
            {store.offerings.map((result, index) => {
              return (
                <li key={index}>
                  <ResourceCard
                    category={result.offering_type}
                    id={result.id}
                    name={result.title}
                    image={result.image}
                    link={"/offering/" + result.id}
                    type="offering"
                  />
                </li>
              );
            })}
          </ul>
        </div>
        <div className="map-and-cities">
          <OfferingMap latitude="25.727264" longitude="-80.2627160" />
        </div>
      </div>
    </div>
  );
};

export default Offerings;
