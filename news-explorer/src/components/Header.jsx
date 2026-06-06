// Component Import
import Navigation from "./Navigation";

// CSS Import
import "../blocks/header.css";

function Header() {
  return (
    <header className="header">
      <h1 className="header__title">NewsExplorer</h1>
      <Navigation />
    </header>
  );
}

export default Header;
