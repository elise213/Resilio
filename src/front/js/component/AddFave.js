import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const AddFave = (props) => {
    const { store, actions } = useContext(Context);
    const [isFavorite, setIsFavorite] = useState(false);
    const token = sessionStorage.getItem("token");

    useEffect(() => {
        // Check if the current offering or resource is already a favorite
        if (props.type === "resource") {
            setIsFavorite(store.favorites.includes(props.name));
        } else if (props.type === "offering") {
            setIsFavorite(store.favoriteOfferings.includes(props.name));
        }
    }, [store.favoriteResources, store.favoriteOfferings]);

    const handleAddToFavorites = () => {
        if (props.type === "resource") {
            actions.addFavorite(props.name);
        } else if (props.type === "offering") {
            actions.addFavoriteOffering(props.name);
        }
        setIsFavorite(true);
    };

    const handleRemoveFromFavorites = () => {
        try {
            if (props.type === "resource") {
                actions.removeFavorite(props.name);
            } else if (props.type === "offering") {
                actions.removeFavoriteOffering(props.name);
            }
            setIsFavorite(false);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            {token && !isFavorite && (props.type === "resource") ? (
                <button className="maras-button" onClick={handleAddToFavorites}>
                    Add To Favorites
                    <i className="ps-2 far fa-heart"></i>
                </button>
            ) : token && isFavorite && (props.type === "resource") ? (
                <button
                    type="button"
                    className="btn-sm maras-button"
                    onClick={handleRemoveFromFavorites}
                >
                    Remove Favorite <i className="fas fa-heart-broken"></i>
                </button>
            ) : null}

            {token && isFavorite && (props.type === "offering") ? (
                <button
                    type="button"
                    className="btn-sm maras-button"
                    onClick={handleRemoveFromFavorites}
                >
                    Remove Favorite <i className="fas fa-heart-broken"></i>
                </button>
            ) : token && !isFavorite && (props.type === "offering") ? (
                <button className="maras-button" onClick={handleAddToFavorites}>
                    Add To My Favorites
                </button>
            ) : null}
        </div>
    );
};

export default AddFave;
