// React Import
import { useContext } from "react";

// React Imports
import { NavLink } from "react-router-dom";

// Context Import
import LoginContext from "../contexts/LoginContext";

// Image Import
import logout from "../assets/logout_main.png";

// CSS Import
import "../blocks/navigation.css";

function Navigation() {
  const { isLoggedIn } = useContext(LoginContext);

  return (
    <nav className="nav">
      <h1 className="nav__title">NewsExplorer</h1>
      {isLoggedIn ? (
        <ul className="nav__list">
          <li className="nav__item">
            <NavLink to="/" className="nav__link">
              Home
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/saved-articles" className="nav__link">
              Saved articles
            </NavLink>
          </li>
          <li className="nav__item">
            <button className="nav__signout-btn">
              <p className="nav__btn-name">Elise</p>
              <img src={logout} alt="signout" className="nav__btn-img" />
            </button>
          </li>
        </ul>
      ) : (
        <ul className="nav__list">
          <li className="nav__item">
            <NavLink to="/" className="nav__link">
              Home
            </NavLink>
          </li>
          <li className="nav__item">
            <button className="nav__signin-btn">Sign in</button>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navigation;
