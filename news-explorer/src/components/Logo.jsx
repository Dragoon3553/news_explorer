import { NavLink } from "react-router-dom";

function Logo() {
  return (
    <NavLink to="/" className="nav__logo">
      <h1 className="nav__title">NewsExplorer</h1>
    </NavLink>
  );
}

export default Logo;
