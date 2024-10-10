export const AlbumName = ({ name, url }) => {
    return (
        <h2>
            <a href={url} target="_blank" rel="noopener noreferrer">
                {name}
            </a>
        </h2>
    );
};