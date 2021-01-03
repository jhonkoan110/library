import './App.css';
import Footer from './Components/Footer/Footer';
import HeaderContainer from './Components/Header/HeaderContainer';
import Main from './Components/Main/Main';

function App() {

  
  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <div className='main-footer-container'>
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;
