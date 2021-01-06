import React, { Component } from 'react';
import { connect } from 'react-redux';
import Signup from './Signup';
import { setResponseText, signupFetchPostData } from '../../../redux/signup/actions';

class SignupContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstNameText: '',
            lastNameText: '',
            loginText: '',
            emailText: '',
            passwordText: '',
        };
    }

    onChangeInputHadler = (event) => {
        const text = event.target.value;
        const inputId = event.target.id;
        this.setState({ [inputId]: text });
    };

    onRegistrationButtonClickHandler = (event) => {
        event.preventDefault();

        const signupFormData = {
            firstName: this.state.firstNameText,
            lastName: this.state.lastNameText,
            login: this.state.loginText,
            email: this.state.emailText,
            password: this.state.passwordText,
        };

        this.props.signupFetchPostData(
            'http://localhost:54407/api/auth/registration',
            signupFormData,
        );

        this.setState({
            firstNameText: '',
            lastNameText: '',
            loginText: '',
            emailText: '',
            passwordText: '',
        });
    };

    onLoginLinkClickHandler = () => {
        this.props.setResponseText('');
    };

    render() {
        const { firstNameText, lastNameText, loginText, emailText, passwordText } = this.state;
        const { hasErrored, isLoading, responseText } = this.props;

        if (hasErrored) return <p>{responseText}</p>;

        if (isLoading) return <p>Loading...</p>;

        return (
            <div>
                {responseText ? <p>{responseText}</p> : null}
                <Signup
                    firstNameText={firstNameText}
                    lastNameText={lastNameText}
                    loginText={loginText}
                    emailText={emailText}
                    passwordText={passwordText}
                    onChangeInput={this.onChangeInputHadler}
                    onRegistrationButtonClick={this.onRegistrationButtonClickHandler}
                    onLoginLinkClick={this.onLoginLinkClickHandler}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        hasErrored: state.signup.hasErrored,
        isLoading: state.signup.isLoading,
        responseText: state.signup.responseText,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        signupFetchPostData: (url, signupFormData) =>
            dispatch(signupFetchPostData(url, signupFormData)),
        setResponseText: (text) => dispatch(setResponseText(text)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupContainer);
