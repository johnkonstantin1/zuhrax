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
import { useEffect } from "react";
import i18next from "i18next";
import React, { useState } from "react";
import { SiLinuxmint, SiMoleculer } from "react-icons/si";
import { FaBars, FaTimes } from "react-icons/fa";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);

  const { i18n, t } = useTranslation(["common", "common"]);

  useEffect(() => {
    if (localStorage.getItem("i18nextLng")?.length > 2) {
      i18next.changeLanguage("en");
    }
  }, []);

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <div name="top" className="navbar">
      <div className="container">
        <div className="logo">
          <SiMoleculer className="icon" />
          <Link to="/">
            <h1 style={{fontFamily: "monospace"}}>Denatech</h1>
          </Link>
        </div>

        <ul className={nav ? "nav-menu active" : "nav-menu"}>
          <Link to="/">
            <li>{t("common:hommme")}</li>
          </Link>
          <Link to="/products">
            <li>{t("productss")}</li>
          </Link>
          <Link to="/uses">
            <li>{t("usess")}</li>
          </Link>
          <Link to="/services">
            <li>{t("productss")}</li>
          </Link>
          <li>
            <select
              onChange={handleLanguageChange}
              value={localStorage.getItem("i18nextLng")}
            >
              <option value="en">English</option>
              <option value="uk">Ukrainian</option>
            </select>
          </li>
        </ul>
        <div className="hamburger" onClick={handleNav}>
          {!nav ? <FaBars className="icon" /> : <FaTimes className="icon" />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
