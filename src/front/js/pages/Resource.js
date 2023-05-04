import React, { useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext.js";
// import Comments from "../component/comments/Comments";
import { ResourceInfo } from "../component/ResourceInfo";
import SimpleCommentForm from "../component/SimpleCommentForm.js";
import SimpleCommentList from "../component/SimpleCommentList.js";
const resource = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  let resourceName = params.name;
  let resourceData = store.searchResults.filter((elm) => {
    if (elm.name == resourceName) {
      return elm;
    }
  });

  return (
    <div className="offering-details-page">
      {resourceData.map((items) => (
        <div className="row mt-5" key={items.id}>
          <ResourceInfo
            id={items.id}
            name={items.name}
            description={items.description}
            address={items.address}
            phone={items.phone}
            category={items.category}
            website={items.website}
            picture={items.picture}
            image={items.image}
            image2={items.image2}
          />
        </div>
      ))}

      <div className="row mt-5">
        {/* <SimpleCommentList id={resourceData[0].id} /> */}
      </div>
      <div className="row">
        {/* <SimpleCommentForm id={resourceData[0].id} /> */}
      </div>
    </div>
  );
};
export default resource;
