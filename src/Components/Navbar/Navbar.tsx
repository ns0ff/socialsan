import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './navbar.module.css'

function Navbar() {
    return (
        <nav className={style.nav}>
            <div className={style.item}>
                <NavLink className={(navDate) => (navDate.isActive ? style.active : "")} to='/profile'>Profile</NavLink>
            </div>
            <div className={style.item}>
                <NavLink className={(navDate) => (navDate.isActive ? style.active : "")} to='/messages'>Messages</NavLink>
            </div>
            <div className={style.item}>
                <NavLink className={(navDate) => (navDate.isActive ? style.active : "")} to='/news'>News</NavLink>
            </div>
            <div className={style.item}>
                <NavLink className={(navDate) => (navDate.isActive ? style.active : "")} to='/music'>Music</NavLink>
            </div>
            <div className={style.item}>
                <NavLink className={(navDate) => (navDate.isActive ? style.active : "")} to='/settings'>Settings</NavLink>
            </div>
        </nav>
    );
}

export default Navbar