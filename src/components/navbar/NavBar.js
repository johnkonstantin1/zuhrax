// import React from "react";
// import "./NavBar.css";
// import { SiMoleculer } from "react-icons/si";
// import { FaBars, FaTimes } from "react-icons/fa";
// import { useState } from "react";
// const NavBar = () => {

//     const [nav, setNav] = useState(false)
//     const handleNav = () => setNav(!nav)

//   return (
//     <div className="navbar">
//       <div className="container">
//         <div className="logo">
//           <SiMoleculer className="icon" />
//           <h1>Denatech</h1>
//         </div>

//         <ul className="nav-menu">
//           <li>Home</li>
//           <li>Products</li>
//           <li>Uses</li>
//           <li>Services</li>
//           <li>Contact</li>
//         </ul>
//         <div className="hamburger" onClick={handleNav}>
//           {!nav ? <FaBars className="icon" /> : <FaTimes className="icon" />}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NavBar;

import React, { useState } from 'react'
import { SiLinuxmint, SiMoleculer } from 'react-icons/si'
import { FaBars, FaTimes } from 'react-icons/fa'
import './NavBar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => setNav(!nav)


    return (
        <div name='top' className='navbar'>
            <div className="container">
                <div className="logo">
                    <SiMoleculer className='icon' />
                    <Link to='/'><h1>Denatech</h1></Link>
                </div>

                <ul className={nav ? 'nav-menu active' : 'nav-menu'}>
                    <Link to='/'><li>Home</li></Link>
                    <Link to='/products'><li>Products</li></Link>
                    <Link to='/uses'><li>Uses</li></Link>
                    <Link to='/services'><li>Services</li></Link>
                </ul>
                <div className="hamburger" onClick={handleNav}>
                    {!nav ? (<FaBars className='icon' />) : (<FaTimes className='icon' />)}
                </div>
            </div>
        </div>
    )
}

export default Navbar