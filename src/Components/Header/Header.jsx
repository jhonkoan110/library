import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = ({ user, token }) => {
    return (
        <div className="header">
            <div className="header-inner">
                <div>
                    <NavLink to="/books" activeClassName="active">
                        Книги
                    </NavLink>
                    <NavLink to="/genres" activeClassName="active">
                        Жанры
                    </NavLink>
                    <NavLink to="/authors" activeClassName="active">
                        Авторы
                    </NavLink>
                </div>
                <div>
                    {token ? (
                        <NavLink to="/login" activeClassName="active">
                            {user}
                        </NavLink>
                    ) : (
                        <NavLink to="/login" activeClassName="active">
                            Войти
                        </NavLink>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Header;
