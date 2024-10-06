import "./Header.scss";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="container">
        <nav>
          <ul className="logo">
            <li>LOGO</li>
          </ul>
          <ul className="nav-links">
            <li>
              <NavLink to="/">Hom</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <div>
              <button>Login in</button>
            </div>
          </ul>
          
        </nav>
      </div>
    </header>
  );
};

export default Header;
