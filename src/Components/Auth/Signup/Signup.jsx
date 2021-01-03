import { NavLink } from 'react-router-dom';
import './Signup.css';


const Signup = props => {
    return (
        <div className='login'>
            <form className='login-form'>
                <h1>Регистрация</h1>
                <div className='form-item-container'>
                    <label htmlFor="">Имя</label>
                    <input type="text" value={props.firstNameText} onChange={props.onChangeFirstnameInpuText} />
                </div>
                <div className='form-item-container'>
                    <label htmlFor="">Фамилия</label>
                    <input type="text" value={props.lastNameText} onChange={props.onChangeLastnameInputText} />
                </div>
                <div className='form-item-container'>
                    <label htmlFor="">Логин</label>
                    <input type="text" value={props.loginText} onChange={props.onChangeLoginInputText} />
                </div>
                <div className='form-item-container'>
                    <label htmlFor="">Ваша почта</label>
                    <input type="text" value={props.emailText} onChange={props.onChangeEmailInputText}/>
                </div>
                <div className='form-item-container'>
                    <label>Пароль</label>                    
                    <input type="password" value={props.passwordText} onChange={props.onChangePasswordInputText}/>
                </div>       
                <div className='form-item-container'>
                    <button onClick={props.onRegistrationButtonClick}>Зарегистрироваться</button>
                </div>
                <div className="form-item-container">
                    <p>Уже есть учётная запись? <NavLink to='/login' className='signup-btn' onClick={props.onLoginLinkClick}>Войти</NavLink></p>
                </div>
            </form>
        </div>
    )
}

export default Signup;