import React from 'react';
import './Profile.css';

const Profile = ({ user, onLogOutButtonClick }) => {
    return (
        <div className="profile">
            <h1>Вы вошли как {user}</h1>
            <button onClick={onLogOutButtonClick}>Выйти</button>
        </div>
    );
};

export default Profile;
