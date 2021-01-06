import React from 'react';
import { NavLink } from 'react-router-dom';
import './Login.css';

const Login = ({ usernameText, passwordText, onChangeInputText, onLoginButtonClick }) => {
    return (
        <div className="login">
            <form className="login-form">
                <h1>Авторизация</h1>
                <div className="form-item-container">
                    <label htmlFor="">Имя пользователя</label>
                    <input
                        type="text"
                        placeholder="Ваш логин"
                        value={usernameText}
                        onChange={onChangeInputText}
                        id="usernameText"
                    />
                </div>
                <div className="form-item-container">
                    <label>Пароль</label>
                    <input
                        type="password"
                        placeholder="Ваш пароль"
                        value={passwordText}
                        onChange={onChangeInputText}
                        id="passwordText"
                    />
                </div>
                <div className="form-item-container">
                    <button onClick={onLoginButtonClick}>Войти</button>
                </div>
                <div className="form-item-container">
                    <p>
                        Нет учётной записи?
                        <NavLink to="/signup" className="signup-btn">
                            Зарегистрироваться
                        </NavLink>
                    </p>
                </div>
            </form>
        </div>
    );
};

export default Login;
