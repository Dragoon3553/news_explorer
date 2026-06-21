// Component Imports
import Logo from "./Logo";
import NavLinks from "./NavLinks";

// CSS Import
import "../blocks/navigation.css";

function Navigation({
  handleLoginClick,
  handleMenuClick,
  isMobile,
  isModalOpen,
  handleLogout,
  variant,
}) {
  return (
    <nav className="nav">
      <Logo />
      <div
        className={`nav__container ${isMobile ? "nav__container_opened" : ""}`}
      >
        <NavLinks
          handleLoginClick={handleLoginClick}
          handleLogout={handleLogout}
          variant={variant}
        />
      </div>

      {isMobile && !isModalOpen && (
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
