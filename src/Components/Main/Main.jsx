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
                <Route path="/books" render={() => <BooksContainer />} />
                <Route path="/genres" render={() => <GenresContainer />} />
                <Route path="/authors" render={() => <AuthorsContainer />} />
                <Route path="/login" render={() => <LoginContainer />} />
                <Route path="/signup" render={() => <SignupContainer />} />
            </Switch>
        </main>
    );
};

export default Main;
