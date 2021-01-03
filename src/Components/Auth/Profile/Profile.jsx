import "./Profile.css";


const Profile = props => {
    return (
        <div className='profile'>
            <h1>Вы вошли как {props.user}</h1>
            <button onClick={props.onLogOutButtonClick}>Выйти</button>
        </div>
    )
}

export default Profile;