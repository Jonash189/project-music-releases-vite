import React from "react";
import { ArtistName } from "./ArtistName";
import { AlbumName } from "./AlbumName";
import { AlbumCover } from "./AlbumCover";
import './App.css';

export const Album = ({ album }) => {
    return (
        <div className="album">

            <AlbumCover imageUrl={album.images[0].url} alt={album.name} />


            <AlbumName name={album.name} />


            <div className="artists">
                {album.artists.map((artist) => (
                    <ArtistName key={artist.id} artist={artist} />
                ))}
            </div>
        </div>
    );
};
