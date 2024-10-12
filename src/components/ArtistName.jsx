import React from "react";

export const ArtistName = ({ artist }) => {
    return (
        <span>
            <a href={artist.external_urls.spotify} target="_blank" rel="noopener noreferrer" className="artist-name">
                {artist.name}
            </a>
        </span>
    );
};