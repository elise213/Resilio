import React, { useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext.js";
import { OfferingInfo } from "../component/OfferingInfo.js";
const Offering = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  // let offering = store.offerings[params.id - 1];

  let offeringData = store.offerings.filter((elm) => {
    if (elm.id == params.id) {
      console.log("elm", elm)
      return elm;
    }
  });

  let offering = offeringData[0]

  console.log("OFFERING DATA", offering)

  return (
    <div className="offering-details-page">
      <OfferingInfo
        id={offering.id}
        title={offering.title}
        description={offering.description}
        category={offering.category}
        image={offering.image}
        image2={offering.image2}
      />
    </div>
  );
};
export default Offering;
