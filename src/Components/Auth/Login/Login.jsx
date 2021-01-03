import { NavLink } from 'react-router-dom';
import './Login.css';



const Login = props => {

    return (
        <div className='login'>

            <form className='login-form'>
                <h1>Авторизация</h1>
                <div className='form-item-container'>
                    <label htmlFor="">Имя пользователя</label>
                    <input type="text" placeholder='Ваш логин' value={props.usernameText} onChange={props.onChangeUsernameInputText}/>
                </div>
                <div className='form-item-container'>
                    <label>Пароль</label>                    
                    <input type="password" placeholder='Ваш пароль' value={props.passwordText} onChange={props.onChangePasswordInputText}/>
                </div>    
                <div className='form-item-container'>
                    <button onClick={props.onLoginButtonClick}>Войти</button>
                </div>
                <div className="form-item-container">
                    <p>Нет учётной записи? <NavLink to='/signup' className='signup-btn'>Зарегистрироваться </NavLink></p>
                </div>
            </form>
            
        </div>
    )
}

export default Login;