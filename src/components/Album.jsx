import React from "react";
import { ArtistName } from "./ArtistName";
import { AlbumName } from "./AlbumName";
import { AlbumCover } from "./AlbumCover";
import './App.css';

export const Album = ({ album }) => {
    return (
        <div className="album">

            <AlbumCover imageUrl={album.images[0].url} alt={album.name} />


            <AlbumName name={album.name} url={album.external_urls.spotify} />


            <div className="artists">
                {album.artists.map((artist) => (
                    <ArtistName key={artist.id} artist={artist} />
                ))}
            </div>
        </div>
    );
};
