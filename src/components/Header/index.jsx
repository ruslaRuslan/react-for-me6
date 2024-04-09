import { useContext } from "react";
import { FN_Context } from "../../context/FullNameContext";
import NavLinkByRuslan from "../NavLinkByRuslan";

function Header() {
  const {ad}= useContext(FN_Context)
  return (
    <nav>
      <p>xos gelipsen {ad}</p>
      <NavLinkByRuslan title="Home" to="/" />
      <NavLinkByRuslan title="About" to="/about" />
      <NavLinkByRuslan title="calculator" to="/calculator" />
      <NavLinkByRuslan title="Users" to="/users" />
    </nav>
  );
}

export default Header;
