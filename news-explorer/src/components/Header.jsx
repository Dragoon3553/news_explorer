// Component Imports
import Navigation from "./Navigation";
import SearchForm from "./SearchForm";

// CSS Import
import "../blocks/header.css";

function Header({ handleLoginClick, handleMenuClick, isMobile, isModalOpen }) {
  return (
    <header className="header">
      <Navigation
        handleLoginClick={handleLoginClick}
        handleMenuClick={handleMenuClick}
        isMobile={isMobile}
        isModalOpen={isModalOpen}
      />
      <div className="header__container">
        <h2 className="header__title">What's going on in the world?</h2>
        <p className="header__subtitle">
          Find the latest news on any topic and save them in your personal
          account.
        </p>
        <SearchForm />
      </div>
    </header>
  );
}

export default Header;
