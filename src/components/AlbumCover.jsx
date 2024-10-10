import React from "react";

export const AlbumCover = ({ imageUrl, alt }) => {
    return <img src={imageUrl} alt={alt} style={{ width: '100%', height: 'auto' }} />;
};