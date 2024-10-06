import "./Header.scss";
import { Button } from 'antd';
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
            <div className="Antd_btn">
            <Button type="primary">Kirish</Button>

            </div>
          </ul>
          
        </nav>
      </div>
    </header>
  );
};

export default Header;
