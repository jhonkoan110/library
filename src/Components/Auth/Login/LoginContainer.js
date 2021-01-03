import { Component } from "react";
import { connect } from "react-redux";
import { setAuthData } from "../../../redux/auth/actions";
import { loginFetchPostData, updatePasswordText, updateUsernameText } from "../../../redux/login/actions";
import Profile from "../Profile/Profile";
import Login from "./Login";


class LoginContainer extends Component {
    constructor(props) {
        super(props);
        this.onChangeUsernameInputText.bind(this);
        this.onChangePasswordInputText.bind(this);
        this.onLoginButtonClick.bind(this);
        this.onLogOutButtonClick.bind(this);
    }

    onChangeUsernameInputText = event => {
        const text = event.target.value;
        this.props.updateUsernameText(text);
    }

    onChangePasswordInputText = event => {
        const text = event.target.value;
        this.props.updatePasswordText(text);
    }

    onLoginButtonClick = event => {
        event.preventDefault();
        const loginFormData = {
            login: this.props.usernameText,
            password: this.props.passwordText
        };
        this.props.loginFetchPostData('http://localhost:54407/api/auth/authenticate', loginFormData);
    }

    onLogOutButtonClick = () => {
        localStorage.clear();
        this.props.setAuthData();
    }

    render () {
        const {usernameText, passwordText, token, user, hasErrored, isLoading} = this.props;

        if (hasErrored) {
            return <p>Во время загрузки страницы произошла ошибка</p>
        }

        if (isLoading) {
            return <p>Loading...</p>
        }

        if (token) {
            
            if (hasErrored) {
                return <p>Во время загрузки страницы произошла ошибка</p>
            }

            if (isLoading) {
                return <p>Loading...</p>
            }

            return <Profile 
                        user={user}
                        onLogOutButtonClick={this.onLogOutButtonClick}
            />
        }


        return <Login 
                    usernameText={usernameText}
                    passwordText={passwordText}
                    onChangeUsernameInputText={this.onChangeUsernameInputText}
                    onChangePasswordInputText={this.onChangePasswordInputText}
                    onLoginButtonClick={this.onLoginButtonClick}
        />
    }
}


const mapStateToProps = state => ({
    usernameText: state.login.usernameText,
    passwordText: state.login.passwordText,
    token: state.auth.token,
    user: state.auth.user,
    hasErrored: state.login.hasErrored,
    isLoading: state.login.isLoading
})

const mapDispatchToProps = dispatch => ({
    updateUsernameText: text => dispatch(updateUsernameText(text)),
    updatePasswordText: text => dispatch(updatePasswordText(text)),
    loginFetchPostData: (url, loginFormData) => dispatch(loginFetchPostData(url, loginFormData)),
    setAuthData: () => dispatch(setAuthData())
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);