// React Import
import { useContext } from "react";
import { NavLink } from "react-router-dom";

// Context Import
import LoginContext from "../contexts/LoginContext";

// Image Import
import logout from "../assets/logout_main.png";

function NavLinks({ handleLoginClick }) {
  const { isLoggedIn } = useContext(LoginContext);

  return (
    <ul className="nav__list">
      <li className="nav__item">
        <NavLink to="/" className="nav__link">
          Home
        </NavLink>
      </li>

      {isLoggedIn ? (
        <>
          <li className="nav__item">
            <NavLink to="/saved-articles" className="nav__link">
              Saved articles
            </NavLink>
          </li>
          <li className="nav__item">
            <button type="button" className="nav__signout-btn">
              <p className="nav__btn-name">Elise</p>
              <img src={logout} alt="signout" className="nav__btn-img" />
            </button>
          </li>
        </>
      ) : (
        <li className="nav__item">
          <button
            onClick={handleLoginClick}
            type="button"
            className="nav__signin-btn"
          >
            Sign in
          </button>
        </li>
      )}
    </ul>
  );
}

export default NavLinks;
