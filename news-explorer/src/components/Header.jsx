import "../blocks/header.css";

function Header() {
  return (
    <header className="header">
      <h1 className="header__title">NewsExplorer</h1>
      <div className="header__container">
        <button className="header__home-btn">Home</button>
        <button className="header__login-status-btn">Sign in</button>
      </div>
    </header>
  );
}

export default Header;
