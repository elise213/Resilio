import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/search.css";
import { SimpleMap } from "../component/SimpleMap";
import { ResourceCard } from "../component/ResourceCard";
import { Selection } from "../component/Selection";
import { useParams } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

const Home = () => {
  const { store, actions } = useContext(Context);
  const [searchParams, setSearchParams] = useSearchParams();
  let foodget = searchParams.get("food");
  let shelterget = searchParams.get("shelter");
  let healthget = searchParams.get("health");
  let hygieneget = searchParams.get("hygiene");
  // let filteredArray = [];
  const [filteredArray, setFilteredArray] = useState([]);
  const [food, setFood] = useState(false);
  const [shelter, setShelter] = useState(false);
  const [health, setHealth] = useState(false);
  const [hygiene, setHygiene] = useState(false);

  useEffect(() => {
    setSearchParams({
      food: food,
      shelter: shelter,
      health: health,
      hygiene: hygiene,
    });
  }, [food, health, hygiene, shelter]);

  console.log("foodget", foodget);
  console.log("{food}", { food });
  console.log("{food}.food", { food }.food);
  console.log("{food}.food type", typeof { food }.food);
  console.log("foodget type", typeof foodget);

  useEffect(() => {
    let filteredArray2 = [];
    if (food == true) {
      store.searchResults.filter((elm) => {
        if (elm.category == "food") {
          filteredArray.push(elm);
        }
      });
    }
    if (health == true) {
      store.searchResults.filter((elm) => {
        if (elm.category == "health") {
          filteredArray.push(elm);
        }
      });
    }
    if (shelter == true) {
      store.searchResults.filter((elm) => {
        if (elm.category == "shelter") {
          filteredArray.push(elm);
        }
      });
    }
    if (hygiene == true) {
      store.searchResults.filter((elm) => {
        if (elm.category == "hygiene") {
          filteredArray.push(elm);
        }
      });
    }
    console.log("filteredArray", filteredArray);
    setFilteredArray(filteredArray2);
  }, [food, shelter, health, hygiene]);

  function handleFood(event) {
    const element = event.target;
    if (element.checked) {
      setFood(true);
    }
    if (!element.checked) {
      setFood(false);
    }
  }
  function handleShelter(event) {
    const element = event.target;
    if (element.checked) {
      setShelter(true);
    }
    if (!element.checked) {
      setShelter(false);
    }
  }
  function handleHealth(event) {
    const element = event.target;
    if (element.checked) {
      setHealth(true);
    }
    if (!element.checked) {
      setHealth(false);
    }
  }
  function handleHygiene(event) {
    const element = event.target;
    if (element.checked) {
      setHygiene(true);
    }
    if (!element.checked) {
      setHygiene(false);
    }
  }

  return (
    <div>
      {foodget && <p>food is: {foodget} </p>}
      {shelterget && <p>Shelter is: {shelterget}</p>}
      {healthget && <p>health is: {healthget}</p>}
      {hygieneget && <p>hygiene is: {hygieneget}</p>}
      <div className="grand-container py-4">
        <div className="container">
          {/* <!-- What type of resource--> */}
          <div className="what-type">
            <div className="question">
              <p className="">What kind of resource do you need?</p>
            </div>
            <div className="selection">
              <div className="form-check form-check-inline ">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="food"
                  value="food"
                  name="selection"
                  onChange={handleFood}
                />
                <label className="form-check-label" htmlFor="food">
                  Food
                </label>
              </div>
              <div className="form-check form-check-inline ">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="shelter"
                  value="shelter"
                  name="selection"
                  onChange={handleShelter}
                />
                <label className="form-check-label" htmlFor="shelter">
                  Shelter
                </label>
              </div>
              <div className="form-check form-check-inline ">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="health"
                  value="health"
                  name="selection"
                  onChange={handleHealth}
                />
                <label className="form-check-label" htmlFor="health">
                  Health
                </label>
              </div>
              <div className="form-check form-check-inline ">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="hygiene"
                  value="hygiene"
                  name="selection"
                  onChange={handleHygiene}
                />
                <label className="form-check-label" htmlFor="hygiene">
                  Hygiene
                </label>
              </div>
            </div>
          </div>
          {/* <!-- When ? --> */}
          <div className="when">
            <div className="question">
              <p className="">When do you need it?</p>
            </div>
            <div className="selection">
              <div className="form-check form-check-inline ">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="monday"
                  value="monday"
                  // onChange={handleWhen}
                />
                <label className="form-check-label" htmlFor="monday">
                  Monday
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="tuesday"
                  value="tuesday"
                  // onChange={handleWhen}
                />
                <label className="form-check-label" htmlFor="tuesday">
                  Tuesday
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="wednesday"
                  value="wednesday"
                  // onChange={handleWhen}
                />
                <label className="form-check-label" htmlFor="wednesday">
                  Wednesday
                </label>
              </div>
              <div className="form-check form-check-inline ">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="thursday"
                  value="thursday"
                  // onChange={handleWhen}
                />
                <label className="form-check-label" htmlFor="thursday">
                  Thursday
                </label>
              </div>
              <div className="form-check form-check-inline ">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="friday"
                  value="friday"
                  // onChange={handleWhen}
                />
                <label className="form-check-label" htmlFor="friday">
                  Friday
                </label>
              </div>
              <div className="form-check form-check-inline ">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="saturday"
                  value="saturday"
                  // onChange={handleWhen}
                />
                <label className="form-check-label" htmlFor="saturday">
                  Saturday
                </label>
              </div>
              <div className="form-check form-check-inline ">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="sunday"
                  value="sunday"
                  // onChange={handleWhen}
                />
                <label className="form-check-label" htmlFor="sunday">
                  Sunday
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Full Search Results --> */}
        <div className="search-results-full row">
          {/* Search Result Cards */}

          <div className="scroll-search-results col-3">
            {filteredArray[0] ? (
              <ul style={{ listStyleType: "none" }}>
                {filteredArray.map((result, i) => {
                  return (
                    <li key={i}>
                      <ResourceCard
                        category={result.category}
                        key={result.id}
                        name={result.name}
                        logo={result.logo}
                        image={result.image}
                        description={result.description}
                        id={result.id}
                      />
                    </li>
                  );
                })}
              </ul>
            ) : (
              <ul style={{ listStyleType: "none" }}>
                {store.searchResults.map((result, i) => {
                  return (
                    <li key={i}>
                      <ResourceCard
                        category={result.category}
                        key={result.id}
                        name={result.name}
                        logo={result.logo}
                        image={result.image}
                        description={result.description}
                        id={result.id}
                      />
                    </li>
                  );
                })}
              </ul>
            )}
          </div>

          {/* Search Result Map */}
          <div className="col-9">
            <SimpleMap />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
