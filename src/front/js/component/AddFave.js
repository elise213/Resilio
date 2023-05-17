import React, { useContext, useState, useEffect, createContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const AddFave = (props) => {
    const { store, actions } = useContext(Context);
    const [isFavorite, setIsFavorite] = useState(false);
    const token = sessionStorage.getItem("token");


    const MyContext = createContext('default value');
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
        console.log("PROPTYPE", props.type)
        if (props.type === "resource") {
            actions.removeFavorite(props.name);
        } else if (props.type === "offering") {
            console.log("remove from favorites!")
            console.log("PROPS NAME FROM BUTTON", props.name)
            actions.removeFavoriteOffering(props.name);
        }
        setIsFavorite(false);
    };

    return (
        <div>
            {token && !isFavorite && (props.type === "resource") ? (
                <button className="fave-button" onClick={handleAddToFavorites}>
                    {/* Favorite */}
                    <i className="far fa-heart"></i>
                </button>
            ) : token && isFavorite && (props.type === "resource") ? (
                <button
                    className="fave-button colored-heart"
                    onClick={handleRemoveFromFavorites}
                >
                    {/* Remove Favorite  */}
                    <i className="fa-solid fa-heart"></i>
                </button>
            ) : null}

            {token && isFavorite && (props.type === "offering") ? (
                <button
                    className="fave-button colored-heart"
                    onClick={handleRemoveFromFavorites}
                >
                    {/* Remove Favorite  */}
                    <i className="fa-solid fa-heart"></i>
                </button>
            ) : token && !isFavorite && (props.type === "offering") ? (
                <button className="fave-button" onClick={handleAddToFavorites}>
                    {/* Favorite */}
                    <i className="far fa-heart"></i>
                </button>
            ) : null}
        </div>
    );
};

export default AddFave;
