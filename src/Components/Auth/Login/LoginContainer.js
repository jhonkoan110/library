import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import Login from './Login';
import Profile from '../Profile/index';
import { loginFetchPostData, setAuthData } from '../../../redux/auth/actions';

class LoginContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usernameText: '',
            passwordText: '',
        };

        this.onChangeUsernameInputText.bind(this);
        this.onChangePasswordInputText.bind(this);
        this.onLoginButtonClick.bind(this);
        this.onLogOutButtonClick.bind(this);
    }

    /**
     * Отправляет в стейт текст из инпута ввода логина
     *
     * @param {} event
     */
    onChangeUsernameInputText = (event) => {
        const text = event.target.value;
        this.setState({ usernameText: text });
    };

    /**
     * Отправляет в стейт текст из инпута ввода пароля
     *
     * @param {Object} event
     */
    onChangePasswordInputText = (event) => {
        const text = event.target.value;
        this.setState({ passwordText: text });
    };

    /**
     * По нажатию на кнопку "Войти" отправляет на сервер логин и пароль пользователя.
     *
     * @param {} event
     */
    onLoginButtonClick = (event) => {
        event.preventDefault();
        /**
         * Создаётся объект loginFormData с логином и паролем, которые берутся
         * из стейта этого компонента.
         */
        const loginFormData = {
            login: this.state.usernameText,
            password: this.state.passwordText,
        };
        /**
         * Данные отправляются на сервер
         */
        this.props.loginFetchPostData(
            'http://localhost:54407/api/auth/authenticate',
            loginFormData,
        );
        /** Текст в полях ввода затирается */
        this.setState({
            usernameText: '',
            passwordText: '',
        });
    };

    /**
     * По нажатию на кнопку "Выйти" очищается localStorage
     * (из него удаляется токен и логин пользователя)
     */
    onLogOutButtonClick = () => {
        localStorage.clear();
        /** значениям token и login в стейте auth присваивается null */
        this.props.setAuthData();
    };

    render() {
        const { usernameText, passwordText } = this.state;
        const { token, user, hasErrored, isLoading } = this.props;

        /** Если ответ с сервера не пришёл или пришёл с сошибкой */
        if (hasErrored) {
            return <p>Во время загрузки страницы произошла ошибка</p>;
        }

        /** Прелоадер */
        if (isLoading) {
            return <p>Loading...</p>;
        }

        /**
         * Если токен есть в localStorage, вместо формы авторизации отображается профиль
         * пользователя
         */
        if (token) {
            return <Profile user={user} onLogOutButtonClick={this.onLogOutButtonClick} />;
        }

        /** Рендерится форма авторизации */
        return (
            <Login
                usernameText={usernameText}
                passwordText={passwordText}
                onChangeUsernameInputText={this.onChangeUsernameInputText}
                onChangePasswordInputText={this.onChangePasswordInputText}
                onLoginButtonClick={this.onLoginButtonClick}
            />
        );
    }
}

const mapStateToProps = (state) => ({
    token: state.auth.token,
    user: state.auth.user,
    hasErrored: state.auth.hasErrored,
    isLoading: state.auth.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
    loginFetchPostData: (url, loginFormData) => dispatch(loginFetchPostData(url, loginFormData)),
    setAuthData: () => dispatch(setAuthData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
