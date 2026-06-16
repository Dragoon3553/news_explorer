// Component Imports
import Navigation from "./Navigation";
import SearchForm from "./SearchForm";

// CSS Import
import "../blocks/header.css";

function Header({
  handleLoginClick,
  handleMenuClick,
  isMobile,
  isModalOpen,
  fetchArticles,
  variant,
}) {
  const isSaved = variant === "saved";

  return (
    <header className="header">
      <Navigation
        handleLoginClick={handleLoginClick}
        handleMenuClick={handleMenuClick}
        isMobile={isMobile}
        isModalOpen={isModalOpen}
        variant={variant}
      />
      {isSaved ? (
        <div className="header__container">
          <p className="header__tag">Saved articles</p>
          <h2 className="header__title">Elise, you have 5 saved articles</h2>
          <p className="header__subtitle">
            By keywords:{" "}
            <span className="header__keywords">
              Nature, Yellowstone, and 2 other
            </span>
          </p>
        </div>
      ) : (
        <div className="header__container">
          <h2 className="header__title">What's going on in the world?</h2>
          <p className="header__subtitle">
            Find the latest news on any topic and save them in your personal
            account.
          </p>
          <SearchForm fetchArticles={fetchArticles} />
        </div>
      )}
    </header>
  );
}

export default Header;
