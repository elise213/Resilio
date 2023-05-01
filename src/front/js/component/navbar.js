import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import LogRegBtn from "./LogRegBtn";
import AliveLogo from "../../images/RISILIO7.png";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const token = sessionStorage.getItem("token");
  let is_org = sessionStorage.getItem("is_org");
  let avatarId = sessionStorage.getItem("avatar");
  console.log("avatar Id", avatarId)
  let avatar = store.avatarImages[avatarId];

  useEffect(() => {
    setActiveBtn();
    window.addEventListener("popstate", setActiveBtn); // call setActiveBtn on URL change
    return () => {
      window.removeEventListener("popstate", setActiveBtn); // clean up event listener
    };
  }, []);

  function setActiveBtn() {
    const navBtns = document.querySelectorAll(".nav-btn");
    const currentUrl = window.location.pathname;

    navBtns.forEach((btn) => {
      const btnUrl = btn.getAttribute("href");
      if (btnUrl === currentUrl) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light mb-3" id="navbar">
      {/* Navbar Brand Logo - Link to Home - Always Visible*/}
      <div className="container-fluid">
        <Link to="/">
          <span className="navbar-brand">
            <img className="navbar-logo" src={AliveLogo}></img>
          </span>
        </Link>

        {/* Dynamic Navbar collapse-expand */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
          style={{ flexGrow: "0" }}
        >

          {/* Link to general resource search - Always visible */}
          <div>
            <Link to="/">
              <span className="nav-item btn nav-btn">

                RESOURCE MAP

              </span>
            </Link>

            {/* FREE STUFF - Always visible */}
            <Link to="/offerings" >
              <span className="nav-item btn nav-btn">
                FREE STUFF
              </span>
            </Link>
            <span className="nav-item">
              <a href="/contact" className="btn nav-btn">
                CONTACT
              </a>
            </span>

            {/* DONATE - Always visible */}
          </div>
          <Link to="/donate">
            <span className="nav-item btn nav-btn">

              DONATE
            </span>
          </Link>

          {/* Link to Create Resource - Only visible when logged in as an Organization */}
          {token && is_org == "true" ? (
            <span className="nav-item">
              <Link to="/createResource">
                <span className="btn nav-btn">Create Resource</span>
              </Link>
            </span>
          ) : (
            ""
          )}
          {/* Logout- Only visible when logged in, Login/ Register- Only visible when NOT logged in */}
          {token ? (
            <span className="nav-item">
              <span className="btn nav-btn" onClick={() => actions.logout()}>
                LOGOUT
              </span>
            </span>
          ) : (
            <span className="nav-item">
              <LogRegBtn />
            </span>
          )}
          {/* Link to profile page - Only visible when logged in r*/}
          {token ? (

            <span className="nav-item">
              <Link to="/userProfile">
                <span className={`${avatar} nav-profile-icon`} ></span>
              </Link>
            </span>
          ) : null}
        </div>
      </div>
    </nav >
  );
};
