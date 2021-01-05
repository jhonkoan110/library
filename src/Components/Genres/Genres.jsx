import React from 'react';
import './Genres.css';

const Genres = ({ genres }) => {
    return (
        <div className="genres">
            <h1>Жанры</h1>
            <ul>
                {genres.map((genre) => {
                    return <h4 key={genre.id}>{genre.title}</h4>;
                })}
            </ul>
        </div>
    );
};

export default Genres;
