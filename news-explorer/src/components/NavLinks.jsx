// React Import
import { useContext } from "react";
import { NavLink } from "react-router-dom";

// Context Import
import LoginContext from "../contexts/LoginContext";

// Image Import
import logoutMain from "../assets/logout_main.png";
import logoutSaved from "../assets/logout.png";
import CurrentUserContext from "../contexts/CurrentUserContext";

function NavLinks({ handleLoginClick, handleLogout, variant }) {
  const { isLoggedIn } = useContext(LoginContext);
  const { currentUser } = useContext(CurrentUserContext);

  const isSaved = variant === "saved";

  return (
    <ul className="nav__list">
      <li className="nav__item">
        <NavLink to="/" className="nav__link">
          Home
        </NavLink>
      </li>

      {isLoggedIn ? (
        <>
          <li className="nav__item nav__item_type_save">
            <NavLink
              to="/saved-articles"
              className="nav__link nav__link_type_save"
            >
              Saved articles
            </NavLink>
          </li>
          <li className="nav__item">
            <button
              onClick={handleLogout}
              type="button"
              className="nav__signout-btn"
            >
              <p className="nav__btn-name">{currentUser.username}</p>
              <img
                src={isSaved ? logoutSaved : logoutMain}
                alt="signout"
                className="nav__btn-img"
              />
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
