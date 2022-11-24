import React from 'react';
 import st from "./header.module.css";


 function Header() {
     return (
         <header className={st.header}>
             <img src={'https://assets.dryicons.com/uploads/icon/svg/10841/a2d00c35-4efa-4eca-a129-6fb84a64e1c2.svg'}/>
         </header>
     );
 }

 export default Header