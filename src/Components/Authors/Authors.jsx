import React from 'react';
import './Authors.css';

const Authors = ({ authors }) => {
    return (
        <div className="authors">
            <h1>Авторы</h1>
            <ul>
                {authors.map((author) => {
                    return (
                        <li key={author.id}>
                            <h4>{author.fio}</h4>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Authors;
