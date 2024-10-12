import React from "react";

export const AlbumName = ({ name, url }) => {
    return (
        <a href={url} target="_blank" rel="noopener noreferrer" className="album-name">
            {name}
        </a>
    );
};