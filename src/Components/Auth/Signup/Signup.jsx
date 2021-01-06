import React from 'react';
import { NavLink } from 'react-router-dom';

const Signup = ({
    firstNameText,
    lastNameText,
    loginText,
    emailText,
    passwordText,
    onChangeInput,
    onRegistrationButtonClick,
    onLoginLinkClick,
}) => {
    return (
        <div className="login">
            <form className="login-form">
                <h1>Регистрация</h1>
                <div className="form-item-container">
                    <label htmlFor="">Имя</label>
                    <input
                        type="text"
                        value={firstNameText}
                        onChange={onChangeInput}
                        id="firstNameText"
                    />
                </div>
                <div className="form-item-container">
                    <label htmlFor="">Фамилия</label>
                    <input
                        type="text"
                        value={lastNameText}
                        onChange={onChangeInput}
                        id="lastNameText"
                    />
                </div>
                <div className="form-item-container">
                    <label htmlFor="">Логин</label>
                    <input type="text" value={loginText} onChange={onChangeInput} id="loginText" />
                </div>
                <div className="form-item-container">
                    <label htmlFor="">Ваша почта</label>
                    <input type="text" value={emailText} onChange={onChangeInput} id="emailText" />
                </div>
                <div className="form-item-container">
                    <label>Пароль</label>
                    <input
                        type="password"
                        value={passwordText}
                        onChange={onChangeInput}
                        id="passwordText"
                    />
                </div>
                <div className="form-item-container">
                    <button onClick={onRegistrationButtonClick}>Зарегистрироваться</button>
                </div>
                <div className="form-item-container">
                    <p>
                        Уже есть учётная запись?{' '}
                        <NavLink to="/login" className="signup-btn" onClick={onLoginLinkClick}>
                            Войти
                        </NavLink>
                    </p>
                </div>
            </form>
        </div>
    );
};

export default Signup;
