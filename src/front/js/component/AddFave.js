import React, { useContext, useState, useEffect, createContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const AddFave = (props) => {
    const { store, actions } = useContext(Context);
    const [isFavorite, setIsFavorite] = useState(false);
    const token = sessionStorage.getItem("token");


    const MyContext = createContext('default value');
    // console.log("TYPEOF", typeof store.favorites.includes(props.name), store.favorites.includes(props.name))
    // console.log("TYPEOF", typeof store.favoriteOfferings.includes(props.name), store.favoriteOfferings.includes(props.name))
    // console.log(store.favorites)
    // console.log(store.favoriteOfferings)

    useEffect(() => {
        // Check if the current offering or resource is a favorite
        if (props.type === "resource") {
            // console.log("if resource", store.favorites)
            store.favorites.forEach((fave) => {
                if (fave.name == props.name) {
                    console.log("if x2 resource")
                    setIsFavorite(true)
                }
            })
        }
        if (props.type === "offering") {
            store.favoriteOfferings.forEach((fave) => {
                if (fave.title == props.name) {
                    setIsFavorite(true)
                }
            })
        }
    }, []);


    const handleAddToFavorites = () => {
        if (props.type === "resource") {
            actions.addFavorite(props.name);
        } else if (props.type === "offering") {
            actions.addFavoriteOffering(props.name);
        }
        setIsFavorite(true);
    };

    const handleRemoveFromFavorites = () => {

        if (props.type === "resource") {
            actions.removeFavorite(props.name);
        } else if (props.type === "offering") {
            console.log("remove from favorites!")
            actions.removeFavoriteOffering(props.name);
        }
        setIsFavorite(false);
    };

    return (

        <div>
            {token && !isFavorite && (props.type === "resource") ? (
                <button className="maras-button" onClick={handleAddToFavorites}>
                    Favorite
                    <i className="pe-1 far fa-heart"></i>
                </button>
            ) : token && isFavorite && (props.type === "resource") ? (
                <button
                    className="maras-button"
                    onClick={handleRemoveFromFavorites}
                >
                    Remove Favorite <i className=" pe-1 fas fa-heart-broken"></i>
                </button>
            ) : null}

            {token && isFavorite && (props.type === "offering") ? (
                <button
                    className="maras-button"
                    onClick={handleRemoveFromFavorites}
                >
                    Remove Favorite <i className="pe-1 fas fa-heart-broken"></i>
                </button>
            ) : token && !isFavorite && (props.type === "offering") ? (
                <button className="maras-button" onClick={handleAddToFavorites}>
                    Add To Favorites
                    <i className="p2-1 far fa-heart"></i>
                </button>
            ) : null}
        </div>
    );
};

export default AddFave;
