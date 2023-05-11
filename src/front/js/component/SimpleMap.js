// import React, { useContext, useEffect, useState } from "react";
// import { Context } from "../store/appContext";
// import GoogleMapReact from "google-map-react";

// export const SimpleMap = () => {
//   const { store, actions } = useContext(Context);

//   let lat = 34.0522;
//   let lng = -118.2437;

//   const [city, setCity] = useState({
//     center: { lat: lat, lng: lng },
//   });

//   function geoFindMe() {
//     function success(position) {
//       let latitude = position.coords.latitude;
//       let longitude = position.coords.longitude;
//       setCity({ center: { lat: latitude, lng: longitude } });
//     }
//     function error() {
//       alert("Unable to retrieve your location");
//     }
//     if (!navigator.geolocation) {
//       alert("Geolocation is not supported by your browser");
//     } else {
//       console.log("Locating…");
//       navigator.geolocation.getCurrentPosition(success, error);
//     }
//   }
//   useEffect(() => {
//     geoFindMe();
//   }, []);

//   // Define the Marker component
//   const Marker = (props) => (
//     <div style={{ color: props.color }}>
//       <i className="fa-solid fa-location-dot fa-2xl"></i>
//     </div>
//   );

//   return (
//     <div className="map-info">
//       {/* <!-- Which City? --> */}
//       <div className="map-city-buttons">
//         <button
//           className="map-button"
//           onClick={() => setCity({ center: { lat: 61.2176, lng: -149.8997 } })}
//         >
//           Anchorage
//         </button>
//         <button
//           className="map-button"
//           onClick={() => setCity({ center: { lat: 44.0521, lng: -123.0868 } })}
//         >
//           Eugene
//         </button>
//         <button
//           className="map-button"
//           onClick={() => setCity({ center: { lat: 36.1716, lng: -115.1391 } })}
//         >
//           Las Vegas
//         </button>
//         <button
//           className="map-button"
//           onClick={() => setCity({ center: { lat: 34.0522, lng: -118.2437 } })}
//         >
//           Los Angeles
//         </button>
//         <button
//           className="map-button"
//           onClick={() => setCity({ center: { lat: 25.7617, lng: -80.1918 } })}
//         >
//           Miami
//         </button>
//         <button
//           className="map-button"
//           onClick={() => setCity({ center: { lat: 40.7128, lng: -74.006 } })}
//         >
//           New York
//         </button>
//         <button
//           className="map-button"
//           onClick={() => setCity({ center: { lat: 32.7157, lng: -117.1611 } })}
//         >
//           San Diego
//         </button>
//         <button
//           className="map-button"
//           onClick={() => setCity({ center: { lat: 37.7749, lng: -122.4194 } })}
//         >
//           San Francisco
//         </button>
//         <button
//           className="map-button"
//           onClick={() => setCity({ center: { lat: 37.3387, lng: -121.8853 } })}
//         >
//           San Jose
//         </button>

//         <button
//           className="map-button"
//           onClick={() => setCity({ center: { lat: 32.0809, lng: -81.0912 } })}
//         >
//           Savannah
//         </button>
//         <button
//           className="map-button"
//           onClick={() => setCity({ center: { lat: 47.6062, lng: -122.3321 } })}
//         >
//           Seattle
//         </button>
//         <button
//           className="map-button"
//           onClick={() => setCity({ center: { lat: 52.52, lng: 13.405 } })}
//         >
//           Berlin
//         </button>
//         <button
//           className="map-button"
//           onClick={() => setCity({ center: { lat: 45.4642, lng: 9.19 } })}
//         >
//           Milan
//         </button>
//         <button
//           className="map-button"
//           onClick={() => setCity({ center: { lat: 51.5072, lng: -0.1276 } })}
//         >
//           London
//         </button>
//         <button
//           className="map-button"
//           onClick={() => setCity({ center: { lat: 13.7563, lng: 100.5018 } })}
//         >
//           Bangkok
//         </button>
//       </div>

//       <div className="map-container" style={{ height: "55vh", width: "100%" }}>
//         <GoogleMapReact
//           // Put the google API key here!!
//           bootstrapURLKeys={{ key: "AIzaSyDOhqYOYIXvrk8lt2HQQLI8cS1O8FnZt9I" }}
//           center={city.center}
//           defaultZoom={11}
//         >
//           {store.searchResults.map((result, i) => {
//             return (
//               <Marker
//                 lat={result.latitude}
//                 lng={result.longitude}
//                 color="red"
//                 text={result.name}
//                 key={i}
//               />
//             );
//           })}
//         </GoogleMapReact>
//       </div>
//     </div>
//   );
// };

import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import GoogleMapReact from "google-map-react";

