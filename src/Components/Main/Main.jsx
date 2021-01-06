import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AuthorsContainer from '../Authors/index';
import BooksContainer from '../Books/index';
import GenresContainer from '../Genres/index';
import SignupContainer from '../Auth/Signup/index';
import LoginContainer from '../Auth/Login/index';
import './Main.css';

const Main = () => {
    return (
        <main className="main">
            <Switch>
                <Route path="/books">
                    <BooksContainer />
                </Route>
                <Route path="/genres">
                    <GenresContainer />
                </Route>
                <Route path="/authors">
                    <AuthorsContainer />
                </Route>
                <Route path="/login">
                    <LoginContainer />
                </Route>
                <Route path="/signup">
                    <SignupContainer />
                </Route>
            </Switch>
        </main>
    );
};

export default Main;
