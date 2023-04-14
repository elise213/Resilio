import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/search.css";
import { SimpleMap } from "../component/SimpleMap";
import { ResourceCard } from "../component/ResourceCard";
import { Selection } from "../component/Selection";
import { useSearchParams } from "react-router-dom";
import { element } from "prop-types";

const Home = () => {
  const { store, actions } = useContext(Context);
  const [searchParams, setSearchParams] = useSearchParams();

  const [food, setFood] = useState(false);
  const [shelter, setShelter] = useState(false);
  const [health, setHealth] = useState(false);
  const [hygiene, setHygiene] = useState(false);
  const [filteredArray, setFilteredArray] = useState([]);

  const [monday, setMonday] = useState(false);
  const [tuesday, setTuesday] = useState(false);
  const [wednesday, setWednesday] = useState(false);
  const [thursday, setThursday] = useState(false);
  const [friday, setFriday] = useState(false);
  const [saturday, setSaturday] = useState(false);
  const [sunday, setSunday] = useState(false);

  // let mondayget = searchParams.get("monday");
  // let foodget = searchParams.get("food");
  // let shelterget = searchParams.get("shelter");
  // let healthget = searchParams.get("health");
  // let hygieneget = searchParams.get("hygiene");

  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setSearchParams({
      food: food,
      shelter: shelter,
      health: health,
      hygiene: hygiene,
      monday: monday,
      tuesday: tuesday,
      wednesday: wednesday,
      thursday: thursday,
      friday: friday,
      saturday: saturday,
      sunday: sunday,
    });
  }, [
    monday,
    tuesday,
    wednesday,
    thursday,
    friday,
    saturday,
    sunday,
    food,
    health,
    hygiene,
    shelter,
  ]);

  console.log("all results", store.searchResults);

  useEffect(() => {
    let filteredArray2 = [];
    if (food == true) {
      store.searchResults.filter((elm) => {
        if (elm.category == "food") {
          filteredArray2.push(elm);
        }
      });
    }
    if (health == true) {
      store.searchResults.filter((elm) => {
        if (elm.category == "health") {
          filteredArray2.push(elm);
        }
      });
    }
    if (shelter == true) {
      store.searchResults.filter((elm) => {
        if (elm.category == "shelter") {
          filteredArray2.push(elm);
        }
      });
    }
    if (hygiene == true) {
      store.searchResults.filter((elm) => {
        if (elm.category == "hygiene") {
          filteredArray2.push(elm);
        }
      });
    }
    if (monday == true) {
      store.searchResults.filter((elm) => {
        if (elm.schedule) {
          console.log("114", elm);
          if (elm.schedule.mondayStart != "") {
            console.log("116", elm);
            filteredArray2.push(elm);
          }
        }
      });
    }
    if (tuesday == true) {
      store.searchResults.filter((elm) => {
        if (elm.schedule) {
          if (elm.schedule.tuesdayStart != "") {
            filteredArray2.push(elm);
          }
        }
      });
    }
    if (wednesday == true) {
      store.searchResults.filter((elm) => {
        if (elm.schedule) {
          if (elm.schedule.wednesdayStart != "") {
            filteredArray2.push(elm);
          }
        }
      });
    }
    if (thursday == true) {
      store.searchResults.filter((elm) => {
        if (elm.schedule) {
          if (elm.schedule.thursdayStart != "") {
            filteredArray2.push(elm);
          }
        }
      });
    }
    if (friday == true) {
      store.searchResults.filter((elm) => {
        if (elm.schedule) {
          if (elm.schedule.fridayStart != "") {
            filteredArray2.push(elm);
          }
        }
      });
    }
    if (saturday == true) {
      store.searchResults.filter((elm) => {
        if (elm.schedule) {
          if (elm.schedule.saturdayStart != "") {
            filteredArray2.push(elm);
          }
        }
      });
    }
    if (sunday == true) {
      store.searchResults.filter((elm) => {
        if (elm.schedule) {
          if (elm.schedule.sundayStart != "") {
            filteredArray2.push(elm);
          }
        }
      });
    }
    let checkboxes = document.getElementsByTagName("input");
    for (var i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].type == "checkbox" && checkboxes[i].checked) {
        setChecked(true);
        break;
      }
    }
    console.log(filteredArray2, filteredArray);
    setFilteredArray(filteredArray2);
    console.log(filteredArray2, filteredArray);
  }, [
    food,
    shelter,
    health,
    hygiene,
    monday,
    tuesday,
    wednesday,
    thursday,
    friday,
    saturday,
    sunday,
    checked,
  ]);

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
  function handleMonday(event) {
    const element = event.target;
    if (element.checked) {
      setMonday(true);
    }
    if (!element.checked) {
      setMonday(false);
    }
  }
  function handleTuesday(event) {
    const element = event.target;
    if (element.checked) {
      setTuesday(true);
    }
    if (!element.checked) {
      setTuesday(false);
    }
  }
  function handleWednesday(event) {
    const element = event.target;
    if (element.checked) {
      setWednesday(true);
    }
    if (!element.checked) {
      setWednesday(false);
    }
  }
  function handleThursday(event) {
    const element = event.target;
    if (element.checked) {
      setThursday(true);
    }
    if (!element.checked) {
      setThursday(false);
    }
  }
  function handleFriday(event) {
    const element = event.target;
    if (element.checked) {
      setFriday(true);
    }
    if (!element.checked) {
      setFriday(false);
    }
  }
  function handleSaturday(event) {
    const element = event.target;
    if (element.checked) {
      setSaturday(true);
    }
    if (!element.checked) {
      setSaturday(false);
    }
  }
  function handleSunday(event) {
    const element = event.target;
    if (element.checked) {
      setSunday(true);
    }
    if (!element.checked) {
      setSunday(false);
    }
  }

  return (
    <div>
      {/* {foodget && <p>food is: {foodget} </p>}
      {shelterget && <p>Shelter is: {shelterget}</p>}
      {healthget && <p>health is: {healthget}</p>}
      {hygieneget && <p>hygiene is: {hygieneget}</p>}
      {mondayget && <p>monday is: {mondayget}</p>} */}

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
                  onChange={handleMonday}
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
                  onChange={handleTuesday}
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
                  onChange={handleWednesday}
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
                  onChange={handleThursday}
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
                  onChange={handleFriday}
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
                  onChange={handleSaturday}
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
                  onChange={handleSunday}
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
            {filteredArray[0] || checked == true ? (
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
                  console.log("schedule", result.schedule);
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
