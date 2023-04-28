import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const AddFave = (props) => {
    const { store, actions } = useContext(Context);
    const token = sessionStorage.getItem("token");
    const [isFavorite, setIsFavorite] = useState(false);
    const [item, setItem] = useState(props.title);

    useEffect(() => {
        store.favoriteOfferings.forEach((fave) => {
            if (props.type == "offering") {
                store.favoriteOfferings.forEach((fave) => {
                    if (fave.title == item) {
                        setIsFavorite(true);
                    }
                });
            } else {
                store.favorites.forEach((fave) => {
                    if (fave.name == item) {
                        setIsFavorite(true);
                    }
                });
            }
        });
        console.log("favorite offerings", store.favoriteOfferings)
        console.log("favorite resourcess", store.favorites)
    }, [item, isFavorite]);


    return (
        <div>
            {token && (isFavorite == false) && (props.type == "resource") ? (
                <button
                    className="maras-button"
                    onClick={() => {
                        actions.addFavorite(props.name);
                        setIsFavorite(true);
                    }}
                >
                    Add To Favorites
                    <i className="ps-2 far fa-heart"></i>
                </button>
            ) : token && (isFavorite == true) && (props.type == "resource") ? (
                <button
                    type="button"
                    className="btn-sm maras-button"
                    onClick={() => {
                        actions.removeFavorite(props.name);
                        setIsFavorite(false);
                    }}
                >
                    Remove Favorite <i className="fas fa-heart-broken"></i>
                </button>
            ) : null}

            {token && (isFavorite == true) && (props.type == "offering") ? (
                <button
                    type="button"
                    className="btn-sm maras-button"
                    onClick={() => {
                        actions.removeFavoriteOffering(props.name);
                        setIsFavorite(false);
                    }}
                >
                    Remove Favorite <i className="fas fa-heart-broken"></i>
                </button>
            ) : token && (isFavorite == false) && (props.type == "offering") ? <button
                className="maras-button"
                onClick={() => {
                    actions.addFavoriteOffering(props.name);
                    setIsFavorite(true);
                }}
            >
                Add To My Favorites
            </button> : null}
        </div>
    )
}

export default AddFave
