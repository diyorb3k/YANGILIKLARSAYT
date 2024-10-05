import "./Header.scss";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <header>
        <div className="container">
          <nav>
            <ul>LOGO</ul>
            <ul>
                <li>Hom</li>
              <li>About</li>
              <li>Contack</li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};
export default Header;
