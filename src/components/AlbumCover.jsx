import React from "react";
import './AlbumCover.css';

export const AlbumCover = ({ imageUrl, alt }) => {
    return <img className="album-cover" src={imageUrl} alt={alt} />;
};