// React Import
import { useContext } from "react";

// Context Import
import LoginContext from "../contexts/LoginContext";

// Component Imports
import Logo from "./Logo";
import NavLinks from "./NavLinks";

// CSS Import
import "../blocks/navigation.css";

function Navigation({ handleLoginClick, handleMenuClick, isMobile }) {
  const { isLoggedIn } = useContext(LoginContext);

  return (
    <nav className="nav">
      <Logo />
      <div
        className={`nav__container ${isMobile ? "nav__container_opened" : ""}`}
      >
        <NavLinks handleLoginClick={handleLoginClick} />
      </div>

      {isMobile && (
        <button
          onClick={handleMenuClick}
          type="button"
          className="nav__hamburger"
        ></button>
      )}
    </nav>
  );
}

export default Navigation;
