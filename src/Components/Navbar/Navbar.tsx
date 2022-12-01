import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './navbar.module.css'

function Navbar() {
    return (
        <nav className={style.nav}>
             <div>
                 <NavLink to='/profile'>Profile</NavLink>
             </div>
             <div>
                 <NavLink to='/messages'>Messages</NavLink>
             </div>
             <div>
                 <NavLink to='/news'>News</NavLink>
             </div>
             <div>
                 <NavLink to='/music'>Music</NavLink>
             </div>
             <div>
                 <NavLink to='/settings'>Settings</NavLink>
             </div>
         </nav>
    );
}

export default Navbar