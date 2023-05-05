// This is for rendering to render.com, flux for gitpod can be found below.

// const getState = ({ getStore, getActions, setStore }) => {
//   return {
//     store: {
//       token: null,
//       current_front_url: process.env.FRONTEND_URL,
//       current_back_url: process.env.BACKEND_URL,
//       latitude: null,
//       longitude: null,
//       token: null,
//       is_org: null,
//       name: null,
//       avatarID: null,
//       avatarImages: [
//         "fas fa-robot",
//         "fas fa-user-astronaut",
//         "fas fa-user-ninja",
//         "fas fa-snowman",
//         "fas fa-user-secret",
//         "fas fa-hippo",
//       ],
//       favorites: [],
//       favoriteOfferings: [],
//       searchResults: [],
//       filteredResults: [],
//       offerings: [],
//       checked: false,
//       commentsList: [],
//       categorySEarch: [],
//       when: [],
//     },
//     actions: {
//       // ________________________________________________________________LOGIN/TOKEN
//       login: async (email, password) => {
//         const opts = {
//           method: "POST",
//           mode: "cors",
//           headers: {
//             "Content-Type": "application/json",
//             "Access-Control-Allow-Origin": "*",
//           },
//           body: JSON.stringify({
//             email: email,
//             password: password,
//           }),
//         };
//         try {
//           const response = await fetch("/api/login", opts);
//           if (response.status !== 200) {
//             alert("There has been an error");
//             return false;
//           }
//           const data = await response.json();
//           sessionStorage.setItem("token", data.access_token);
//           sessionStorage.setItem("is_org", data.is_org);
//           sessionStorage.setItem("name", data.name);
//           let favoriteNames = [];
//           data.favorites.forEach((favorite, index) => {
//             favoriteNames.push({
//               name: favorite.name,
//             });
//           });
//           let favoriteOffers = [];
//           data.favoriteOfferings.forEach((offering, index) => {
//             favoriteOffers.push({
//               title: offering.title,
//             });
//           });
//           setStore({
//             token: data.access_token,
//             is_org: data.is_org,
//             avatarID: data.avatar,
//             name: data.name,
//             favorites: favoriteNames,
//             favoriteOfferings: favoriteOffers,
//           });
//           return true;
//         } catch (error) {
//           console.error(error);
//         }
//       },
//       createUser: async (is_org, name, email, password, userAvatar) => {
//         const opts = {
//           method: "POST",
//           mode: "cors",
//           headers: {
//             "Content-Type": "application/json",
//             "Access-Control-Allow-Origin": "*",
//           },
//           body: JSON.stringify({
//             is_org: is_org,
//             name: name,
//             email: email,
//             password: password,
//             userAvatar: userAvatar,
//           }),
//         };
//         try {
//           const response = await fetch(
//             // current_back_url + "/api/createUser",
//             "/api/createUser",
//             opts
//           );
//           if (response.status >= 400) {
//             alert("There has been an error");
//             return false;
//           }
//           const data = await response.json();
//           if (data.status == "true") {
//           }
//           return true;
//         } catch (error) {
//           console.error(error);
//         }
//       },
//       logout: () => {
//         sessionStorage.removeItem("token");
//         sessionStorage.removeItem("is_org");
//         sessionStorage.removeItem("name");
//         setStore({ token: null, is_org: null, name: null });
//         window.location.href = "/";
//       },

