import { Component } from "react";
import { connect } from "react-redux";
import {
    setResponseText,
    signupFetchPostData,
    updateEmailText,
    updateFirstnameText,
    updateLastnameText,
    updateLoginText,
    updatePasswordText
} from "../../../redux/signup/actions";
import Signup from './Signup';


class SignupContainer extends Component {
    constructor(props) {
        super(props);
        this.onChangeFirstnameInpuText.bind(this);
        this.onChangeLastnameInputText.bind(this);
        this.onChangeLoginInputText.bind(this);
        this.onChangeEmailInputText.bind(this);
        this.onChangePasswordInputText.bind(this);
        this.onRegistrationButtonClick.bind(this);
    }

    onChangeFirstnameInpuText = event => {
        const text = event.target.value;
        this.props.updateFirstnameText(text);
    }

    onChangeLastnameInputText = event => {
        const text = event.target.value;
        this.props.updateLastnameText(text);
    }

    onChangeLoginInputText = event => {
        const text = event.target.value;
        this.props.updateLoginText(text);
    }

    onChangeEmailInputText = event => {
        const text = event.target.value;
        this.props.updateEmailText(text);
    }

    onChangePasswordInputText = event => {
        const text = event.target.value;
        this.props.updatePasswordText(text);
    }

    onRegistrationButtonClick = event => {
        event.preventDefault();
        const signupFormData = {
            firstName: this.props.firstNameText,
            lastName: this.props.lastNameText,
            login: this.props.loginText,
            email: this.props.emailText,
            password: this.props.passwordText
        };
        this.props.signupFetchPostData('http://localhost:54407/api/auth/registration', signupFormData);
    }

    onLoginLinkClick = () => {
        this.props.setResponseText('');
    }

    render() {

        const {
            firstNameText,
            lastNameText,
            loginText,
            emailText,
            passwordText,
            hasErrored,
            isLoading,
            responseText
        } = this.props;

        if (hasErrored) 
            return <p>{responseText}</p>

        if (isLoading)
            return <p>Loading...</p>


        return (
            <div>
                {responseText ? <p>{responseText}</p> : null}
                <Signup
                    firstNameText={firstNameText}
                    lastNameText={lastNameText}
                    loginText={loginText}
                    emailText={emailText}
                    passwordText={passwordText}
                    onChangeFirstnameInpuText={this.onChangeFirstnameInpuText}
                    onChangeLastnameInputText={this.onChangeLastnameInputText}
                    onChangeLoginInputText={this.onChangeLoginInputText}
                    onChangeEmailInputText={this.onChangeEmailInputText}
                    onChangePasswordInputText={this.onChangePasswordInputText}
                    onRegistrationButtonClick={this.onRegistrationButtonClick}
                    onLoginLinkClick={this.onLoginLinkClick}
                />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        firstNameText: state.signup.firstNameText,
        lastNameText: state.signup.lastNameText,
        loginText: state.signup.loginText,
        emailText: state.signup.emailText,
        passwordText: state.signup.passwordText,
        hasErrored: state.signup.hasErrored,
        isLoading: state.signup.isLoading,
        responseText: state.signup.responseText
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateFirstnameText: text => dispatch(updateFirstnameText(text)),
        updateLastnameText: text => dispatch(updateLastnameText(text)),
        updateLoginText: text => dispatch(updateLoginText(text)),
        updateEmailText: text => dispatch(updateEmailText(text)),
        updatePasswordText: text => dispatch(updatePasswordText(text)),
        signupFetchPostData: (url, signupFormData) => dispatch(signupFetchPostData(url, signupFormData)),
        setResponseText: text => dispatch(setResponseText(text))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupContainer);