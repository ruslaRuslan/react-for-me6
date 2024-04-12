import { NavLink } from "react-router-dom";
import NavLinkByRuslan from "../NavLinkByRuslan";

function Header() {
  return (
    <nav>
<NavLinkByRuslan title="home" to="/" />
<NavLinkByRuslan title="about" to="/about" />
<NavLinkByRuslan title="contact" to="/contact" />


    </nav>
  );
}

export default Header;
