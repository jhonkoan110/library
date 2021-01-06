import React, { Component } from 'react';
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
    }

    onChangeInputTextHandler = (event) => {
        const text = event.target.value;
        const inputId = event.target.id;
        this.setState({ [inputId]: text });
    };

    onLoginButtonClickHandler = (event) => {
        event.preventDefault();

        const loginFormData = {
            login: this.state.usernameText,
            password: this.state.passwordText,
        };

        this.props.loginFetchPostData(
            'http://localhost:54407/api/auth/authenticate',
            loginFormData,
        );

        this.setState({
            usernameText: '',
            passwordText: '',
        });
    };

    onLogOutButtonClickHandler = () => {
        this.props.setAuthData();
    };

    render() {
        const { usernameText, passwordText } = this.state;
        const { token, user, hasErrored, isLoading } = this.props;

        if (hasErrored) {
            return <p>Во время загрузки страницы произошла ошибка</p>;
        }

        if (isLoading) {
            return <p>Loading...</p>;
        }

        if (token) {
            return <Profile user={user} onLogOutButtonClick={this.onLogOutButtonClickHandler} />;
        }

        return (
            <Login
                usernameText={usernameText}
                passwordText={passwordText}
                onChangeInputText={this.onChangeInputTextHandler}
                onLoginButtonClick={this.onLoginButtonClickHandler}
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
