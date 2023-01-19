import { Link } from "react-router-dom";
import { useState } from "react";


const Navbar = () => {
  const [active, setActive] = useState('nav-menu')
  const [toggleIcon, setToggleIcon] = useState('nav-toggler')

  const toggleNav = () => {
    active === 'nav-menu' 
    ? setActive('nav-menu nav-active') 
    : setActive('nav-menu')

    toggleIcon === 'nav-toggler' 
    ? setToggleIcon('nav-toggler toggle')
    : setToggleIcon('nav-toggler')
  }



  return (
    <nav className="nav">
      <h1>
        <Link to={'/'} className="title">Westcoast Education</Link>
      </h1>
      <ul className={active}>
        <li className="nav-item" onClick={toggleNav}>
          <Link to="/">Startsida</Link> 
        </li>
        <li className="nav-item" onClick={toggleNav}>
          <Link to="/courses">Våra kurser</Link> 
        </li>
        <li className="nav-item" onClick={toggleNav}>
          <Link to="/teachers">Våra lärare</Link> 
        </li>
      </ul>
      <div className={toggleIcon} onClick={toggleNav}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  )
}

export default Navbar;