export const SimpleMap = ({ zipCode, setPlace, place }) => {
  const { store, actions } = useContext(Context);
  let lat = 34.0522;
  let lng = -118.2437;
  let neLat = (lat + 0.18866583325124964);
  let swLat = (lat - 0.18908662930897435);
  let neLng = (lng + 0.44322967529295454);
  let swLng = (lng - 0.44322967529298296);

  const [city, setCity] = useState({
    center: { lat: lat, lng: lng },
    bounds: {
      ne: { lat: neLat, lng: neLng },
      sw: { lat: swLat, lng: swLng }
    }
  });

  useEffect(() => {
    setCity({
      center: { lat: lat, lng: lng },
      bounds: {
        ne: { lat: neLat, lng: neLng },
        sw: { lat: swLat, lng: swLng }
      }
    }

    )
  }, [place])

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

  // function geoFindMe() {
  //   function success(position) {
  //     let latitude = position.coords.latitude;
  //     let longitude = position.coords.longitude;
  //     setCity({ center: { lat: latitude, lng: longitude }, bounds: null }); // reset bounds when location changes
  //   }
  //   function error() {
  //     alert("Unable to retrieve your location");
  //   }
  //   if (!navigator.geolocation) {
  //     alert("Geolocation is not supported by your browser");
  //   } else {
  //     console.log("Locating…");
  //     navigator.geolocation.getCurrentPosition(success, error);
  //   }
  // }

  // useEffect(() => {
  //   geoFindMe();
  // }, []);


  const Marker = (props) => (
    <div style={{ color: props.color }}>
      <i className="fa-solid fa-location-dot fa-2xl"></i>
    </div>
  );

  const handleBoundsChange = (data) => {
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
  };

  const filteredResults = store.searchResults.filter((result) => {
    if (city.bounds) {
      const ne = city.bounds.ne;
      const sw = city.bounds.sw;
      return (
        result.latitude <= ne.lat &&
        result.latitude >= sw.lat &&
        result.longitude <= ne.lng &&
        result.longitude >= sw.lng
      );
    }
    return true; // if bounds are not set, show all results
  });

  console.log("CITY", city)

  setPlace(city)

  return (
    <div className="map-info">
      {/* <!-- Which City? --> */}
      <div className="map-city-buttons">
        <button
          className="map-button"
          onClick={() => setCity({ center: { lat: 61.2176, lng: -149.8997 }, bounds: null })}
        >
          Anchorage
        </button>
        <button
          className="map-button"
          onClick={() => setCity({ center: { lat: 44.0521, lng: -123.0868 }, bounds: null })}
        >
          Eugene
        </button>
        <button
          className="map-button"
          onClick={() => setCity({ center: { lat: 36.1716, lng: -115.1391 }, bounds: null })}
        >
          Las Vegas
        </button>
        <button
          className="map-button"
          onClick={() => setCity({ center: { lat: 34.0522, lng: -118.2437 }, bounds: null })}
        >
          Los Angeles
        </button>
        <button
          className="map-button"
          onClick={() => setCity({ center: { lat: 25.7617, lng: -80.1918 }, bounds: null })}
        >
          Miami
        </button>
        <button
          className="map-button"
          onClick={() => setCity({ center: { lat: 40.7128, lng: -74.006 }, bounds: null })}
        >
          New York
        </button>
        <button
          className="map-button"
          onClick={() => setCity({ center: { lat: 32.7157, lng: -117.1611 }, bounds: null })}
        >
          San Diego
        </button>
        <button
          className="map-button"
          onClick={() => setCity({ center: { lat: 37.7749, lng: -122.4194 }, bounds: null })}
        >
          San Francisco
        </button>
        <button
          className="map-button"
          onClick={() => setCity({ center: { lat: 37.3387, lng: -121.8853 }, bounds: null })}
        >
          San Jose
        </button>

        <button
          className="map-button"
          onClick={() => setCity({ center: { lat: 32.0809, lng: -81.0912 }, bounds: null })}
        >
          Savannah
        </button>
        <button
          className="map-button"
          onClick={() => setCity({ center: { lat: 47.6062, lng: -122.3321 }, bounds: null })}
        >
          Seattle
        </button>
        <button
          className="map-button"
          onClick={() => setCity({ center: { lat: 52.52, lng: 13.405 }, bounds: null })}
        >
          Berlin
        </button>
        <button
          className="map-button"
          onClick={() => setCity({ center: { lat: 45.4642, lng: 9.19 }, bounds: null })}
        >
          Milan
        </button>
        <button
          className="map-button"
          onClick={() => setCity({ center: { lat: 51.5072, lng: -0.1276 }, bounds: null })}
        >
          London
        </button>
        <button
          className="map-button"
          onClick={() => setCity({ center: { lat: 13.7563, lng: 100.5018 }, bounds: null })}
        >
          Bangkok
        </button>
      </div>

      <div className="map-container" style={{ height: "55vh", width: "100%" }}>
        <GoogleMapReact
          // Put the google API key here!!
          bootstrapURLKeys={{ key: "AIzaSyDOhqYOYIXvrk8lt2HQQLI8cS1O8FnZt9I" }}
          center={city.center}
          defaultZoom={11}
          onChange={handleBoundsChange} // listen for bounds change event
        >
          {filteredResults.map((result, i) => {
            // console.log("result", result);

            return (
              <Marker
                lat={result.latitude}
                lng={result.longitude}
                color="red"
                text={result.name}
                key={i}
              />
            );
          })}
        </GoogleMapReact>
      </div>
    </div>
  );
};