//       // ________________________________________________________________RESOURCES
//       createResource: async (
//         name,
//         address,
//         phone,
//         resourceType,
//         website,
//         description,
//         latitude,
//         longitude,
//         picture,
//         picture2,
//         mondayStart,
//         mondayEnd,
//         tuesdayStart,
//         tuesdayEnd,
//         wednesdayStart,
//         wednesdayEnd,
//         thursdayStart,
//         thursdayEnd,
//         fridayStart,
//         fridayEnd,
//         saturdayStart,
//         saturdayEnd,
//         sundayStart,
//         sundayEnd
//       ) => {
//         const token = sessionStorage.getItem("token");
//         const opts = {
//           method: "POST",
//           mode: "cors",
//           headers: {
//             Authorization: "Bearer " + token,
//             "Content-Type": "application/json",
//             "Access-Control-Allow-Origin": "*",
//           },
//           body: JSON.stringify({
//             name: name,
//             address: address,
//             phone: phone,
//             category: resourceType,
//             website: website,
//             description: description,
//             latitude: latitude,
//             longitude: longitude,
//             picture: picture,
//             picture2: picture2,
//             mondayStart: mondayStart,
//             mondayEnd: mondayEnd,
//             tuesdayStart: tuesdayStart,
//             tuesdayEnd: tuesdayEnd,
//             wednesdayStart: wednesdayStart,
//             wednesdayEnd: wednesdayEnd,
//             thursdayStart: thursdayStart,
//             thursdayEnd: thursdayEnd,
//             fridayStart: fridayStart,
//             fridayEnd: fridayEnd,
//             saturdayStart: saturdayStart,
//             saturdayEnd: saturdayEnd,
//             sundayStart: sundayStart,
//             sundayEnd: sundayEnd,
//           }),
//         };
//         try {
//           const response = await fetch("/api/createResource", opts);
//           if (response.status >= 400) {
//             // alert("There has been an error");
//             return false;
//           }
//           const data = await response.json();
//           if (data.status == "true") {
//             window.location.href = "/";
//           }
//           return true;
//         } catch (error) {
//           console.error(error);
//         }
//       },

//       addFavorite: (resourceName) => {
//         const favorites = getStore().favorites;
//         const token = sessionStorage.getItem("token");
//         if (token) {
//           const opts = {
//             headers: {
//               Authorization: "Bearer " + token,
//               "Content-Type": "application/json",
//             },
//             method: "POST",
//             body: JSON.stringify({
//               name: resourceName,
//             }),
//           };
//           fetch("/api/addFavorite", opts)
//             .then((response) => response.json())
//             .then((data) => {
//               if (data.message == "okay") {
//                 favorites.push({ name: resourceName });
//                 setStore({ favorites: favorites });
//               }
//             });
//         }
//       },
//       removeFavorite: (resourceName) => {
//         const favorites = getStore().favorites;
//         const token = getStore().token;
//         if (sessionStorage.getItem("token")) {
//           const opts = {
//             headers: {
//               Authorization: "Bearer " + token,
//               "Content-Type": "application/json",
//             },
//             method: "DELETE",
//             body: JSON.stringify({
//               name: resourceName,
//             }),
//           };
//           fetch("/api/removeFavorite", opts)
//             .then((response) => response.json())
//             .then((data) => {
//               if (data.message == "okay") {
//                 favorites.forEach((element, index) => {
//                   if (element.name == resourceName) {
//                     favorites.splice(index, 1);
//                   }
//                 });
//                 setStore({ favorites: favorites });
//               }
//             })
//             .catch((error) => console.log(error));
//         }
//       },
//       setSearchResults: () => {
//         let url = window.location.search;
//         fetch("/api/getResources" + url)
//           .then((response) => response.json())

//           .then((data) => {
//             setStore({ searchResults: data.data });
//           })
//           .catch((error) => console.log(error));
//       },

//       setSelection: (categorySearch, when) => {
//         setStore({ categorySearch: categorySearch });
//         setStore({ when: when });
//       },

//       createComment: async (resource_id, comment_cont, parentId) => {
//         const token = getStore().token;
//         const opts = {
//           method: "POST",
//           mode: "cors",
//           headers: {
//             Authorization: "Bearer " + token,
//             "Content-Type": "application/json",
//             "Access-Control-Allow-Origin": "*",
//           },
//           body: JSON.stringify({
//             resource_id: resource_id,
//             comment_cont: comment_cont,
//             parentId: parentId,
//           }),
//         };
//         try {
//           const response = await fetch("/api/createComment", opts);
//           if (response.status >= 400) {
//             alert("There has been an error");
//             return false;
//           }
//           const data = await response.json();
//           return true;
//         } catch (error) {
//           console.error(error);
//         }
//       },

