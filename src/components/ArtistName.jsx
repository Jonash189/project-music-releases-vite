import React from "react";

export const ArtistName = ({ artist }) => {
    return (
        <span>
            <a href={artist.external_urls.spotify} target="_blank" rel="noopener noreferrer">
                <h3>{artist.name}</h3>
            </a>
        </span>
    );
};