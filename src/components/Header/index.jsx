import { NavLink } from "react-router-dom";
import NavLinkByRuslan from "../NavLinkByRuslan";
import { useContext } from "react";

function Header() {
  useContext()
  return (
    <nav>
      <NavLinkByRuslan title="Home" to="/" />
      <NavLinkByRuslan title="About" to="/about" />
      <NavLinkByRuslan title="calculator" to="/calculator" />
      <NavLinkByRuslan title="Users" to="/users" />
    </nav>
  );
}

export default Header;