//       getComments: (resource_id) => {
//         let id = parseInt(resource_id);
//         const opts = {
//           headers: {
//             "Content-Type": "application/json",
//           },
//         };
//         fetch("/api/getcomments/" + id, opts)
//           .then((res) => res.json())
//           .then((data) => {
//             setStore({ commentsList: data.comments });
//           })
//           .catch((error) => {
//             console.log(error);
//           });
//       },
//       setChecked: (checked) => {
//         let newChecked = checked;
//         setStore({ checked: newChecked });
//       },
//       resetSearchResults: () => {
//         let newArray = [];
//         setStore({ filteredResults: newArray, checked: false });
//       },
//       setFilteredArray: (array) => {
//         setStore({ filteredResults: array });
//       },
//       // ________________________________________________________________OFFERINGS
//       addFavoriteOffering: (offering) => {
//         const favorites = getStore().favoriteOfferings;
//         const token = sessionStorage.getItem("token");
//         if (token) {
//           const opts = {
//             headers: {
//               Authorization: "Bearer " + token,
//               "Content-Type": "application/json",
//             },
//             method: "POST",
//             body: JSON.stringify({
//               title: offering,
//             }),
//           };
//           fetch("/api/addFavoriteOffering", opts)
//             .then((response) => response.json())
//             .then((data) => {
//               if (data.message == "okay") {
//                 favorites.push({ title: offering });
//                 setStore({ favoriteOfferings: favorites });
//               }
//             });
//         }
//       },
//       removeFavoriteOffering: (offeringTitle) => {
//         const favorites = getStore().favoriteOfferings;
//         const token = getStore().token;
//         if (sessionStorage.getItem("token")) {
//           const opts = {
//             headers: {
//               Authorization: "Bearer " + token,
//               "Content-Type": "application/json",
//             },
//             method: "DELETE",
//             body: JSON.stringify({
//               title: offeringTitle,
//             }),
//           };
//           fetch("/api/removeFavoriteOffering", opts)
//             .then((response) => response.json())
//             .then((data) => {
//               if (data.message == "okay") {
//                 favorites.forEach((element, index) => {
//                   if (element.title == offeringTitle) {
//                     favorites.splice(index, 1);
//                   }
//                 });
//                 setStore({ favoriteOfferings: favorites });
//               }
//             })
//             .catch((error) => console.log(error));
//         }
//       },
//       setOfferings: () => {
//         fetch("/api/getOfferings")
//           .then((response) => response.json())
//           .then((data) => {
//             setStore({ offerings: data.data });
//           })
//           .catch((error) => console.log(error));
//       },
//       createOffering: async (
//         title,
//         offeringType,
//         offeringDescription,
//         image,
//         image2
//       ) => {
//         const token = getStore().token;
//         const opts = {
//           method: "POST",
//           mode: "cors",
//           headers: {
//             Authorization: "Bearer " + token,
//             "Content-Type": "application/json",
//             "Access-Control-Allow-Origin": "*",
//           },
//           body: JSON.stringify({
//             title: title,
//             offering_type: offeringType,
//             description: offeringDescription,
//             image: image,
//             image2: image2,
//           }),
//         };
//         try {
//           const response = await fetch("/api/createOffering", opts);
//           if (response.status >= 400) {
//             alert("There has been an error");
//             return false;
//           }
//           const data = await response.json();
//           return true;
//         } catch (error) {
//           console.error(error);
//         }
//       },
//       createDrop: async (
//         name,
//         address,
//         phone,
//         description,
//         type,
//         identification,
//         image
//       ) => {
//         const token = getStore().token;
//         const opts = {
//           method: "POST",
//           mode: "cors",
//           headers: {
//             Authorization: "Bearer " + token,
//             "Content-Type": "application/json",
//             "Access-Control-Allow-Origin": "*",
//           },
//           body: JSON.stringify({
//             name: name,
//             address: address,
//             phone: phone,
//             description: description,
//             type: type,
//             identification: identification,
//             image: image,
//           }),
//         };
//         try {
//           const response = await fetch("/api/createDrop", opts);
//           if (response.status >= 400) {
//             alert("There has been an error");
//             return false;
//           }
//           const data = await response.json();
//           if (data.status == "true") {
//             window.location.href = "/";
//           }
//           return true;
//         } catch (error) {
//           console.error(error);
//         }
//       },
//     },
//   };
// };

