import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import GoogleMapReact from "google-map-react";
import { Link, withRouter, useNavigate } from "react-router-dom";


export const SimpleMap = ({ zipCode, setPlace, place }) => {
  const { store, actions } = useContext(Context);
  const [city, setCity] = useState({
    center: { lat: 34.0522, lng: -118.2437 },
    bounds: {
      ne: { lat: (34.0522 + 0.18866583325124964), lng: (-118.2437 + 0.44322967529295454) },
      sw: { lat: (34.0522 - 0.18908662930897435), lng: (-118.2437 - 0.44322967529298296) }
    }
  });

  useEffect(() => {
    setPlace(city);
  }, [city])

  // function zipcode(zip) {
  //   fetch(`https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyDOhqYOYIXvrk8lt2HQQLI8cS1O8FnZt9I&components=postal_code:${zip}`)
  //     .then(response => response.json())
  //     .then(data => {
  //       if (data.results.length > 0) {
  //         const result = data.results[0];
  //         const lat = result.geometry.location.lat;
  //         const lng = result.geometry.location.lng;
  //         setCity({ center: { lat, lng }, bounds: null });
  //       }
  //     });
  // }

  function geoFindMe() {
    function success(position) {
      let latitude = position.coords.latitude;
      let longitude = position.coords.longitude;
      // setCity({ center: { lat: latitude, lng: longitude }, bounds: null }); // reset bounds when location changes
      setBounds(latitude, longitude);
    }
    function error() {
      alert("Unable to retrieve your location");
    }
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser");
    } else {
      console.log("Locating…");
      navigator.geolocation.getCurrentPosition(success, error);
    }
  }

  const Marker = ({ lat, lng, color, text, category, id }) => {
    const [isHovered, setIsHovered] = useState(false);
    const navigate = useNavigate(); // Get the history object from the h
    const handleMouseEnter = () => {
      setIsHovered(true);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    const handleMarkerClick = () => {
      navigate(`/resource/${encodeURIComponent(id)}`);
    };
    return (
      <div
        className="marker"
        style={{ color: color, cursor: "pointer" }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleMarkerClick}
      >
        <div className="marker-icon">
          <i className="fa-solid fa-map-pin"></i>

          {isHovered && text && <span>{text}</span>}
        </div>
      </div>
    );

  };

  const handleBoundsChange = (data) => {
    console.log("DATA", data)
    const center = city.center; // get the current center of the map
    const ne = data.bounds.ne;
    const sw = data.bounds.sw;
    const bounds = {
      ne: { lat: Math.max(ne.lat, center.lat), lng: Math.max(ne.lng, center.lng) },
      sw: { lat: Math.min(sw.lat, center.lat), lng: Math.min(sw.lng, center.lng) },
    };
    setCity((prev) => ({
      ...prev,
      bounds: bounds, // update the bounds state based on the center
    }));
    // actions.setSearchResults();
  };

  const setBounds = (lati, longi) => {
    let neLat = (lati + 0.18866583325124964);
    let swLat = (lati - 0.18908662930897435);
    let neLng = (longi + 0.44322967529295454);
    let swLng = (longi - 0.44322967529298296);

    setCity({
      center: { lat: lati, lng: longi },
      bounds: {
        ne: { lat: neLat, lng: neLng },
        sw: { lat: swLat, lng: swLng }
      }
    }
    )
    actions.setSearchResults();
  }


  console.log("CITY BOUNDS", city.bounds)

  return (
    <div className="map-info">
      {/* <!-- Which City? --> */}
      <div className="map-city-buttons">
        <button
          className="map-button" style={{ "borderColor": "red" }}
          onClick={() => {
            geoFindMe()
            console.log("GEO CITY CENTER", city.center)
          }
          }
        >
          Use my Location
        </button>

        <button
          className="map-button"
          onClick={() => {
            setBounds(61.2176, -149.8997);
          }}
        >
          Anchorage
        </button>

        <button
          className="map-button"
          onClick={() => {
            setBounds(44.0521, -123.0868);
          }}
        >
          Eugene
        </button>

        <button
          className="map-button"
          onClick={() => {
            setBounds(36.1716, -115.1391);
          }}
        >
          Las Vegas
        </button>

        <button
          className="map-button"
          onClick={() => {
            setBounds(34.0522, -118.2437);
          }}
        >
          Los Angeles
        </button>

        <button
          className="map-button"
          onClick={() => {
            setBounds(25.7617, -80.1918);
          }}
        >
          Miami
        </button>

        <button
          className="map-button"
          onClick={() => {
            setBounds(40.7128, -74.006);
          }}
        >
          New York
        </button>

        <button
          className="map-button"
          onClick={() => {
            setBounds(32.7157, -117.1611);
          }}
        >
          San Diego
        </button>

        <button
          className="map-button"
          onClick={() => {
            setBounds(37.7749, -122.4194);
          }}
        >
          San Francisco
        </button>

        <button
          className="map-button"
          onClick={() => {
            setBounds(37.3387, -121.8853);
          }}
        >
          San Jose
        </button>

        <button
          className="map-button"
          onClick={() => {
            setBounds(32.0809, -81.0912);
          }}
        >
          Savannah
        </button>

        <button
          className="map-button"
          onClick={() => {
            setBounds(47.6062, -122.3321);
          }}
        >
          Seattle
        </button>
      </div>

      <div className="map-container" style={{ height: "55vh", width: "100%" }}>
        <GoogleMapReact
          // Put the google API key here
          bootstrapURLKeys={{ key: "AIzaSyDOhqYOYIXvrk8lt2HQQLI8cS1O8FnZt9I" }}
          center={city.center}
          defaultZoom={11}
          onChange={handleBoundsChange} // listen for bounds change event
        >

          {store.searchResults.map((result, i) => {
            return (
              <Marker
                lat={result.latitude}
                lng={result.longitude}
                color="red"
                text={result.name}
                key={i}
                category={result.category}
                id={result.id}
              />
            );
          })}
        </GoogleMapReact>
      </div>
    </div>
  );
};
