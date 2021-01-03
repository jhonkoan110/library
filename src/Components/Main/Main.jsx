import { Route } from "react-router-dom";
import "./Main.css";
import AuthorsContainer from "../Authors/AuthorsContainer";
import BooksContainer from "../Books/BooksContainer";
import GenresContainer from "../Genres/GenresContainer";
import SignupContainer from "../Auth/Signup/SignupContainer";
import LoginContainer from "../Auth/Login/LoginContainer";


const Main = () => {
    return (
        <main className='main'>
            <Route 
                path='/books'
                component={BooksContainer}
            />
            <Route 
                path='/genres'
                render={ () => <GenresContainer /> }
            />
            <Route 
                path='/authors'
                render={ () => <AuthorsContainer /> }
            />
            <Route 
                path='/login'
                render={ () => <LoginContainer /> }
            />
            <Route 
                path='/signup'
                render={ () => <SignupContainer /> }
            />
        </main>
    )
}


export default Main;