// export default getState;




// ______________________________LOCAL

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      token: null,
      current_front_url: process.env.FRONTEND_URL,
      current_back_url: process.env.BACKEND_URL,
      latitude: null,
      longitude: null,
      token: null,
      is_org: null,
      name: null,
      avatarID: null,
      avatarImages: [
        "fas fa-robot",
        "fas fa-user-astronaut",
        "fas fa-user-ninja",
        "fas fa-snowman",
        "fas fa-user-secret",
        "fas fa-hippo",
      ],
      favorites: [],
      favoriteOfferings: [],
      searchResults: [],
      filteredResults: [],
      offerings: [],
      checked: false,
      commentsList: [],
      categorySEarch: [],
      when: [],
    },
    actions: {
      // ________________________________________________________________LOGIN/TOKEN
      login: async (email, password) => {
        const current_back_url = getStore().current_back_url;
        const opts = {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        };
        try {
          const response = await fetch(current_back_url + "/api/login", opts);
          if (response.status !== 200) {
            alert("There has been an error");
            return false;
          }
          const data = await response.json();
          console.log("Yooooooo data =", data);
          sessionStorage.setItem("token", data.access_token);
          sessionStorage.setItem("is_org", data.is_org);
          sessionStorage.setItem("name", data.name);
          sessionStorage.setItem("avatar", parseInt(data.avatar));
          let favoriteNames = [];
          data.favorites.forEach((favorite, index) => {
            favoriteNames.push({
              name: favorite.name,
            });
          });
          let favoriteOffers = [];
          data.favoriteOfferings.forEach((offering, index) => {
            favoriteOffers.push({
              title: offering.title,
            });
          });
          setStore({
            token: data.access_token,
            is_org: data.is_org,
            avatarID: data.avatar,
            name: data.name,
            favorites: favoriteNames,
            favoriteOfferings: favoriteOffers,
          });
          return true;
        } catch (error) {
          console.error(error);
        }
      },
      createUser: async (is_org, name, email, password, userAvatar) => {
        const current_back_url = getStore().current_back_url;
        const opts = {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify({
            is_org: is_org,
            name: name,
            email: email,
            password: password,
            userAvatar: userAvatar,
          }),
        };
        try {
          const response = await fetch(
            current_back_url + "/api/createUser",
            opts
          );
          if (response.status >= 400) {
            alert("There has been an error");
            return false;
          }
          const data = await response.json();
          if (data.status == "true") {
          }
          return true;
        } catch (error) {
          console.error(error);
        }
      },
      logout: () => {
        const current_front_url = getStore().current_front_url;
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("is_org");
        sessionStorage.removeItem("name");
        setStore({ token: null, is_org: null, name: null });
        window.location.href = current_front_url + "/";
      },

      // ________________________________________________________________RESOURCES
      createResource: async (
        name,
        address,
        phone,
        resourceType,
        website,
        description,
        latitude,
        longitude,
        picture,
        picture2,
        mondayStart,
        mondayEnd,
        tuesdayStart,
        tuesdayEnd,
        wednesdayStart,
        wednesdayEnd,
        thursdayStart,
        thursdayEnd,
        fridayStart,
        fridayEnd,
        saturdayStart,
        saturdayEnd,
        sundayStart,
        sundayEnd
      ) => {
        const current_back_url = getStore().current_back_url;
        const current_front_url = getStore().current_front_url;
        const token = sessionStorage.getItem("token");
        const opts = {
          method: "POST",
          mode: "cors",
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify({
            name: name,
            address: address,
            phone: phone,
            category: resourceType,
            website: website,
            description: description,
            latitude: latitude,
            longitude: longitude,
            picture: picture,
            picture2: picture2,
            mondayStart: mondayStart,
            mondayEnd: mondayEnd,
            tuesdayStart: tuesdayStart,
            tuesdayEnd: tuesdayEnd,
            wednesdayStart: wednesdayStart,
            wednesdayEnd: wednesdayEnd,
            thursdayStart: thursdayStart,
            thursdayEnd: thursdayEnd,
            fridayStart: fridayStart,
            fridayEnd: fridayEnd,
            saturdayStart: saturdayStart,
            saturdayEnd: saturdayEnd,
            sundayStart: sundayStart,
            sundayEnd: sundayEnd,
          }),
        };
        try {
          const response = await fetch(
            current_back_url + "/api/createResource",
            opts
          );
          if (response.status >= 400) {
            alert("There has been an error");
            return false;
          }
          const data = await response.json();
          if (data.status == "true") {
            window.location.href = current_front_url + "/";
          }
          return true;
        } catch (error) {
          console.error(error);
        }
      },

      addFavorite: (resourceName) => {
        const current_back_url = getStore().current_back_url;
        const favorites = getStore().favorites;
        const token = sessionStorage.getItem("token");
        if (token) {
          const opts = {
            headers: {
              Authorization: "Bearer " + token,
              "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify({
              name: resourceName,
            }),
          };
          fetch(current_back_url + "/api/addFavorite", opts)
            .then((response) => response.json())
            .then((data) => {
              if (data.message == "okay") {
                favorites.push({ name: resourceName });
                console.log("favorites from addfavorite", favorites);
                setStore({ favorites: favorites });
              }
            });
        }
      },
      removeFavorite: (resource) => {
        const current_back_url = getStore().current_back_url;
        const favorites = getStore().favorites;
        if (sessionStorage.getItem("token")) {
          const opts = {
            headers: {
              Authorization: "Bearer " + sessionStorage.getItem("token"),
              "Content-Type": "application/json",
            },
            method: "DELETE",
            body: JSON.stringify({
              name: resource,
            }),
          };
          fetch(current_back_url + "/api/removeFavorite", opts)
            .then((response) => response.json())
            .then((data) => {
              if (data.message == "okay") {
                favorites.forEach((element, index) => {
                  if (element.name == resource) {
                    favorites.splice(index, 1);
                  }
                });
                console.log("favorites from removefavorite", favorites);
                setStore({ favorites: favorites });
              }
            })
            .catch((error) => console.log(error));
        }
      },
      setSearchResults: () => {
        let url = window.location.search;
        fetch(getStore().current_back_url + "/api/getResources" + url)
          .then((response) => response.json())

          .then((data) => {
            setStore({ searchResults: data.data });
            console.log("search results", getStore().searchResults);
          })
          .catch((error) => console.log(error));
      },

      setSelection: (categorySearch, when) => {
        setStore({ categorySearch: categorySearch });
        setStore({ when: when });
      },

      createComment: async (resource_id, comment_cont, parentId) => {
        const current_back_url = getStore().current_back_url;
        const token = getStore().token;
        const opts = {
          method: "POST",
          mode: "cors",
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify({
            resource_id: resource_id,
            comment_cont: comment_cont,
            parentId: parentId,
          }),
        };
        try {
          const response = await fetch(
            current_back_url + "/api/createComment",
            opts
          );
          if (response.status >= 400) {
            alert("There has been an error");
            return false;
          }
          const data = await response.json();
          return true;
        } catch (error) {
          console.error(error);
        }
      },

      getComments: (resource_id) => {
        const current_back_url = getStore().current_back_url;
        let id = parseInt(resource_id);
        const opts = {
          headers: {
            "Content-Type": "application/json",
          },
        };
        fetch(current_back_url + "/api/getcomments/" + id, opts)
          .then((res) => res.json())
          .then((data) => {
            console.log("this is from get_comments", data);
            setStore({ commentsList: data.comments });
          })
          .catch((error) => {
            console.log(error);
          });
      },
      setChecked: (checked) => {
        let newChecked = checked;
        setStore({ checked: newChecked });
      },
      resetSearchResults: () => {
        let newArray = [];
        setStore({ filteredResults: newArray, checked: false });
      },
      // ________________________________________________________________OFFERINGS
      addFavoriteOffering: (offering) => {
        console.log(offering);
        const current_back_url = getStore().current_back_url;
        let favorites = getStore().favoriteOfferings;
        const token = sessionStorage.getItem("token");
        if (token) {
          const opts = {
            headers: {
              Authorization: "Bearer " + token,
              "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify({
              title: offering,
            }),
          };
          fetch(current_back_url + "/api/addFavoriteOffering", opts)
            .then((response) => response.json())
            .then((data) => {
              if (data.message == "okay") {
                console.log("okay");
                favorites.push({ title: offering });
                setStore({ favoriteOfferings: favorites });
              }
            });
        }
      },
      removeFavoriteOffering: (offering) => {
        console.log("offering", offering)
        const current_back_url = getStore().current_back_url;
        const token = sessionStorage.getItem("token")

        try {
          if (token) {
            const response = fetch(`${current_back_url}/api/removeFavoriteOffering`, {
              method: 'DELETE',
              headers: {
                Authorization: "Bearer " + sessionStorage.getItem("token"),
                "Content-Type": "application/json"
              },
              body: JSON.stringify({ title: offering })
            });

            if (response.status === 200) {
              const favorites = getStore().favoriteOfferings.filter((fav) => fav.title !== offering);
              setStore({ favoriteOfferings: favorites });
            } else {
              console.error(`Failed to remove favorite offering. Server returned status code ${response.status}.`);
            }
          }
        } catch (error) {
          console.error('An error occurred while removing favorite offering:', error);
        }
      },

      // removeFavoriteOffering: (offering) => {
      //   const current_back_url = getStore().current_back_url;
      //   const favorites = getStore().favoriteOfferings;
      //   const token = getStore().token;
      //   if (getStore().token) {
      //     const opts = {
      //       headers: {
      //         Authorization: "Bearer " + token,
      //         "Content-Type": "application/json",
      //       },
      //       method: "DELETE",
      //       body: JSON.stringify({
      //         title: offering,
      //       }),
      //     };
      //     fetch(current_back_url + "/api/removeFavoriteOffering", opts)
      //       .then((response) => response.json())
      //       .then((data) => {
      //         if (data.message == "okay") {
      //           console.log("okay");
      //           favorites.forEach((element, index) => {
      //             if (element.title == offering) {
      //               favorites.splice(index, 1);
      //             }
      //           });
      //           setStore({ favoriteOfferings: favorites });
      //         }
      //       })
      //       .catch((error) => console.log(error));
      //   }
      // },
      setOfferings: () => {
        fetch(getStore().current_back_url + "/api/getOfferings")
          .then((response) => response.json())
          .then((data) => {
            setStore({ offerings: data.data });
            console.log("from setOfferings", getStore().offerings);
            console.log("from setOfferings", data.data);
          })
          .catch((error) => console.log(error));
      },
      createOffering: async (
        title,
        offeringType,
        offeringDescription,
        image,
        image2
      ) => {
        const current_back_url = getStore().current_back_url;
        const token = getStore().token;
        const opts = {
          method: "POST",
          mode: "cors",
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify({
            title: title,
            offering_type: offeringType,
            description: offeringDescription,
            image: image,
            image2: image2,
          }),
        };
        try {
          const response = await fetch(
            current_back_url + "/api/createOffering",
            opts
          );
          if (response.status >= 400) {
            alert("There has been an error");
            return false;
          }
          const data = await response.json();
          return true;
        } catch (error) {
          console.error(error);
        }
      },
      createDrop: async (
        name,
        address,
        phone,
        description,
        type,
        identification,
        image
      ) => {
        const current_back_url = getStore().current_back_url;
        const current_front_url = getStore().current_front_url;
        const token = getStore().token;
        const opts = {
          method: "POST",
          mode: "cors",
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify({
            name: name,
            address: address,
            phone: phone,
            description: description,
            type: type,
            identification: identification,
            image: image,
          }),
        };
        try {
          const response = await fetch(
            current_back_url + "/api/createDrop",
            opts
          );
          if (response.status >= 400) {
            alert("There has been an error");
            return false;
          }
          const data = await response.json();
          if (data.status == "true") {
            window.location.href = current_front_url + "/";
          }
          return true;
        } catch (error) {
          console.error(error);
        }
      },
    },
  };
};

export default getState;
