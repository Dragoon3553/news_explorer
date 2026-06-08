// Component Imports
import Navigation from "./Navigation";
import SearchForm from "./SearchForm";

// CSS Import
import "../blocks/header.css";

function Header({ handleLoginClick }) {
  return (
    <header className="header">
      <Navigation handleLoginClick={handleLoginClick} />
      <h2 className="header__title">What's going on in the world?</h2>
      <p className="header__subtitle">
        Find the latest news on any topic and save them in your personal
        account.
      </p>
      <SearchForm />
    </header>
  );
}

export default Header;
