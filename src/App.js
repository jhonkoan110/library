import React from 'react';
import Footer from './components/Footer/index';
import HeaderContainer from './components/Header/index';
import Main from './components/Main/index';
import './App.css';

function App() {
    return (
        <div className="app-wrapper">
            <HeaderContainer />
            <div className="main-footer-container">
                <Main />
                <Footer />
            </div>
        </div>
    );
}

export default App;
